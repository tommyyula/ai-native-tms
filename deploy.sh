#!/bin/bash

echo "🚀 Deploying AI-Native TMS to GitHub Pages..."

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🏗️ Building project..."
npm run build

# Deploy using gh-pages
echo "🌐 Deploying to GitHub Pages..."
npm run deploy

echo "✅ Deployment complete!"
echo "🌍 Your site will be available at: https://tommyyula.github.io/ai-native-tms"