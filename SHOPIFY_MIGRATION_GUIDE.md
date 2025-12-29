# Migration Guide: React App to Shopify Theme

This document explains what changed when converting the Luna Lux Hair React application into a Shopify theme.

## What Changed?

### New Theme Structure

The repository now includes a complete Shopify theme in the `theme/` directory:

```
theme/
├── assets/           # Static assets and compiled bundles
├── config/           # Theme settings
├── layout/           # Main layout file (theme.liquid)
├── locales/          # Translations
├── sections/         # Reusable theme sections
├── snippets/         # Reusable code snippets
└── templates/        # Page templates
```

### What Stayed the Same

✅ All original React code in `src/` remains unchanged
✅ Components, pages, and utilities work identically
✅ Shopify Storefront API integration remains the same
✅ Build system (Vite) still used
✅ TailwindCSS styling preserved
✅ TypeScript support maintained

### What's New

#### 1. Shopify Theme Files

**Added Liquid Templates:**
- `theme/layout/theme.liquid` - Main HTML structure
- `theme/templates/*.liquid` - Page templates for Shopify
- `theme/sections/*.liquid` - Reusable sections
- `theme/snippets/*.liquid` - Code snippets

**Added Configuration:**
- `theme/config/settings_schema.json` - Theme customization options
- `theme/config/settings_data.json` - Default theme settings
- `theme/shopify.theme.toml` - Shopify CLI configuration

**Added Assets:**
- `theme/assets/global.js` - Theme-level JavaScript
- `theme/assets/theme.css` - Base CSS before React loads

#### 2. Build Configuration

**New Vite Config:**
- `vite.config.shopify.ts` - Builds React app for Shopify
- Outputs to `theme/assets/` instead of `dist/`
- Bundles named `react-app.js` and `react-app.css`

**New Build Script:**
- `npm run build:shopify` - Builds for Shopify theme
- `build-theme.sh` - Convenient build script

#### 3. Documentation

Added comprehensive documentation:
- `SHOPIFY_THEME_README.md` - Full theme documentation
- `SHOPIFY_QUICK_START.md` - Quick deployment guide
- `SHOPIFY_SETUP_CHECKLIST.md` - Setup checklist
- `SHOPIFY_ARCHITECTURE.md` - Architecture overview
- `SHOPIFY_MIGRATION_GUIDE.md` - This document

## How It Works

### Before (Standalone React App)

```
User → Static Host (GitHub Pages) → React App → Shopify Storefront API
```

The app was deployed as a standalone website that used Shopify's Storefront API for products and cart.

### After (Shopify Theme)

```
User → Shopify Store → Theme (Liquid + React) → Shopify APIs
```

The app now runs **within** Shopify as a theme, with better integration and SEO.

## Deployment Changes

### Before

```bash
npm run build
# Deploy dist/ to GitHub Pages or hosting
```

### After

```bash
npm run build:shopify    # Build React for Shopify
cd theme
shopify theme push       # Upload to Shopify
```

## Development Workflow Changes

### Before: Standalone Development

```bash
npm run dev              # Run dev server
# Edit files in src/
# Test at localhost:8080
```

### After: Two Options

**Option 1: Develop React App Standalone (Unchanged)**
```bash
npm run dev              # Same as before
# Edit files in src/
# Test at localhost:8080
```

**Option 2: Develop in Shopify Context**
```bash
npm run build:shopify    # Build for Shopify
cd theme
shopify theme dev        # Live preview with Shopify
# Changes auto-sync
```

## Key Differences

### 1. Routing

**Before:**
- React Router handled all routing
- URLs like `/product/123`

**After:**
- Shopify handles top-level routing
- React Router handles client-side navigation
- URLs like `/products/product-handle`
- Shopify product/collection pages route through templates

### 2. Data Fetching

**Before:**
- Only Storefront API
- Fetched all data client-side

**After:**
- Shopify provides data via Liquid in templates
- React can read this data
- Still uses Storefront API for dynamic operations

**Example:**

```liquid
<!-- In template -->
<script type="application/json" id="product-data">
  {{ product | json }}
</script>
```

```typescript
// In React
const productData = JSON.parse(
  document.getElementById('product-data').textContent
);
```

### 3. SEO

**Before:**
- Client-side rendered (React)
- Required careful SEO optimization
- Meta tags managed in React

**After:**
- Server-rendered HTML via Liquid
- Better SEO out of the box
- Shopify manages meta tags
- React enhances after load

### 4. Deployment

**Before:**
- Deploy to any static host
- Use Shopify Storefront API externally

**After:**
- Deploy directly to Shopify
- Integrated with Shopify admin
- Access to full Shopify features

## Benefits of Migration

### ✅ Better Integration
- Native Shopify integration
- Access to Shopify admin features
- Theme customizer support

### ✅ Improved SEO
- Server-rendered initial HTML
- Proper meta tags from Shopify
- Faster initial page load

### ✅ Better Performance
- CDN delivery via Shopify
- Optimized asset loading
- Efficient caching

### ✅ Enhanced Features
- Theme settings in Shopify admin
- Support for sections/blocks
- Liquid template flexibility

### ✅ Simpler Checkout
- Native Shopify checkout
- No external redirect
- Better conversion rates

## Backward Compatibility

### Can I still use the standalone app?

**Yes!** The original build process still works:

```bash
npm run build    # Original build command
# Deploy dist/ as before
```

Both deployment methods coexist:
- `npm run build` → Standalone web app
- `npm run build:shopify` → Shopify theme

### Choosing Deployment Method

**Use Standalone App when:**
- You need to host outside Shopify
- You want full control over hosting
- You're using multiple platforms

**Use Shopify Theme when:**
- Your primary platform is Shopify
- You want better Shopify integration
- You need theme customization features
- You want improved SEO

## Common Questions

### Q: Do I need to rewrite my components?
**A:** No! All React components work as-is.

### Q: Will my existing Shopify integration break?
**A:** No! The Storefront API integration remains unchanged.

### Q: Can I switch between standalone and theme?
**A:** Yes! Both builds are supported.

### Q: Do I lose any functionality?
**A:** No! You gain functionality (Shopify admin features).

### Q: What about my custom domain?
**A:** Use Shopify's domain settings for the theme version.

### Q: How do updates work?
**A:** Same as before - edit React code, rebuild, deploy.

## Troubleshooting Migration

### Issue: Build fails
```bash
# Solution: Clean install
rm -rf node_modules package-lock.json
npm install
npm run build:shopify
```

### Issue: Theme doesn't appear in Shopify
```bash
# Solution: Check authentication
shopify auth logout
shopify auth login
cd theme
shopify theme push
```

### Issue: React app doesn't load
```bash
# Solution: Verify assets
ls -la theme/assets/react-app*
# Should see react-app.js and react-app.css

# Check browser console for errors
```

### Issue: Styling looks wrong
```bash
# Solution: Rebuild CSS
npm run build:shopify
cd theme
shopify theme push
```

## Next Steps

1. ✅ Review [SHOPIFY_THEME_README.md](SHOPIFY_THEME_README.md)
2. ✅ Follow [SHOPIFY_QUICK_START.md](SHOPIFY_QUICK_START.md)
3. ✅ Use [SHOPIFY_SETUP_CHECKLIST.md](SHOPIFY_SETUP_CHECKLIST.md)
4. ✅ Understand [SHOPIFY_ARCHITECTURE.md](SHOPIFY_ARCHITECTURE.md)

## Support

If you encounter issues during migration:
1. Check the troubleshooting section above
2. Review theme documentation
3. Open an issue on GitHub
4. Check Shopify theme documentation

---

**Migration completed:** This guide helped you understand the changes made to support Shopify theme deployment while maintaining the original functionality.
