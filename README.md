# Ghassan Store — Fresh rebuild

## Publish on GitHub Pages
1. Extract this ZIP on your phone/computer.
2. Upload the **contents** of this folder into the root of `Ghassan-Gbz/ghassan-store`, replacing matching files. Keep `assets/` and `downloads/` folders.
3. Commit changes. In repository Settings → Pages, choose Deploy from a branch, branch `main`, folder `/(root)`.
4. Wait for Actions / Pages deployment to complete.

## URLs
- Public store: `https://ghassan-gbz.github.io/ghassan-store/`
- Admin panel: `https://ghassan-gbz.github.io/ghassan-store/admin.html`

## Admin setup
1. Open `admin.html` on the published site.
2. Create a GitHub fine-grained personal access token at https://github.com/settings/personal-access-tokens/new
3. Set resource owner `Ghassan-Gbz`, repository access to only `ghassan-store`, and Repository permissions → Contents: Read and write. Expiration is recommended.
4. In the admin panel, enter owner `Ghassan-Gbz`, repo `ghassan-store`, branch `main`, paste token, and tap Connect and load items.
5. Publish with item name and file required. Version, description, and icon are optional. Edit/remove existing catalogue items in the list.

## Important limitations and security
- This is a static GitHub Pages website; there is no server-side admin authentication. Anyone who discovers `admin.html` can see the login form, but they cannot publish without a valid token. Keep the token private and use only on your own device. The token is kept in sessionStorage for this browser tab session, not in the repository.
- Browser-based uploads are limited to 20 MB per file in this implementation. GitHub Pages is not intended for large APK hosting.
- Item uploads are committed to the repository. Changes can take a few minutes to appear on the public site.
- Test with a small file first. GitHub API/network/browser errors may interrupt a publish. If that happens, check repository file list and `catalog.json` before retrying.
- Do not use a token with broader permissions than this repository needs.
