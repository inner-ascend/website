#!/bin/bash

# Build Storybook
yarn storybook:build

# Create public/storybook directory if it doesn't exist
mkdir -p public/storybook

# Copy Storybook build to public directory
cp -r storybook-static/* public/storybook/ 