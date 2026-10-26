[README.md](https://github.com/user-attachments/files/33942887/README.md)
# LocalLift Digital Website

A responsive, single-page website for a small digital content service. It uses plain HTML, CSS, and JavaScript with no paid dependencies, frameworks, build steps, or external fonts.

## Files

- `index.html` — page content, service descriptions, packages, and inquiry form
- `styles.css` — responsive layout and visual styling
- `script.js` — mobile navigation, package selection, and email inquiry form

## Before publishing

1. Open `script.js` in a text editor.
2. Find `YOUR_EMAIL@example.com`.
3. Replace it with the real email address where you want to receive inquiries.
4. Save the file.
5. Open `index.html` in your browser and test the navigation, package buttons, and inquiry form.

**Important:** The contact form uses the visitor's email app (`mailto:`). It does not store or send form submissions through a server. Visitors without a configured email app may have a less smooth experience. For a more reliable form later, connect a free form service or add a backend. Do not advertise the form as working until you replace the email placeholder and test it.

## Preview locally

Double-click `index.html` to open it in a browser. You can also use a local editor such as Visual Studio Code. No build or installation step is required.

## Publish for free with GitHub Pages

1. Create or sign in to a GitHub account at https://github.com/.
2. Create a new public repository, for example `locallift-digital`.
3. Upload `index.html`, `styles.css`, `script.js`, and optionally `README.md` to the repository's root.
4. In the repository, open **Settings → Pages**.
5. Under build/deployment, choose deployment from a branch, select the `main` branch and `/ (root)`, then save.
6. Wait for GitHub Pages to publish and use the URL shown in the Pages settings.
7. Test the live website on both a phone and a computer.

GitHub's interface and free-plan terms may change. Follow the current Pages prompts if labels differ.

## Publish for free with Netlify Drop

1. Visit https://app.netlify.com/drop/.
2. Sign in if prompted.
3. Drag the folder containing the website files into the drop area.
4. Use the generated preview URL to test the site.
5. Follow Netlify's current prompts if you want to claim a project name or connect a repository.

Hosting platforms can change their free-tier terms. A custom domain usually costs money, so begin with the free URL.

## Editing business details

- Prices and packages are in `index.html` inside the `#pricing` section.
- Services and business copy are in `index.html`.
- Colors, spacing, and typography are in `styles.css` near the `:root` variables.
- Contact destination is in `script.js`.

## Business notes

- Introductory prices are test prices, not a promise of market rates.
- State the project scope, delivery date, and revision limits in writing before starting.
- Use only images, logos, and assets you have permission to use.
- This website does not process payments, collect/store leads, or guarantee customer results.
