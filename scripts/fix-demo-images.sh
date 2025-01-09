#!/bin/bash

# Navigate to the directory containing AnimationsPresenceDemo.mjs
cd node_modules/@tamagui/demos/dist/esm || exit 1

# Replace the image imports with our banner images
sed -i '' 's|import photo1 from "../../public/photo1.jpg"|const photo1 = "/banner-one.jpg"|' AnimationsPresenceDemo.mjs
sed -i '' 's|import photo2 from "../../public/photo2.jpg"|const photo2 = "/banner-rc0.jpg"|' AnimationsPresenceDemo.mjs
sed -i '' 's|import photo3 from "../../public/photo3.jpg"|const photo3 = "/banner-lighthouse.jpg"|' AnimationsPresenceDemo.mjs 