# Vercel Environment Variables Setup - Critical

**Status**: Deployment failing because environment variables are not set in Vercel

## Problem
```
Environment Variable "DATABASE_URL" references Secret "database_url", which does not exist.
```

## Solution: Add Secrets to Vercel Dashboard

You need to manually add these environment variables in Vercel's dashboard:

### Step 1: Go to Vercel Project Settings
1. Visit: https://vercel.com/dashboard
2. Click on "sandiya" project
3. Go to **Settings** → **Environment Variables**

### Step 2: Add These Variables

Create each one as a **Secret** (not regular variable):

#### Database Configuration
```
Name: DATABASE_URL
Value: postgresql://postgres.ljjjwwkwuzubccheklwu:hellouser@aws-1-ap-south-1.pooler.supabase.com:6543/postgres?pgbouncer=true
Environment: Production, Preview, Development
```

```
Name: DIRECT_URL
Value: postgresql://postgres:hellouser@db.ljjjwwkwuzubccheklwu.supabase.co:5432/postgres?sslmode=require
Environment: Production, Preview, Development
```

#### Vercel Blob Storage
```
Name: BLOB_READ_WRITE_TOKEN
Value: vercel_blob_rw_KBdY7IFqtVvxqCGL_W1lgZBJRW22rpp4vhzgickHPpjDJzV
Environment: Production, Preview, Development
```

#### Admin Credentials
```
Name: ADMIN_USERNAME
Value: admin@sandiyahrm.com
Environment: Production, Preview, Development
```

```
Name: ADMIN_PASSWORD
Value: sandiyahrm@911
Environment: Production, Preview, Development
```

#### Optional (if needed)
```
Name: NEXT_PUBLIC_API_URL
Value: /api
Environment: Production, Preview, Development
```

### Step 3: Redeploy
After adding all variables:
1. Go to **Deployments**
2. Click the three dots on the latest failed deployment
3. Select **Redeploy** 
4. Or just push a new commit to trigger auto-deploy

## Why This is Needed

The `vercel.json` file references secrets with `@` prefix:
```json
"env": {
  "DATABASE_URL": "@database_url"
}
```

This tells Vercel to use a secret named `database_url`, but it hasn't been created yet in the dashboard.

## Verification

After setting variables, deployment should:
- ✅ Build successfully
- ✅ Connect to Supabase database
- ✅ Show clients on `/clients` page
- ✅ Admin panel should work
