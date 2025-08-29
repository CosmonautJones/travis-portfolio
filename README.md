# Travis Jones - Portfolio Website 🚀

A vibrant, futuristic resume website that embodies the spirit of "a cheerful day in the future" - clean, bright, and bursting with life and color.

## ✨ Features

### 🎨 Design & Visual Effects
- **Vibrant Color Palette**: Electric blues, hot pinks, neon greens, and golden yellows
- **Dynamic Gradients**: Smooth color transitions throughout the design
- **Glassmorphism**: Modern glass-like elements with backdrop blur effects
- **Particle Systems**: Floating particles and interactive burst effects
- **Animated Elements**: Orbiting tech icons, floating code snippets, and pulse animations

### 🌟 Interactive Features
- **Smooth Scrolling**: Buttery smooth navigation between sections
- **Scroll Progress**: Visual progress indicator at the top of the page
- **Cursor Trail**: Dynamic cursor trail effect for desktop users
- **Parallax Effects**: Subtle parallax scrolling for depth
- **Hover Animations**: Rich hover states with ripple effects and transformations
- **Loading Screen**: Animated loading experience with progress bar

### 📱 Responsive Design
- **Mobile-First**: Fully responsive design that works on all devices
- **Touch-Friendly**: Optimized touch targets for mobile interaction
- **Adaptive Layout**: Grid layouts that adapt to screen size
- **Mobile Navigation**: Hamburger menu with smooth animations

### 🎯 Sections
1. **Hero Section**: Eye-catching introduction with animated elements
2. **About Me**: Personal story with animated statistics
3. **Skills & Technologies**: Interactive skill tags organized by category
4. **Featured Projects**: Project showcase with hover effects
5. **Experience**: Timeline view of work history
6. **Contact**: Contact form and social links

### 🔧 Technical Features
- **Theme Switcher**: Multiple color themes (Cyber, Neon, Sunset)
- **Accessibility**: Keyboard navigation and focus management
- **Performance**: Throttled scroll events and optimized animations
- **Modern CSS**: CSS Grid, Flexbox, Custom Properties, and advanced animations
- **Vanilla JavaScript**: No framework dependencies for fast loading

## 🚀 Getting Started

1. **Open the website**: Simply open `index.html` in your web browser
2. **Customize content**: Edit the HTML file to update personal information
3. **Modify colors**: Adjust CSS variables in `styles/main.css`
4. **Add features**: Extend functionality in `js/main.js`

## 📁 Project Structure

```
travis-resume/
├── index.html          # Main HTML file
├── styles/
│   └── main.css        # Complete styling with animations
├── js/
│   └── main.js         # Interactive features and animations
└── README.md           # This file
```

## 🎨 Color Themes

### Default (Cyber)
- Primary: Electric Blue (#00D4FF)
- Secondary: Hot Pink (#FF6B9D)
- Accent: Purple (#C77DFF)
- Success: Neon Green (#39FF7A)

### Alternative Themes
Click the palette button (bottom right) to cycle through:
- **Neon**: Green-focused with gold accents
- **Sunset**: Warm pinks and oranges

## 🛠 Customization Guide

### Updating Personal Information
1. Edit the hero section in `index.html`
2. Update the about section with your story
3. Modify project cards with your actual projects
4. Update contact information and social links

### Adding New Projects
```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-your-icon"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology</span>
        </div>
        <div class="project-links">
            <a href="#" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

### Modifying Colors
Update CSS variables in `:root` section of `main.css`:
```css
:root {
    --primary: #YourColor;
    --secondary: #YourColor;
    /* etc... */
}
```

## 🌐 Browser Support
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License
Feel free to use this template for your own portfolio!

## 🚀 Deployment
This is a static website that can be deployed to:
- GitHub Pages
- Netlify
- Vercel
- Any web hosting service

Simply upload the files to your hosting provider!

---

**Built with 💖 and lots of coffee by Travis Jones**
