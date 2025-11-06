# Images Directory

This directory contains images for the portfolio website.

## Professional Headshot

### Required File: `headshot.webp`

**Specifications:**

- **Format**: WebP (with JPG fallback)
- **Dimensions**: 800x800px (1:1 aspect ratio)
- **File Size**: < 100KB
- **Quality**: High-resolution, professional quality
- **Background**: Neutral or blurred, professional setting

### Sourcing Options

#### 1. Existing Professional Photo

- Use a recent professional headshot
- Ensure high resolution (at least 800x800px)
- Professional attire and setting
- Good lighting and focus

#### 2. New Photo Session

- Hire a professional photographer
- Business casual or professional attire
- Neutral background or office setting
- Natural lighting preferred
- Multiple poses for selection

#### 3. AI-Generated Avatar

- Use services like:
  - **LinkedIn Profile Photo AI**
  - **PhotoAI**
  - **Remini**
  - **Fotor AI Headshot Generator**
- Ensure professional, realistic appearance
- Match your actual appearance closely

### Image Optimization

#### Using Online Tools

1. **Squoosh.app** (Google)
   - Upload your image
   - Select WebP format
   - Adjust quality to 80-85%
   - Download optimized version

2. **TinyPNG/TinyJPG**
   - Upload image
   - Download compressed version
   - Convert to WebP using Squoosh

#### Using Command Line

```bash
# Install cwebp (WebP converter)
brew install webp  # macOS
# or
sudo apt-get install webp  # Linux

# Convert and optimize
cwebp -q 85 input.jpg -o headshot.webp

# Create multiple sizes for responsive
cwebp -q 85 -resize 400 0 input.jpg -o headshot-400.webp
cwebp -q 85 -resize 800 0 input.jpg -o headshot-800.webp
```

### Responsive Sizes

Create these variants for optimal performance:

- `headshot-400.webp` - 400x400px (mobile)
- `headshot-800.webp` - 800x800px (desktop)
- `headshot.jpg` - 800x800px (fallback)

### Alt Text

Use descriptive alt text:

```
"Professional headshot of Carson Antoine, Full Stack Developer"
```

## Next.js Image Component

The headshot is used with Next.js Image component for automatic optimization:

```tsx
import Image from 'next/image';

<Image
  src="/images/headshot.webp"
  alt="Professional headshot of Carson Antoine, Full Stack Developer"
  width={800}
  height={800}
  priority
  className="rounded-full"
/>;
```

### Benefits

- Automatic format optimization
- Lazy loading (except with `priority`)
- Responsive image sizing
- Blur placeholder support
- WebP/AVIF format support

## Placeholder Strategy

Until a real headshot is added:

1. Display initials "CA" in a gradient circle
2. Include "Professional headshot coming soon" text
3. Maintain proper spacing and layout

## TODO

- [ ] Source professional headshot
- [ ] Optimize to WebP format
- [ ] Create responsive variants (400px, 800px)
- [ ] Add to `/public/images/headshot.webp`
- [ ] Update Hero component to use real image
- [ ] Test across all devices
- [ ] Verify accessibility (alt text)

---

**Last Updated**: November 6, 2025
