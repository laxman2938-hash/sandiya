# Vercel Environment Variables Setup Guide

## Required Environment Variables for Vercel

To make the site work on Vercel production, you need to set these environment variables in your Vercel project settings:

### Database Configuration (Supabase)
```
DATABASE_URL = postgresql://postgres.ljjjwwkwuzubccheklwu:hellouser@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true
DIRECT_URL = postgresql://postgres:hellouser@db.ljjjwwkwuzubccheklwu.supabase.co:5432/postgres?sslmode=require
```

### Vercel Blob Storage
```
BLOB_READ_WRITE_TOKEN = vercel_blob_rw_KBdY7IFqtVvxqCGL_W1lgZBJRW22rpp4vhzgickHPpjDJzV
```

### Admin Credentials
```
ADMIN_USERNAME = admin@sandiyahrm.com
ADMIN_PASSWORD = sandiyahrm@911
```

### Supabase Configuration
```
NEXT_PUBLIC_SUPABASE_URL = https://ljjjwwkwuzubccheklwu.supabase.co
SUPABASE_SERVICE_ROLE_KEY = [Your service role key]
```

### Other
```
NEXT_PUBLIC_API_URL = /api
AUTH_SECRET = [Generate a random secret]
```

## How to Set These in Vercel

1. Go to https://vercel.com/dashboard
2. Select your "sandiya" project
3. Click "Settings" → "Environment Variables"
4. Add each variable above with its value
5. Make sure to select the appropriate environments (Production, Preview, Development)
6. Redeploy the project

## Quick Fix: Just Add DATABASE_URL

The main issue preventing clients from showing:
- **LOCAL**: Works because `.env.local` has `DATABASE_URL`
- **VERCEL**: Fails because Vercel doesn't have `DATABASE_URL` set

Add at least these to Vercel to fix the immediate issue:
```
DATABASE_URL
DIRECT_URL
BLOB_READ_WRITE_TOKEN
```
