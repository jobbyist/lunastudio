# Shopify Theme Architecture Overview

## System Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                     Shopify Store                           │
│  ┌───────────────────────────────────────────────────────┐  │
│  │                  Theme Layer                          │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │         Liquid Templates                        │  │  │
│  │  │  • index.liquid    (homepage)                   │  │  │
│  │  │  • product.liquid  (product pages)              │  │  │
│  │  │  • collection.liquid (collections)              │  │  │
│  │  │  • cart.liquid     (cart page)                  │  │  │
│  │  │  • page.liquid     (static pages)               │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │                         ↓                              │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │         Layout (theme.liquid)                   │  │  │
│  │  │  • HTML structure                               │  │  │
│  │  │  • Loads CSS/JS bundles                         │  │  │
│  │  │  • Shopify context/data                         │  │  │
│  │  │  • <div id="root"></div>                        │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  │                         ↓                              │  │
│  │  ┌─────────────────────────────────────────────────┐  │  │
│  │  │      React Application Bundle                   │  │  │
│  │  │  react-app.js  │  react-app.css                 │  │  │
│  │  └─────────────────────────────────────────────────┘  │  │
│  └───────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
                              ↓
                    ┌──────────────────────┐
                    │   React Application  │
                    │  • Components        │
                    │  • Routing           │
                    │  • State Management  │
                    │  • UI Logic          │
                    └──────────────────────┘
                              ↓
                    ┌──────────────────────┐
                    │  Shopify Storefront  │
                    │       API            │
                    │  • Products          │
                    │  • Collections       │
                    │  • Cart              │
                    │  • Checkout          │
                    └──────────────────────┘
```

## Data Flow

### 1. Page Load
```
User Request → Shopify → Liquid Template → theme.liquid → React App Mounts
```

### 2. Product Data
```
Shopify Products → Liquid Template (JSON) → React Components → Display
                                      ↓
                           Storefront API → React Store → Cart
```

### 3. User Interaction
```
User Click → React Event Handler → Storefront API → Shopify Backend → Update
```

## File Structure Mapping

### Development Files (Not Deployed)
```
src/
├── components/       → React UI components
├── pages/           → React page components  
├── lib/             → Utilities & API clients
├── stores/          → State management
└── main.tsx         → App entry point

vite.config.shopify.ts → Build configuration
```

### Theme Files (Deployed to Shopify)
```
theme/
├── assets/
│   ├── react-app.js     ← Built from src/
│   ├── react-app.css    ← Built from src/
│   ├── global.js        → Theme utilities
│   └── theme.css        → Base styles
├── layout/
│   └── theme.liquid     → Main HTML structure
├── templates/
│   └── *.liquid         → Page templates
├── sections/
│   └── *.liquid         → Reusable sections
├── snippets/
│   └── *.liquid         → Code snippets
└── config/
    └── *.json           → Theme settings
```

## Build Process

```
┌──────────────┐
│   Source     │
│    Code      │
│   (src/)     │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│     Vite     │
│   Bundler    │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│  React Build │
│   (bundle)   │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│theme/assets/ │
│react-app.js  │
│react-app.css │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│ Shopify CLI  │
│    Upload    │
└──────┬───────┘
       │
       ↓
┌──────────────┐
│   Shopify    │
│    Store     │
└──────────────┘
```

## Component Integration

### How React Components Integrate with Shopify

1. **Initial Mount**
   ```liquid
   <!-- In theme.liquid -->
   <div id="root"></div>
   <script type="module" src="{{ 'react-app.js' | asset_url }}"></script>
   ```

2. **Data Passing**
   ```liquid
   <!-- In templates/product.liquid -->
   <script type="application/json" id="product-data">
     {{ product | json }}
   </script>
   ```

3. **React Reads Data**
   ```typescript
   // In React component
   const productData = JSON.parse(
     document.getElementById('product-data').textContent
   );
   ```

4. **API Integration**
   ```typescript
   // Using Storefront API
   import { fetchProducts } from '@/lib/shopify';
   const products = await fetchProducts();
   ```

## Key Concepts

### Liquid Templates
- Server-side rendering by Shopify
- Provides initial HTML structure
- Passes Shopify data to React
- Handles SEO and meta tags

### React Application  
- Client-side rendering
- Handles UI interactions
- Manages application state
- Makes API calls to Shopify

### Shopify Storefront API
- GraphQL API for products/cart
- Used by React for data fetching
- Enables headless functionality
- Maintains Shopify integration

## Deployment Workflow

### Development
```bash
npm run dev              # Develop React app standalone
npm run build:shopify    # Build for Shopify
cd theme && shopify theme dev  # Live preview with sync
```

### Production
```bash
npm run build:shopify    # Build optimized bundles
cd theme                 # Enter theme directory
shopify theme push       # Upload to Shopify
# Publish via Shopify Admin
```

## Benefits of This Architecture

✅ **Best of Both Worlds**
- Shopify's e-commerce platform
- React's dynamic UI capabilities

✅ **SEO Friendly**
- Server-side Liquid templates
- Proper meta tags
- Fast initial load

✅ **Developer Experience**
- Modern React development
- Hot module replacement
- TypeScript support

✅ **Performance**
- Optimized bundles
- Code splitting
- CDN delivery via Shopify

✅ **Maintainability**
- Component-based architecture
- Clear separation of concerns
- Standard Shopify theme structure

## Common Patterns

### Pattern 1: Static Content
Use Liquid templates for content that doesn't change based on user interaction.

### Pattern 2: Dynamic UI
Use React components for interactive elements like filters, cart, product customization.

### Pattern 3: Hybrid Approach
Combine both - Liquid for structure and SEO, React for interactivity.

## Questions?

Refer to:
- [SHOPIFY_THEME_README.md](SHOPIFY_THEME_README.md) - Full documentation
- [SHOPIFY_QUICK_START.md](SHOPIFY_QUICK_START.md) - Quick deployment
- [SHOPIFY_SETUP_CHECKLIST.md](SHOPIFY_SETUP_CHECKLIST.md) - Step by step
