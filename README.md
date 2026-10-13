# Ghassan Store — GitHub Pages website

A responsive app and digital-download catalogue built with plain HTML, CSS and JavaScript. It is designed to be hosted for free with GitHub Pages.

## Included

- Responsive modern dark theme
- Search and category filters
- Catalogue loaded from `catalog.json`
- Download links for HTML, apps, images, PDFs, ZIPs and other files
- Developer section for **Ghassan Bin Zia**
- SEO basics: title, description, `robots.txt`, `sitemap.xml`
- Example downloadable HTML project

## Publish on GitHub Pages

1. Sign in at https://github.com/.
2. Create a **public** repository named `ghassan-store`.
3. Upload all files and folders in this package to the repository root. Keep the `downloads` and `assets` folders.
4. Open **Settings → Pages**.
5. Under **Build and deployment**, choose **Deploy from a branch**.
6. Select branch `main` and folder `/(root)`, then save.
7. Wait for deployment and open the URL GitHub shows, normally `https://YOUR-USERNAME.github.io/ghassan-store/`.
8. Replace `YOUR-USERNAME` in `robots.txt` and `sitemap.xml` with your GitHub username.

## Add a listing

Edit `catalog.json`. Add a new object inside the `items` array. Example:

```json
{
  "title": "My New HTML App",
  "category": "HTML Tools",
  "description": "A short description of what this tool does.",
  "icon": "</>",
  "iconClass": "icon-blue",
  "file": "downloads/my-new-app.html",
  "fileLabel": "HTML file",
  "size": "12 KB",
  "tags": "html tool web"
}
```

Supported categories are `Apps`, `HTML Tools`, `Images`, and `Files`. Supported icon classes: `icon-purple`, `icon-blue`, `icon-green`, `icon-orange`.

### Upload the actual download

- Upload the file into the repository, for example `downloads/my-new-app.html`.
- Put its relative path in the `file` field: `downloads/my-new-app.html`.
- For a remote download hosted by a service you trust, you can use its full HTTPS URL in `file`.
- For images, you can add an image path to the catalogue later if you extend the card design; the starter version uses category icons.
- Keep filenames simple (letters, numbers, hyphens). Avoid spaces where possible.
- Never upload private or copyrighted material unless you have permission.

## Important: admin security

This starter package is a **public static website**, not a secure admin system. It intentionally does not include a pretend login form or store an admin password in browser code. Anyone can view source files in a public GitHub repository.

To publish changes, the owner edits `catalog.json` and uploads files through GitHub. A future secure upload dashboard requires a backend/content service with real authentication and access rules. Do not put API keys, passwords, or private tokens in HTML, JavaScript, or this public repository.

## Google Search

1. Replace the placeholder username in `robots.txt` and `sitemap.xml`.
2. Publish the site first.
3. Add the site in Google Search Console: https://search.google.com/search-console/
4. Verify ownership and submit `/ghassan-store/sitemap.xml`.

Google may take time to crawl and index the site; indexing and ranking are not guaranteed.

## Limits

GitHub Pages is static hosting, not unlimited file hosting. Keep the site within GitHub Pages usage limits; consider a dedicated object-storage service for larger downloads. APKs and executable files may trigger browser/security warnings, so only distribute files you own or are authorized to share.
