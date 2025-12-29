# Luna Lux Hair - Shopify Theme

This repository has been converted into a Shopify theme that integrates a React application with Shopify's Liquid templating system.

## Overview

The Luna Lux Hair theme is a modern, custom Shopify theme that combines:
- **Shopify Liquid templates** for theme structure and layout
- **React application** for dynamic, interactive UI components
- **Shopify Storefront API** for product data and cart management
- **TailwindCSS** for styling

## Theme Structure

```
theme/
├── assets/           # Compiled JS/CSS and static assets
├── config/           # Theme settings
│   └── settings_schema.json
├── layout/           # Main theme layout
│   └── theme.liquid
├── locales/          # Translation files
│   └── en.default.json
├── sections/         # Reusable sections
│   └── react-app-container.liquid
├── snippets/         # Reusable code snippets
│   ├── meta-tags.liquid
│   └── react-app-mount.liquid
└── templates/        # Page templates
    ├── index.liquid       # Homepage
    ├── product.liquid     # Product pages
    ├── collection.liquid  # Collection pages
    ├── page.liquid        # Static pages
    └── cart.liquid        # Cart page
```

## Development Setup

### Prerequisites

- Node.js (v18 or higher)
- npm or bun
- [Shopify CLI](https://shopify.dev/docs/themes/tools/cli)
- A Shopify store (development or production)

### Installation

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd lunastudio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the React application for Shopify:**
   ```bash
   npm run build:shopify
   ```
   This will compile the React app and output the bundles to `theme/assets/`.

### Local Development

#### Option 1: Using Shopify CLI (Recommended)

1. **Install Shopify CLI:**
   ```bash
   npm install -g @shopify/cli @shopify/theme
   ```

2. **Log in to your Shopify store:**
   ```bash
   shopify auth login
   ```

3. **Start the development server:**
   ```bash
   cd theme
   shopify theme dev
   ```
   This will start a local development server and sync changes to your Shopify store.

#### Option 2: Manual Development

1. **Build the React app in watch mode:**
   ```bash
   npm run build:shopify -- --watch
   ```

2. **Use Shopify CLI to push changes:**
   ```bash
   cd theme
   shopify theme push --development
   ```

## Deployment

### Deploy to Shopify Store

1. **Build the production assets:**
   ```bash
   npm run build:shopify
   ```

2. **Push the theme to Shopify:**
   ```bash
   cd theme
   shopify theme push
   ```

3. **Publish the theme:**
   - Go to your Shopify admin
   - Navigate to **Online Store > Themes**
   - Find your theme and click **Publish**

### Using Shopify GitHub Integration

1. Connect your GitHub repository to your Shopify store
2. Enable automatic deployments
3. Any push to the main branch will trigger a deployment

## Configuration

### Theme Settings

Edit theme settings in the Shopify admin:
- **Online Store > Themes > Customize**

Available settings:
- **Colors**: Primary, secondary, and accent colors
- **Typography**: Heading and body fonts
- **Layout**: Container width and spacing

### Environment Variables

The theme uses Shopify's built-in environment. For the React app, configure:

- Shopify store URL (automatically available in theme)
- Storefront API token (configured in `src/lib/shopify.ts`)

### Shopify API Configuration

Update the Shopify configuration in `src/lib/shopify.ts`:

```typescript
const SHOPIFY_API_VERSION = '2025-07';
const SHOPIFY_STORE_PERMANENT_DOMAIN = 'your-store.myshopify.com';
const SHOPIFY_STOREFRONT_TOKEN = 'your-storefront-access-token';
```

## How It Works

### Theme Architecture

1. **Liquid Templates**: Define the page structure and pass data from Shopify
2. **React App**: Mounts in the `#root` div and handles UI/interactions
3. **Data Flow**: 
   - Shopify data is embedded as JSON in templates
   - React reads this data and renders components
   - Cart operations use Shopify Storefront API

### React Integration

The React app is mounted via the `react-app-mount.liquid` snippet:

```liquid
<div id="root"></div>
<script type="module" src="{{ 'react-app.js' | asset_url }}"></script>
<link rel="stylesheet" href="{{ 'react-app.css' | asset_url }}">
```

### Routing

- Shopify handles top-level routing (URLs)
- React Router handles client-side navigation within the app
- Templates pass context to React via JSON data islands

## Features

- ✅ Fully integrated with Shopify
- ✅ React-powered UI components
- ✅ Responsive design with TailwindCSS
- ✅ Product browsing and search
- ✅ Shopping cart integration
- ✅ Bundle and save features
- ✅ Admin CMS (separate from theme)
- ✅ Analytics tracking

## Shopify CLI Commands

```bash
# Start development server
shopify theme dev

# Push theme to store
shopify theme push

# Pull theme from store
shopify theme pull

# Check theme for issues
shopify theme check

# Package theme for distribution
shopify theme package
```

## Build Commands

```bash
# Build React app for Shopify
npm run build:shopify

# Build regular web app (non-theme)
npm run build

# Development server (non-theme)
npm run dev

# Lint code
npm run lint
```

## Troubleshooting

### React app not loading

1. Check that assets are built: `npm run build:shopify`
2. Verify assets exist in `theme/assets/`
3. Check browser console for errors
4. Ensure `react-app.js` and `react-app.css` are loaded

### Shopify API errors

1. Verify Storefront API token is valid
2. Check API version compatibility
3. Ensure store domain is correct
4. Check network tab for API responses

### Theme not updating

1. Clear Shopify cache
2. Hard refresh browser (Ctrl+Shift+R)
3. Check Shopify CLI is running
4. Verify theme is published

## Support

For issues and questions:
- GitHub Issues: https://github.com/jobbyist/lunastudio/issues
- Shopify Theme Documentation: https://shopify.dev/docs/themes

## License

Proprietary - Luna Luxury Hair

## Contributing

This is a private theme for Luna Lux Hair. Internal contributions only.
