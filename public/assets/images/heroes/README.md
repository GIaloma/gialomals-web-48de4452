# Hero Images Folder

Place your hero/banner images here for homepage and section headers.

## Recommended Files:

- `hero-main.jpg` - Homepage hero image
- `hero-about.jpg` - About page hero
- `hero-services.jpg` - Services page hero
- `hero-contact.jpg` - Contact page hero
- `hero-pricing.jpg` - Pricing page hero

## Usage Examples:

```tsx
// Hero section background
<div 
  className="hero-section h-96 bg-cover bg-center"
  style={{ backgroundImage: 'url(/assets/images/heroes/hero-main.jpg)' }}
>
  <h1>Welcome to Our Service</h1>
</div>
```

```css
/* CSS usage */
.hero-main {
  background-image: url('/assets/images/heroes/hero-main.jpg');
  background-size: cover;
  background-position: center;
}
```

## File Requirements:

- **Format**: JPG or WebP
- **Size**: 1920x1080 minimum for full-width headers
- **Aspect Ratio**: 16:9 preferred
- **Compression**: 80-90% quality for web optimization
- **Content**: Professional, high-quality images that represent your business

## Tips:

- Use images that don't compete with text overlay
- Consider darker images or overlays for better text readability
- Test on both desktop and mobile devices
- Optimize file size while maintaining quality

---

*Hero images create the first impression - choose wisely!*