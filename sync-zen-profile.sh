#!/bin/bash

REPO_PATH="$HOME/Documents/ZenProfile"
ZEN_PROFILE_PATH="$HOME/Library/Application Support/zen/Profiles/pa08o9qx.Default (release)"

echo "🔄 Syncing Zen user.js..."

cd "$REPO_PATH" || exit
git pull origin main

cp "$REPO_PATH/user.js" "$ZEN_PROFILE_PATH/user.js"

echo "✅ user.js synced to Zen profile"
echo "🕒 $(date)"
