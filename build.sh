#!/bin/bash

# Simple build script for Shuttle Master website
echo "Building Shuttle Master website..."

# Create build directory if it doesn't exist
mkdir -p build

# Copy HTML files to build directory
echo "Copying HTML files..."
cp *.html build/
cp -r templates build/
cp -r assets build/

# Copy CSS and JS files (can be replaced with minified versions when available)
echo "Copying assets..."
cp styles.css build/
cp script.js build/

# If minified versions exist, use them instead
if [ -f "styles.min.css" ]; then
    echo "Using minified CSS..."
    cp styles.min.css build/styles.css
fi

if [ -f "script.min.js" ]; then
    echo "Using minified JavaScript..."
    cp script.min.js build/script.js
fi

echo "Build complete! Files are in the 'build' directory."
echo "To serve locally: cd build && python -m http.server 8000"