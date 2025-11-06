# Project Images

This directory contains images for portfolio projects.

## Required Images

### 1. Portfolio Website (`portfolio-website.jpg`)

- **Dimensions**: 1200x800px (3:2 aspect ratio)
- **Format**: WebP or JPG
- **Alt Text**: "Modern portfolio website built with Next.js and TypeScript showing responsive design"
- **Content**: Screenshot of this portfolio or mockup

### 2. Integrity Web Consulting (`integrity-web-consulting.jpg`)

- **Dimensions**: 1200x800px (3:2 aspect ratio)
- **Format**: WebP or JPG
- **Alt Text**: "Enterprise web solutions dashboard showing modular architecture and Auth0 integration"
- **Content**: Dashboard mockup, architecture diagram, or professional stock photo of web development

### 3. Sogeti Serverless (`sogeti-serverless.jpg`)

- **Dimensions**: 1200x800px (3:2 aspect ratio)
- **Format**: WebP or JPG
- **Alt Text**: "Serverless architecture diagram showing Azure Functions and CosmosDB integration"
- **Content**: Cloud architecture diagram, Azure services visualization, or serverless concept image

### 4. RK Mechanical (`rk-mechanical.jpg`)

- **Dimensions**: 1200x800px (3:2 aspect ratio)
- **Format**: WebP or JPG
- **Alt Text**: "Inventory management system interface with RFID tracking and real-time search"
- **Content**: Inventory dashboard mockup, RFID system visualization, or warehouse management concept

## Image Guidelines

### Optimization

- Use WebP format for best compression
- Fallback to JPG for compatibility
- Target file size: < 200KB per image
- Use Next.js Image component for automatic optimization

### Dimensions

- **Desktop**: 1200x800px (3:2 ratio)
- **Tablet**: 800x533px (automatically generated)
- **Mobile**: 600x400px (automatically generated)

### Accessibility

- Always include descriptive alt text
- Alt text should describe what's shown, not just the project name
- Keep alt text under 125 characters

## Sourcing Options

### 1. Create Mockups

- Use Figma, Sketch, or Adobe XD
- Create professional-looking UI mockups
- Export at 2x resolution for retina displays

### 2. Architecture Diagrams

- Use draw.io, Lucidchart, or Excalidraw
- Create clean, professional diagrams
- Export as PNG or SVG, then convert to WebP

### 3. Stock Photos (Licensed)

- **Unsplash**: Free, high-quality photos (unsplash.com)
- **Pexels**: Free stock photos (pexels.com)
- **Pixabay**: Free images (pixabay.com)

**License Documentation**: If using stock photos, note the source and license in this file.

### 4. Screenshots

- Capture actual project screenshots (if available)
- Blur sensitive information
- Ensure high resolution

## Next.js Image Component Usage

```tsx
import Image from 'next/image';

<Image
  src="/images/projects/integrity-web-consulting.jpg"
  alt="Enterprise web solutions dashboard showing modular architecture"
  width={1200}
  height={800}
  className="rounded-lg shadow-lg"
  priority={false} // Set to true for above-the-fold images
/>;
```

## Placeholder Images

Until real images are added, the project cards will:

1. Show a gradient background
2. Display the project title
3. Include technology icons

## TODO

- [ ] Add portfolio-website.jpg
- [ ] Add integrity-web-consulting.jpg
- [ ] Add sogeti-serverless.jpg
- [ ] Add rk-mechanical.jpg
- [ ] Optimize all images to WebP format
- [ ] Verify alt text for accessibility
- [ ] Document any stock photo licenses

## Image Attribution

_Document any stock photos or third-party images here with proper attribution_

---

**Last Updated**: November 6, 2025
