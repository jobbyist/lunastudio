#!/usr/bin/env bash

# Build script for Luna Lux Hair Shopify Theme
# This script builds the React application and prepares it for Shopify deployment

set -e

echo "🎨 Building Luna Lux Hair Shopify Theme..."

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Clean previous builds from theme/assets
echo "🧹 Cleaning previous builds..."
rm -f theme/assets/react-app*.js
rm -f theme/assets/react-app*.css
rm -f theme/assets/react-app*.map

# Build the React application for Shopify
echo "⚛️  Building React application..."
npm run build:shopify

# Verify build output
if [ -f "theme/assets/react-app.js" ] && [ -f "theme/assets/react-app.css" ]; then
    echo "✅ Build completed successfully!"
    echo ""
    echo "📊 Build artifacts:"
    ls -lh theme/assets/react-app*
    echo ""
    echo "🚀 Next steps:"
    echo "  1. cd theme"
    echo "  2. shopify theme push (or shopify theme dev for development)"
    echo ""
else
    echo "❌ Build failed - assets not found in theme/assets/"
    exit 1
fi
