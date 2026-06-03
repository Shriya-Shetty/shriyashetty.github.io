# 🚀 Shriya Salil Shetty - Interactive Portfolio

A modern, fully-responsive portfolio website showcasing your projects, skills, experience, and publications.

## 📁 Project Structure

```
shriyashetty.github.io/
├── index.html          # Main HTML structure
├── style.css           # Styling (3500+ lines of responsive CSS)
├── script.js           # Interactivity and animations
├── README.md           # This file
└── assets/             # (Optional) For images and media
    ├── profile.jpg     # Your profile picture
    ├── project-1.jpg   # Project screenshots
    └── ...
```

## ✨ Features

- **📱 Fully Responsive** - Works perfectly on desktop, tablet, and mobile
- **🎨 Modern Design** - Clean, professional UI with gradient accents
- **⚡ Interactive Elements** - Smooth animations, hover effects, scroll interactions
- **🔗 Direct GitHub Links** - All projects link to your GitHub repositories
- **📧 Contact Form** - Integrated email functionality
- **♿ Accessible** - Keyboard navigation, focus states, semantic HTML
- **🌙 Print-Friendly** - Can be printed or saved as PDF
- **📊 Performance** - Optimized for fast loading

## 🎯 Sections Included

1. **Hero Section** - Eye-catching introduction with call-to-action buttons
2. **About Me** - Personal bio with key statistics
3. **Skills** - Organized by categories (Languages, Web, AI/ML, Databases, etc.)
4. **Experience** - Timeline view of your professional experience
5. **Projects** - Featured 6 projects with icons, descriptions, and GitHub links
6. **Publications** - Your 3 Taylor & Francis publications
7. **Education** - B.Tech details and CGPA
8. **Achievements** - Hackathon wins and recognitions
9. **Contact** - Multiple contact methods and inquiry form
10. **Footer** - Copyright and credits

## 📸 Adding Your Profile Picture

1. **Create an `assets` folder** in the root directory
2. **Add your profile image** named `profile.jpg` (or any format)
3. **Update the `index.html`** - Replace the placeholder:

```html
<!-- OLD: Profile Placeholder -->
<div class="profile-image-placeholder">
    <i class="fas fa-user"></i>
</div>

<!-- NEW: Your Image -->
<img src="assets/profile.jpg" alt="Shriya Shetty" class="profile-image">
```

4. **Add CSS** in `style.css`:

```css
.profile-image {
    width: 100%;
    max-width: 400px;
    border-radius: 20px;
    box-shadow: var(--shadow-lg);
    object-fit: cover;
    aspect-ratio: 1;
}
```

## 🔧 Customization Guide

### Colors
Edit the CSS variables in `style.css`:

```css
:root {
    --primary-color: #6366f1;        /* Change this for main color */
    --secondary-color: #ec4899;      /* Change this for accent color */
    --bg-dark: #0f172a;
    --bg-light: #f8fafc;
    --text-dark: #1e293b;
    --text-light: #64748b;
}
```

### Font Changes
Update the `body` font-family in `style.css`:

```css
body {
    font-family: 'Your Font Name', sans-serif;
}
```

### Adding New Sections
1. Add HTML in `index.html`
2. Style with CSS in `style.css`
3. Add JavaScript interactions in `script.js`

### GitHub Repository Links
Update all project links to point to your actual repositories:

```html
<a href="https://github.com/Shriya-Shetty/flight-investigator" target="_blank">
    <i class="fab fa-github"></i> View Code
</a>
```

### Adding Project Images
Add project screenshots to showcase your work:

```html
<div class="project-header">
    <img src="assets/flight-investigator.jpg" alt="Flight Investigator">
</div>
```

## 📧 Contact Form Setup

The contact form opens the user's email client with pre-filled information. To customize the recipient email:

1. Open `index.html`
2. Find the contact form section
3. Update `shriyashetty9@gmail.com` to your preferred email

Alternatively, to use a backend service like Formspree or EmailJS:
- Sign up for the service
- Follow their documentation
- Update the form submission handler in `script.js`

## 🎨 Keyboard Shortcuts

Users can access certain features with keyboard shortcuts:

- **Ctrl/Cmd + G** - Open GitHub
- **Ctrl/Cmd + L** - Open LinkedIn
- **Esc** - Close mobile menu

## 📱 Mobile Responsive Breakpoints

- **768px and below** - Tablet view
- **480px and below** - Mobile view

## 🚀 Deployment

### GitHub Pages (Free)
1. Push your code to the repository
2. Go to Settings → Pages
3. Select "Deploy from a branch"
4. Choose `main` branch and `/ (root)` folder
5. Your site will be available at `https://shriyashetty.github.io`

### Other Hosting Options
- **Vercel** - Zero-config deployment, excellent for portfolios
- **Netlify** - Easy drag-and-drop deployment
- **Firebase Hosting** - Google's hosting platform

## 🔍 SEO Optimization

The portfolio includes semantic HTML and meta tags. To improve SEO further:

1. Add meta description in `<head>`:
```html
<meta name="description" content="Portfolio of Shriya Salil Shetty - AI/ML Engineer, Full-Stack Developer">
```

2. Add social media meta tags:
```html
<meta property="og:title" content="Shriya Salil Shetty">
<meta property="og:description" content="AI/ML Engineer & Full-Stack Developer">
<meta property="og:image" content="assets/profile.jpg">
```

## ⚡ Performance Tips

1. **Optimize Images** - Compress images before uploading
   - Use TinyPNG or similar tools
   - Use modern formats like WebP

2. **Lazy Loading** - Images will load only when visible

3. **Caching** - Browser caching helps on repeat visits

## 🐛 Browser Support

- Chrome/Edge: ✅ Full support
- Firefox: ✅ Full support
- Safari: ✅ Full support
- IE 11: ⚠️ Limited support (graceful degradation)

## 📝 Content Updates

To keep your portfolio fresh:

1. **Add new projects** - Add `project-card` divs
2. **Update skills** - Modify `skill-tag` elements
3. **Add publications** - Add `publication-item` divs
4. **Update experience** - Modify `timeline-item` divs

## 🔒 Security Notes

- The contact form uses `mailto:` which is safe
- No backend services store data
- All code is client-side only

## 📞 Getting Help

If you need to modify anything:

1. Check the HTML comments for section identification
2. Use browser DevTools to inspect elements
3. Update CSS classes and IDs carefully
4. Test on mobile devices before publishing

## 📄 License

This portfolio template is open for your personal use. Feel free to customize it as needed.

---

## 🎉 Next Steps

1. ✅ Replace placeholder image with your profile picture
2. ✅ Update GitHub repository links for each project
3. ✅ Verify all contact information
4. ✅ Test on mobile devices
5. ✅ Push to GitHub and enable Pages
6. ✅ Share your portfolio!

## 💡 Enhancement Ideas

- [ ] Add project demo links
- [ ] Add blog section
- [ ] Add testimonials/recommendations
- [ ] Add dark mode toggle
- [ ] Add downloadable resume button
- [ ] Add animations on scroll
- [ ] Add skill proficiency bars
- [ ] Add project filters

---

**Made with ❤️ by Shriya Salil Shetty**

For any questions or improvements, visit: [GitHub](https://github.com/Shriya-Shetty)
