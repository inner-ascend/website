#!/bin/bash

# Navigate to the directory containing AnimationsPresenceDemo.mjs
cd node_modules/@tamagui/demos/dist/esm || exit 1

# Function to handle sed command across different OS
fix_image() {
    if [[ "$OSTYPE" == "darwin"* ]]; then
        # macOS requires an empty string after -i
        sed -i '' "$1" AnimationsPresenceDemo.mjs
    else
        # Linux version
        sed -i "$1" AnimationsPresenceDemo.mjs
    fi
}

# Replace the image imports with our banner images
fix_image 's|import photo1 from "../../public/photo1.jpg"|const photo1 = "/banner-one.jpg"|'
fix_image 's|import photo2 from "../../public/photo2.jpg"|const photo2 = "/banner-rc0.jpg"|'
fix_image 's|import photo3 from "../../public/photo3.jpg"|const photo3 = "/banner-lighthouse.jpg"|' 