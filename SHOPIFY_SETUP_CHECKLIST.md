# Shopify Theme Setup Checklist

Use this checklist when deploying the Luna Lux Hair theme to your Shopify store.

## Pre-Deployment

- [ ] Node.js 18+ installed
- [ ] npm or bun installed
- [ ] Shopify CLI installed (`npm install -g @shopify/cli @shopify/theme`)
- [ ] Have access to Shopify store admin
- [ ] Repository cloned locally

## Initial Setup

- [ ] Run `npm install` to install dependencies
- [ ] Verify `.env` file is configured (if needed)
- [ ] Review `src/lib/shopify.ts` for store configuration
- [ ] Update store domain if needed: `luna-hair-boutique-9dwzm.myshopify.com`

## Build Theme

- [ ] Run `npm run build:shopify`
- [ ] Verify files created in `theme/assets/`:
  - [ ] `react-app.js` exists
  - [ ] `react-app.css` exists
- [ ] Check build output for errors

## Shopify Authentication

- [ ] Run `shopify auth login`
- [ ] Browser opens for authentication
- [ ] Select your store
- [ ] Grant required permissions

## Theme Upload

Choose one deployment method:

### Method 1: Development Theme (Recommended First)
- [ ] Navigate to theme directory: `cd theme`
- [ ] Run `shopify theme push --development`
- [ ] Confirm upload
- [ ] Note the preview URL provided

### Method 2: Live Theme Push
- [ ] Navigate to theme directory: `cd theme`
- [ ] Run `shopify theme push`
- [ ] Select theme to overwrite or create new
- [ ] Confirm upload

### Method 3: Live Development Mode
- [ ] Navigate to theme directory: `cd theme`
- [ ] Run `shopify theme dev`
- [ ] Preview URL opens in browser
- [ ] Changes sync automatically

## Verify Theme

- [ ] Open preview URL in browser
- [ ] Check homepage loads correctly
- [ ] Verify React app mounts (check browser console)
- [ ] Test navigation
- [ ] Check product pages display
- [ ] Test add to cart functionality
- [ ] Verify cart works
- [ ] Check mobile responsiveness

## Shopify Admin Configuration

- [ ] Go to **Online Store > Themes**
- [ ] Find uploaded theme
- [ ] Click **Customize** to edit
- [ ] Configure theme settings:
  - [ ] Set primary color
  - [ ] Set secondary color
  - [ ] Choose fonts
  - [ ] Configure header
  - [ ] Configure footer

## Content Setup

- [ ] Add products to store
- [ ] Create collections
- [ ] Set up navigation menus
- [ ] Add static pages (About, Contact, etc.)
- [ ] Configure homepage content

## Testing

- [ ] Test on desktop browser
- [ ] Test on mobile device
- [ ] Test all page types:
  - [ ] Homepage
  - [ ] Product pages
  - [ ] Collection pages
  - [ ] Cart
  - [ ] Checkout (if applicable)
- [ ] Test search functionality
- [ ] Test filters
- [ ] Verify SEO meta tags

## Going Live

- [ ] Review all content
- [ ] Test checkout process end-to-end
- [ ] Set up payment providers
- [ ] Configure shipping zones
- [ ] Set up taxes
- [ ] In Shopify Admin: **Online Store > Themes**
- [ ] Find your theme
- [ ] Click **Publish** button
- [ ] Confirm publication

## Post-Launch

- [ ] Remove password protection (if development store)
- [ ] Set up custom domain
- [ ] Enable SSL/HTTPS
- [ ] Configure Google Analytics
- [ ] Set up email notifications
- [ ] Test everything again on live site
- [ ] Monitor for errors in browser console
- [ ] Check Shopify Analytics

## Troubleshooting

If issues occur, check these:

- [ ] Browser console for JavaScript errors
- [ ] Network tab for failed requests
- [ ] Shopify theme editor for Liquid errors
- [ ] Check `theme/assets/` has all required files
- [ ] Verify Storefront API credentials in `src/lib/shopify.ts`
- [ ] Clear browser cache and test again
- [ ] Check Shopify status page for platform issues

## Maintenance

- [ ] Document any custom changes made
- [ ] Keep dependencies updated
- [ ] Regularly rebuild: `npm run build:shopify`
- [ ] Push updates: `cd theme && shopify theme push`
- [ ] Monitor Shopify admin for updates
- [ ] Backup theme regularly via Shopify admin

## Support Resources

- [ ] Read [SHOPIFY_THEME_README.md](SHOPIFY_THEME_README.md)
- [ ] Read [SHOPIFY_QUICK_START.md](SHOPIFY_QUICK_START.md)
- [ ] Check [Shopify Theme Documentation](https://shopify.dev/docs/themes)
- [ ] Check [Shopify CLI Documentation](https://shopify.dev/docs/themes/tools/cli)

---

**Date Completed:** _______________

**Deployed By:** _______________

**Store URL:** _______________

**Notes:**
_______________________________________________
_______________________________________________
_______________________________________________
