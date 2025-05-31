# Images Folder

This folder contains all images for the website.

## Folder Structure:

```
images/
├── logos/           # Company logos and branding
├── heroes/          # Hero/banner images
├── team/            # Team member photos
├── icons/           # Service and feature icons
├── screenshots/     # Product screenshots
└── backgrounds/     # Background images
```

## Usage:

Files in this folder can be referenced in your React components using:

```tsx
<img src="/assets/images/logos/logo.svg" alt="Logo" />
```

Or in CSS:

```css
background-image: url('/assets/images/heroes/hero-main.jpg');
```

## File Naming:
- Use lowercase letters
- Replace spaces with hyphens
- Be descriptive: `company-logo-2025.svg`
- Include size indicators when needed: `hero-main-1920x1080.jpg`

## Recommended Formats:
- **Logos**: SVG (preferred) or PNG with transparency
- **Photos**: JPG or WebP
- **Icons**: SVG
- **Screenshots**: PNG for UI, JPG for photos

## Upload Methods:

1. **GitHub Web Interface**: Navigate to this folder and click "Add file" → "Upload files"
2. **Git Command Line**: Place files here and commit
3. **Drag & Drop**: In your local development environment

---

*Upload your images to the appropriate subfolders to keep everything organized!*