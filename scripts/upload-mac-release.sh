#!/usr/bin/env zsh

set -euo pipefail

TAG_NAME="${1:-Release}"

if ! command -v gh >/dev/null 2>&1; then
  echo "gh CLI is required to upload release assets."
  echo "Install it from https://cli.github.com/ and run: gh auth login"
  exit 1
fi

dmg_files=(release/*.dmg(N))
zip_files=(release/*.zip(N))

if (( ${#dmg_files[@]} == 0 )); then
  echo "No DMG found in release/. Run: npm run dist:mac"
  exit 1
fi

assets=("${dmg_files[@]}")
if (( ${#zip_files[@]} > 0 )); then
  assets+=("${zip_files[@]}")
fi

echo "Uploading assets to GitHub release tag: ${TAG_NAME}"
gh release upload "${TAG_NAME}" "${assets[@]}" --clobber

echo "Uploaded:"
printf ' - %s\n' "${assets[@]}"
