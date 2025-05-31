# Backgrounds Folder

Place background images, patterns, and textures here.

## Recommended Files:

- `main-background.jpg` - Primary website background
- `section-background.jpg` - Section-specific backgrounds
- `pattern-subtle.png` - Subtle background patterns
- `gradient-overlay.png` - Gradient overlays
- `texture-paper.jpg` - Textural backgrounds
- `geometric-pattern.svg` - Geometric patterns

## Usage Examples:

```tsx
// Section background
<section 
  className="py-20 bg-cover bg-center"
  style={{ backgroundImage: 'url(/assets/images/backgrounds/section-background.jpg)' }}
>
  <div className="container mx-auto">
    <h2>Our Services</h2>
  </div>
</section>
```

```css
/* CSS usage */
.hero-section {
  background-image: 
    linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('/assets/images/backgrounds/main-background.jpg');
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}

.subtle-pattern {
  background-image: url('/assets/images/backgrounds/pattern-subtle.png');
  background-repeat: repeat;
}
```

## File Requirements:

- **Format**: JPG for photos, PNG for patterns with transparency, SVG for vector patterns
- **Size**: Large enough for full-screen coverage (2560px+ width)
- **Quality**: High quality but optimized for web
- **Tiling**: Seamless patterns for repeating backgrounds

## Background Types:

### Photo Backgrounds:
- Professional office environments
- Abstract or artistic images
- Nature scenes (if relevant to brand)
- Technology/digital themes

### Pattern Backgrounds:
- Subtle geometric patterns
- Textural elements
- Brand-related motifs
- Minimalist designs

### Gradient Overlays:
- Semi-transparent overlays
- Brand color gradients
- Dark overlays for text readability

## Best Practices:

- **Contrast**: Ensure text remains readable
- **Performance**: Optimize file sizes
- **Responsiveness**: Test on various screen sizes
- **Accessibility**: Provide sufficient contrast ratios
- **Subtlety**: Don't let backgrounds overwhelm content

## CSS Tips:

```css
/* Ensure good text readability */
.text-overlay {
  background: linear-gradient(
    rgba(0, 0, 0, 0.4), 
    rgba(0, 0, 0, 0.4)
  );
}

/* Responsive background */
@media (max-width: 768px) {
  .hero-bg {
    background-attachment: scroll;
    background-size: cover;
  }
}
```

---

*Subtle backgrounds enhance your content without distracting from it!*