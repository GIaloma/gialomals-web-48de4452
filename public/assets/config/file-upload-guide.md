# File Upload Guide

## 📋 Quick Upload Checklist

### Before Uploading:
- [ ] Optimize image file sizes (< 2MB recommended)
- [ ] Use appropriate file formats
- [ ] Check file naming conventions
- [ ] Ensure files are copyright-free or owned

### File Naming Conventions:
- Use lowercase letters
- Replace spaces with hyphens
- Be descriptive: `company-logo-2025.png` instead of `logo.png`
- Include version numbers when needed

## 🖼️ Image Guidelines

### Logos:
- **Format**: SVG (preferred) or PNG with transparency
- **Size**: Multiple versions (small: 150px, medium: 300px, large: 600px width)
- **Names**: `logo.svg`, `logo-white.svg`, `logo-dark.svg`

### Photos:
- **Format**: JPG or WebP
- **Resolution**: 1920x1080 for hero images, 800x600 for content
- **Compression**: 80-90% quality

### Icons:
- **Format**: SVG (preferred) or PNG
- **Size**: 24px, 48px, 96px versions
- **Style**: Consistent with brand guidelines

## 📄 Document Guidelines

### PDFs:
- **Size**: < 10MB per file
- **Security**: No passwords or restrictions
- **Accessibility**: Include text layer for screen readers

### Templates:
- **Format**: HTML for web display, PDF for download
- **Branding**: Include company colors and fonts
- **Responsiveness**: Test on mobile devices

## 🚀 Upload Methods

### Method 1: GitHub Web Interface (Easiest)
1. Go to [your repository](https://github.com/GIaloma/gialomals-web-48de4452)
2. Navigate to the appropriate folder:
   - Images: `public/assets/images/`
   - Documents: `public/assets/documents/`
   - Templates: `public/assets/templates/`
3. Click "Add file" → "Upload files"
4. Drag and drop or select files
5. Add commit message
6. Click "Commit changes"

### Method 2: Git Command Line
```bash
# Navigate to your project
cd gialomals-web-48de4452

# Add files to appropriate folders
cp ~/Desktop/logo.svg public/assets/images/
cp ~/Desktop/privacy-policy.pdf public/assets/documents/

# Commit changes
git add .
git commit -m "Add company logo and privacy policy"
git push origin main
```

### Method 3: VS Code (If you have the project locally)
1. Open the project in VS Code
2. Drag files into the appropriate folders
3. Use the Git panel to commit and push

## 🎯 Priority Files to Upload

### Immediate (High Priority):
1. **Company Logo** - `public/assets/images/logo.svg`
2. **Favicon** - `public/assets/images/favicon.ico`
3. **Hero Image** - `public/assets/images/hero-main.jpg`

### Soon (Medium Priority):
4. **Team Photos** - `public/assets/images/team/`
5. **Service Icons** - `public/assets/images/icons/`
6. **Privacy Policy PDF** - `public/assets/documents/privacy-policy.pdf`

### Later (Low Priority):
7. **Case Study Documents**
8. **Additional marketing materials**
9. **Certificate images**

## 🔍 File Organization Structure

```
public/assets/
├── images/
│   ├── logos/
│   │   ├── logo.svg                 # Main logo
│   │   ├── logo-white.svg           # White version
│   │   ├── logo-dark.svg            # Dark version
│   │   └── favicon.ico              # Website icon
│   ├── heroes/
│   │   ├── hero-main.jpg            # Homepage hero
│   │   ├── hero-about.jpg           # About page hero
│   │   └── hero-services.jpg        # Services hero
│   ├── team/
│   │   ├── team-member-1.jpg
│   │   └── team-member-2.jpg
│   ├── icons/
│   │   ├── calendar-icon.svg
│   │   ├── security-icon.svg
│   │   └── automation-icon.svg
│   └── screenshots/
│       ├── dashboard-preview.jpg
│       └── mobile-app.jpg
├── documents/
│   ├── privacy-policy.pdf
│   ├── terms-of-service.pdf
│   ├── service-brochure.pdf
│   └── anexos-contrato.md
└── templates/
    ├── nda-minimalista.html
    └── politica-privacidad.html
```

## ⚡ After Upload: Using Files

### In React Components:
```tsx
// Logo component
const Logo = () => (
  <img 
    src="/assets/images/logos/logo.svg" 
    alt="Company Logo" 
    className="h-12 w-auto"
  />
);

// Hero section
const Hero = () => (
  <div 
    className="hero-section"
    style={{ 
      backgroundImage: 'url(/assets/images/heroes/hero-main.jpg)' 
    }}
  >
    <h1>Welcome to Our Service</h1>
  </div>
);

// Document download
const DownloadPolicy = () => (
  <a 
    href="/assets/documents/privacy-policy.pdf" 
    download
    className="btn btn-primary"
  >
    Download Privacy Policy
  </a>
);
```

### In CSS:
```css
.company-logo {
  background-image: url('/assets/images/logos/logo.svg');
  background-size: contain;
  background-repeat: no-repeat;
}

.hero-main {
  background-image: url('/assets/images/heroes/hero-main.jpg');
  background-size: cover;
  background-position: center;
}
```

## 🐛 Troubleshooting

### File Not Showing?
1. Check the file path is correct
2. Ensure the file was committed and pushed
3. Clear browser cache
4. Verify file extension matches the reference

### File Too Large?
1. Compress images using tools like TinyPNG
2. Resize images to appropriate dimensions
3. Convert to more efficient formats (WebP for images)

### Upload Failing?
1. Check file size limits (GitHub: 100MB per file)
2. Ensure you have write permissions
3. Try uploading one file at a time

## 📞 Need Help?

If you encounter issues:
1. Check this guide first
2. Look at existing files for examples
3. Contact the development team
4. Check GitHub documentation

---

*Remember: After uploading files, they'll be available at the path `/assets/folder/filename.ext` in your web application.*