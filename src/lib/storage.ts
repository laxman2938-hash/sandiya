import { writeFile, mkdir } from 'fs/promises';
import { existsSync } from 'fs';
import { join } from 'path';

// Vercel Blob is optional; only used when token is provided
let putFn: undefined | ((path: string, data: ArrayBuffer | Buffer | Blob | File, opts: any) => Promise<any>);
try {
  // Dynamically require to avoid build errors if not installed locally
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  const blob = require('@vercel/blob');
  putFn = blob.put;
} catch (_) {
  // No-op: running locally without @vercel/blob installed
}

export async function saveImageToStorage(file: File, folder = 'uploads'): Promise<string> {
  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const timestamp = Date.now();
  const safeName = file.name?.replace(/[^a-zA-Z0-9.-]/g, '_') || 'upload.bin';
  const filename = `${timestamp}-${safeName}`;

  const blobToken = process.env.BLOB_READ_WRITE_TOKEN;
  const vercelProjectId = process.env.VERCEL_PROJECT_ID || process.env.VERCEL_URL;

  // If running on Vercel with a Blob token, upload to Vercel Blob
  if (putFn && blobToken && vercelProjectId) {
    const blobPath = `${folder}/${filename}`;
    const result = await putFn(blobPath, buffer, {
      access: 'public',
      token: blobToken,
      contentType: file.type || 'application/octet-stream',
    });
    // result.url is the public URL
    return result.url as string;
  }

  // Fallback: local filesystem (works in dev, not on Vercel runtime)
  const uploadDir = join(process.cwd(), 'public', folder);
  if (!existsSync(uploadDir)) {
    await mkdir(uploadDir, { recursive: true });
  }
  const filepath = join(uploadDir, filename);
  await writeFile(filepath, buffer);
  return `/${folder}/${filename}`;
}
