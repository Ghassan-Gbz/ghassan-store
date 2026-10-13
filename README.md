# Ghassan Store — GitHub Pages + Simple Admin

## Files
- `index.html`: public store
- `admin.html`: owner publishing panel
- `catalog.json`: catalogue data updated by the admin panel
- `app.js` / `style.css`: store behavior and styling
- `uploads/`: created automatically when you publish items

## Publish on GitHub Pages (Android)
1. Download and extract this ZIP on your phone.
2. Open your existing repository: `Ghassan-Gbz/ghassan-store`.
3. For the simplest clean setup, upload/replace the files from this ZIP into the repository root. Keep the `assets` and `downloads` folders and their contents. Do not upload the ZIP itself.
4. Commit changes.
5. In repository Settings → Pages, select **Deploy from a branch**, branch `main`, folder `/(root)`, then Save.
6. Wait for the Pages deployment to complete.

Website: https://ghassan-gbz.github.io/ghassan-store/
Admin: https://ghassan-gbz.github.io/ghassan-store/admin.html

## Create the GitHub token
Create a fine-grained token at https://github.com/settings/personal-access-tokens/new
- Resource owner: `Ghassan-Gbz`
- Repository access: Only select repositories → `ghassan-store`
- Repository permissions: Contents → Read and write
- Set an expiration date.

Paste the token into `admin.html` and tap **Connect and test**. The token is kept in the current browser tab's session only and is not put into the repository. Do not share it. Clear it when finished and revoke it if exposed.

## Publishing an item
Only name and item file are required. Version, description and gallery icon are optional. The panel uploads the item into `uploads/`, optional icon into `uploads/icons/`, then updates `catalog.json`. The storefront loads the catalogue automatically. GitHub Pages can take a few minutes to deploy changes.

## Limitations
This is a static website; the admin page is not a server-side private login. Anyone who has the admin URL can see the form, but publishing requires your token. Do not use it on shared devices or in an untrusted browser. GitHub API uploads are intended for smaller files; the panel limits a file to 20 MB to reduce upload failures. Large APKs need a different storage service or Git LFS/release-based workflow.
