# Quick Start: Shopify Theme Deployment

This guide will help you quickly deploy the Luna Lux Hair theme to your Shopify store.

## Prerequisites

- ✅ Node.js 18+ installed
- ✅ npm or bun installed
- ✅ A Shopify store (Partner development store or production)
- ✅ Shopify CLI installed

## Step 1: Install Shopify CLI

```bash
npm install -g @shopify/cli @shopify/theme
```

## Step 2: Clone & Setup

```bash
# Clone the repository
git clone https://github.com/jobbyist/lunastudio.git
cd lunastudio

# Install dependencies
npm install
```

## Step 3: Build the Theme

```bash
# Build React app for Shopify
npm run build:shopify
```

This will generate:
- `theme/assets/react-app.js` - Main React bundle
- `theme/assets/react-app.css` - Styles bundle

## Step 4: Connect to Your Shopify Store

```bash
# Authenticate with Shopify
shopify auth login

# Navigate to theme directory
cd theme
```

## Step 5: Deploy

### Option A: Push to Live Theme

```bash
shopify theme push
```

### Option B: Development Theme (Recommended for testing)

```bash
shopify theme push --development
```

### Option C: Preview (Live reload for development)

```bash
shopify theme dev
```

This will:
- Upload your theme to Shopify
- Open a preview URL
- Watch for file changes
- Hot reload on changes

## Step 6: Activate Theme

1. Go to your Shopify Admin
2. Navigate to **Online Store > Themes**
3. Find your theme (usually called "Development" or "Luna Lux Hair")
4. Click **Publish** to make it live

## Updating the Theme

After making changes to the React app:

```bash
# Rebuild
npm run build:shopify

# Push changes
cd theme
shopify theme push
```

## Customizing the Theme

### React Components
Edit files in `src/` directory, then rebuild:
```bash
npm run build:shopify
```

### Liquid Templates
Edit files in `theme/` directory:
- `theme/layout/` - Main layout
- `theme/sections/` - Reusable sections  
- `theme/templates/` - Page templates
- `theme/snippets/` - Code snippets

Changes to Liquid files can be pushed directly:
```bash
cd theme
shopify theme push
```

### Theme Settings
- Edit `theme/config/settings_schema.json`
- Or customize via Shopify Admin: **Online Store > Themes > Customize**

## Troubleshooting

### Build fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build:shopify
```

### Assets not loading
1. Check `theme/assets/` contains `react-app.js` and `react-app.css`
2. Clear browser cache
3. Verify assets in Shopify admin: **Online Store > Themes > Actions > Edit code > Assets**

### Shopify CLI issues
```bash
# Update Shopify CLI
npm install -g @shopify/cli@latest @shopify/theme@latest

# Re-authenticate
shopify auth logout
shopify auth login
```

### Theme not visible
1. Check theme uploaded: **Shopify Admin > Online Store > Themes**
2. Verify store is active (not password protected)
3. Check for JavaScript errors in browser console

## Development Workflow

Best practice for ongoing development:

1. **Local development:**
   ```bash
   npm run dev  # Run React app standalone
   ```

2. **Test changes in Shopify:**
   ```bash
   npm run build:shopify
   cd theme
   shopify theme dev
   ```

3. **Deploy to production:**
   ```bash
   npm run build:shopify
   cd theme
   shopify theme push
   # Then publish via Shopify Admin
   ```

## Support

- 📖 Full documentation: [SHOPIFY_THEME_README.md](SHOPIFY_THEME_README.md)
- 🐛 Issues: https://github.com/jobbyist/lunastudio/issues
- 📚 Shopify Theme Docs: https://shopify.dev/docs/themes

## Next Steps

- [ ] Customize theme colors in Shopify admin
- [ ] Add products to your store
- [ ] Configure payment providers
- [ ] Set up shipping zones
- [ ] Test checkout process
- [ ] Add custom domain
- [ ] Enable SSL

---

**Need Help?** Check the [full documentation](SHOPIFY_THEME_README.md) or open an issue.
