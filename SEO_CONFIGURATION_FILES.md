# Additional SEO Configuration Files

## 1. Enhanced Vite Configuration for SEO

Update your `vite.config.js` with build optimizations:

```javascript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom'],
          'icons': ['react-icons']
        }
      }
    },
    // Optimize build size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true
      }
    },
    // Enable CSS code splitting
    cssCodeSplit: true,
    // Source maps for production debugging
    sourcemap: false,
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 1000,
    // Optimize assets
    assetsInlineLimit: 4096,
  },
  server: {
    headers: {
      'Cache-Control': 'public, max-age=31536000'
    }
  }
})
```

## 2. Add .htaccess for Apache Servers (if applicable)

Create a `.htaccess` file in your public folder:

```apache
# Enable mod_rewrite
<IfModule mod_rewrite.c>
  RewriteEngine On
  
  # Remove .html extension
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^([^\.]+)$ $1.html [NC, L]
</IfModule>

# Enable GZIP compression
<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html
  AddOutputFilterByType DEFLATE text/plain
  AddOutputFilterByType DEFLATE text/xml
  AddOutputFilterByType DEFLATE text/css
  AddOutputFilterByType DEFLATE text/javascript
  AddOutputFilterByType DEFLATE application/javascript
  AddOutputFilterByType DEFLATE application/json
</IfModule>

# Set expires headers for cache control
<IfModule mod_expires.c>
  ExpiresActive On
  
  # Images
  ExpiresByType image/jpeg "access plus 1 year"
  ExpiresByType image/gif "access plus 1 year"
  ExpiresByType image/png "access plus 1 year"
  ExpiresByType image/webp "access plus 1 year"
  ExpiresByType image/svg+xml "access plus 1 year"
  
  # Stylesheets
  ExpiresByType text/css "access plus 1 year"
  
  # JavaScript
  ExpiresByType application/javascript "access plus 1 year"
  
  # Default
  ExpiresDefault "access plus 2 days"
</IfModule>

# Security headers
<IfModule mod_headers.c>
  Header set X-UA-Compatible "IE=edge"
  Header set X-Content-Type-Options "nosniff"
  Header set X-Frame-Options "SAMEORIGIN"
  Header set X-XSS-Protection "1; mode=block"
  Header set Referrer-Policy "strict-origin-when-cross-origin"
</IfModule>
```

## 3. CSP Security Header

Add to your deployment (Vercel, Netlify, etc.):

```
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline' https://fonts.googleapis.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://fonts.gstatic.com; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com; connect-src 'self' https:; frame-ancestors 'none';
```

## 4. Package Scripts for SEO Tasks

Add to your `package.json`:

```json
{
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "lint": "eslint .",
    "preview": "vite preview",
    "analyze": "vite-bundle-visualizer",
    "sitemap": "node scripts/generate-sitemap.js"
  }
}
```

## 5. Sitemap Generator Script

Create `scripts/generate-sitemap.js`:

```javascript
import fs from 'fs';
import path from 'path';

const baseURL = 'https://glownbride.com';
const pages = [
  '/',
  '/#about',
  '/#services',
  '/#gallery',
  '/#contact'
];

const generateSitemap = () => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages.map(page => `  <url>
    <loc>${baseURL}${page}</loc>
    <lastmod>${new Date().toISOString().split('T')[0]}</lastmod>
    <priority>${page === '/' ? '1.0' : '0.8'}</priority>
  </url>`).join('\n')}
</urlset>`;

  fs.writeFileSync(
    path.join(process.cwd(), 'public', 'sitemap.xml'),
    sitemap,
    'utf-8'
  );
  
  console.log('✅ Sitemap generated successfully!');
};

generateSitemap();
```

## 6. Vercel Configuration (if deploying on Vercel)

Create `vercel.json`:

```json
{
  "buildCommand": "npm run build",
  "outputDirectory": "dist",
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "SAMEORIGIN"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;"
        },
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    }
  ],
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

## 7. Netlify Configuration (if deploying on Netlify)

Create `netlify.toml`:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[dev]
  command = "npm run dev"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200

[[headers]]
  for = "/*"
  [headers.values]
    X-Content-Type-Options = "nosniff"
    X-Frame-Options = "SAMEORIGIN"
    X-XSS-Protection = "1; mode=block"
    Cache-Control = "public, max-age=31536000, immutable"
    Content-Security-Policy = "default-src 'self'; img-src 'self' data: https:; font-src 'self' https://fonts.gstatic.com;"

[[headers]]
  for = "/dist/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"
```

## 8. Google Tag Manager Setup Script

Add this to your `index.html` right after the opening `<head>` tag:

```html
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-XXXXXX');</script>
<!-- End Google Tag Manager -->
```

And add this right after the opening `<body>` tag:

```html
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXX"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->
```

---

## Next Steps Checklist:

- [ ] Update vite.config.js with build optimizations
- [ ] Set up Google Search Console
- [ ] Add Google Analytics/GTM code
- [ ] Submit sitemap to Google Search Console
- [ ] Create Google Business Profile
- [ ] Optimize and compress all images
- [ ] Add WebP format images for better performance
- [ ] Test Core Web Vitals with Lighthouse
- [ ] Set up Error Tracking (Sentry or similar)
- [ ] Monitor search rankings monthly

