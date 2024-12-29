#!/bin/bash

echo "Build script for Render"

cd watchlist-backend
npm install
npm run build:ui
npm run build