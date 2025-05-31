# 🚀 Quick File Upload Guide for Your Website

## ✅ **The Images Folder is Now Ready!**

You now have a complete folder structure at:
```
public/assets/images/
├── logos/           # Your company logos
├── heroes/          # Banner/hero images  
├── team/            # Team member photos
├── icons/           # Service icons
├── screenshots/     # Product screenshots
└── backgrounds/     # Background images
```

## 📤 **How to Upload Files (3 Easy Methods)**

### Method 1: GitHub Web Interface (Easiest)
1. **Go to your repository**: https://github.com/GIaloma/gialomals-web-48de4452
2. **Navigate to the folder**: Click `public` → `assets` → `images` → choose subfolder
3. **Upload**: Click "Add file" → "Upload files"
4. **Drag & Drop**: Your files directly into the browser
5. **Commit**: Add a message like "Add company logo" and click "Commit changes"

### Method 2: Direct Link Upload
**Quick Links to Upload Folders:**
- **Logos**: https://github.com/GIaloma/gialomals-web-48de4452/upload/main/public/assets/images/logos
- **Heroes**: https://github.com/GIaloma/gialomals-web-48de4452/upload/main/public/assets/images/heroes
- **Team**: https://github.com/GIaloma/gialomals-web-48de4452/upload/main/public/assets/images/team
- **Icons**: https://github.com/GIaloma/gialomals-web-48de4452/upload/main/public/assets/images/icons

### Method 3: Git Command Line
```bash
# Clone the repo (if you haven't already)
git clone https://github.com/GIaloma/gialomals-web-48de4452.git
cd gialomals-web-48de4452

# Add your files to the appropriate folders
cp ~/Desktop/logo.svg public/assets/images/logos/
cp ~/Desktop/hero-image.jpg public/assets/images/heroes/
cp ~/Desktop/team-photo.jpg public/assets/images/team/

# Commit and push
git add .
git commit -m "Add website images"
git push origin main
```

## 🎯 **Priority Files to Upload First**

### 1. **Company Logo** (URGENT)
- Upload to: `public/assets/images/logos/`
- Filename: `logo.svg` or `logo.png`
- Format: SVG preferred, PNG as backup
- Use in code: `<img src="/assets/images/logos/logo.svg" alt="Company Logo" />`

### 2. **Hero/Banner Image** (HIGH)
- Upload to: `public/assets/images/heroes/`
- Filename: `hero-main.jpg`
- Size: 1920x1080 minimum
- Use in code: `backgroundImage: 'url(/assets/images/heroes/hero-main.jpg)'`

### 3. **Team Photos** (MEDIUM)
- Upload to: `public/assets/images/team/`
- Filename: `firstname-lastname.jpg`
- Size: 800x800 pixels (square)
- Use in code: `<img src="/assets/images/team/john-doe.jpg" alt="John Doe" />`

### 4. **Service Icons** (MEDIUM)
- Upload to: `public/assets/images/icons/`
- Filename: `calendar-icon.svg`, `security-icon.svg`, etc.
- Format: SVG preferred
- Use in code: `<img src="/assets/images/icons/calendar-icon.svg" alt="Calendar" />`

## 💡 **Using Your Images in the Website**

Once uploaded, reference them in your React components:

```tsx
// Logo in header
<img src="/assets/images/logos/logo.svg" alt="Gialoma Logo" className="h-12" />

// Hero section
<div 
  className="hero-section h-96 bg-cover bg-center"
  style={{ backgroundImage: 'url(/assets/images/heroes/hero-main.jpg)' }}
>
  <h1>Welcome to Gialoma</h1>
</div>

// Team member
<img 
  src="/assets/images/team/founder.jpg" 
  alt="Founder" 
  className="w-32 h-32 rounded-full"
/>

// Service icon
<img 
  src="/assets/images/icons/calendar-icon.svg" 
  alt="Calendar Integration" 
  className="w-12 h-12"
/>
```

## 📋 **File Requirements**

### **Images:**
- **Logos**: SVG (preferred) or PNG with transparency
- **Photos**: JPG or WebP, optimized for web
- **Icons**: SVG for scalability
- **Max Size**: 5MB per file (smaller is better)

### **Naming:**
- Use lowercase letters
- Replace spaces with hyphens: `team-member-1.jpg`
- Be descriptive: `calendar-integration-icon.svg`

## 🔧 **Moving Your Existing Files**

I noticed you already have some files in the root `public` folder:
- `gialoma-logo.svg` → Should move to `public/assets/images/logos/`
- `team-member-image.jpg` → Should move to `public/assets/images/team/`
- `favicon.ico` → Should move to `public/assets/images/logos/`

You can:
1. **Download** them from GitHub
2. **Upload** them to the correct folders
3. **Delete** the old files from the root

## 🆘 **Need Help?**

If you get stuck:
1. Check the README files in each folder for detailed instructions
2. Each folder has specific examples and requirements
3. Look at the existing file structure for guidance

## ✨ **What's Next?**

After uploading your images:
1. Update your React components to use the new paths
2. Test the website to ensure images load correctly
3. Optimize any large files for better performance

---

**🎉 You're all set! Your organized image structure will make your website look professional and load faster.**

*Last updated: May 31, 2025*