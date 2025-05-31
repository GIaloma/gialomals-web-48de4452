# Gialoma's Web - Calendar Integration Service

## 📁 Project Structure

```
gialomals-web-48de4452/
├── public/
│   └── assets/
│       ├── images/          # Company logos, photos, icons
│       ├── documents/       # PDF files, contracts, etc.
│       └── templates/       # HTML document templates
├── src/
│   ├── components/         # React components
│   ├── hooks/             # Custom React hooks
│   ├── lib/               # Utility libraries
│   └── pages/             # Page components
└── README.md
```

## 🖼️ Adding Images

To add images to your project:

1. Place your image files in `public/assets/images/`
2. Reference them in your code using: `/assets/images/your-image.jpg`

### Recommended Image Types:
- **Logos**: SVG or PNG with transparent background
- **Photos**: JPG or WebP for better compression
- **Icons**: SVG for scalability

## 📄 Document Templates

The project includes professional document templates:

- **NDA Template**: `public/assets/templates/nda-minimalista.html`
- **Privacy Policy**: `public/assets/templates/politica-privacidad.html`
- **Contract Annexes**: `public/assets/documents/anexos-contrato.md`

### Using Templates in Your Web App

```tsx
// Example: Loading a template
const templateUrl = '/assets/templates/nda-minimalista.html';

// You can embed it in an iframe or fetch and display
<iframe src={templateUrl} width="100%" height="600px" />
```

## 🚀 Quick Start for Adding Files

### Method 1: Using GitHub Web Interface
1. Go to your repository on GitHub
2. Navigate to `public/assets/images/` or appropriate folder
3. Click "Add file" > "Upload files"
4. Drag and drop your files
5. Commit changes

### Method 2: Using Git Commands
```bash
# Clone the repository
git clone https://github.com/GIaloma/gialomals-web-48de4452.git
cd gialomals-web-48de4452

# Add your files
cp /path/to/your/image.jpg public/assets/images/
cp /path/to/your/document.pdf public/assets/documents/

# Commit and push
git add .
git commit -m "Add images and documents"
git push origin main
```

## 📱 File Usage Examples

### In React Components:
```tsx
// Logo in header
<img src="/assets/images/company-logo.png" alt="Company Logo" />

// Download link for documents
<a href="/assets/documents/privacy-policy.pdf" download>
  Download Privacy Policy
</a>

// Background image
<div style={{ backgroundImage: 'url(/assets/images/hero-bg.jpg)' }}>
  Content here
</div>
```

### In CSS:
```css
.hero-section {
  background-image: url('/assets/images/hero-background.jpg');
  background-size: cover;
  background-position: center;
}

.company-logo {
  content: url('/assets/images/logo.svg');
  width: 200px;
  height: auto;
}
```

## 🎨 Recommended Assets to Add

### Images:
- [ ] Company logo (SVG/PNG)
- [ ] Favicon (ICO/PNG)
- [ ] Hero/banner images
- [ ] Team photos
- [ ] Service illustrations
- [ ] Background patterns

### Documents:
- [ ] Privacy policy (PDF)
- [ ] Terms of service (PDF)
- [ ] Service brochures
- [ ] Certificates/credentials
- [ ] Case studies

## 🔧 Optimization Tips

### Image Optimization:
- Compress images before uploading
- Use WebP format for better compression
- Include multiple sizes for responsive design
- Add alt text for accessibility

### File Organization:
```
public/assets/images/
├── logos/
│   ├── logo.svg
│   ├── logo-white.svg
│   └── favicon.ico
├── heroes/
│   ├── hero-main.jpg
│   └── hero-about.jpg
└── team/
    ├── john-doe.jpg
    └── jane-smith.jpg
```

## 📞 Support

If you need help uploading or organizing files, please refer to:
- GitHub documentation
- This README file
- Contact the development team

---

*Last updated: May 31, 2025*