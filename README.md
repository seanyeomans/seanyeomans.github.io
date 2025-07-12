# Sean Yeomans - Portfolio Website

A modern, responsive portfolio website showcasing Sean Yeomans' 25+ years of experience as a Senior Consultant/Developer, spanning from early multimedia development to modern web technologies.

## 🚀 Features

- **Modern Design**: Clean, professional design with smooth animations and gradients
- **Fully Responsive**: Optimized for desktop, tablet, and mobile devices
- **Interactive Elements**: Smooth scrolling navigation, hover effects, and motion animations
- **Performance Optimized**: Fast loading with optimized assets and lazy loading
- **SEO Ready**: Proper meta tags, semantic HTML, and structured content
- **Contact Form**: Functional contact form with validation
- **Technology Timeline**: Visual representation of career evolution through technologies

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **Framer Motion** - Smooth animations and page transitions
- **Tailwind CSS** - Utility-first CSS framework for responsive design
- **React Icons** - Comprehensive icon library
- **PostCSS** - CSS processing and optimization
- **Create React App** - Build tool and development environment

## 📋 Website Sections

1. **Hero Section** - Introduction with animated text and call-to-action buttons
2. **About** - Professional background highlighting 25+ years of experience
3. **Featured Projects** - Showcase of recent enterprise work at Norima Consulting
4. **Skills & Expertise** - Interactive skill bars and technology evolution timeline
5. **Professional Experience** - Career progression from multimedia to modern development
6. **Contact** - Contact form and professional contact information
7. **Footer** - Additional links and social media connections

## 🚀 Getting Started

### Prerequisites

- **Node.js** (version 14 or higher)
- **npm** or **yarn** package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd sean-yeomans-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 📦 Building for Production

### Create Production Build

```bash
npm run build
```

This creates a `build` folder with optimized production files including:
- Minified JavaScript and CSS
- Optimized images and assets
- Static HTML files
- Service worker for offline functionality

### Test Production Build Locally

```bash
npx serve -s build
```

This serves the production build locally for testing.

## 🌐 Deployment Options

### 1. Netlify (Recommended)

**Automatic Deployment:**
1. Connect your GitHub repository to Netlify
2. Set build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
3. Deploy automatically on every push to main branch

**Manual Deployment:**
```bash
# Install Netlify CLI
npm install -g netlify-cli

# Build the project
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=build
```

### 2. Vercel

**Automatic Deployment:**
1. Connect your repository to Vercel
2. Vercel automatically detects React and builds the project
3. Deploy automatically on every push

**Manual Deployment:**
```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

### 3. GitHub Pages

1. **Add homepage to package.json:**
   ```json
   "homepage": "https://yourusername.github.io/repository-name"
   ```

2. **Install gh-pages:**
   ```bash
   npm install --save-dev gh-pages
   ```

3. **Add scripts to package.json:**
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build"
   ```

4. **Deploy:**
   ```bash
   npm run deploy
   ```

### 4. AWS S3 + CloudFront

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload to S3 bucket:**
   ```bash
   aws s3 sync build/ s3://your-bucket-name --delete
   ```

3. **Configure CloudFront for CDN and HTTPS**

### 5. Traditional Web Hosting

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Upload contents of `build` folder** to your web server via FTP/SFTP

## 🎨 Customization

### Content Updates

Update content in the respective component files:
- `src/components/Hero.js` - Hero section content
- `src/components/About.js` - About section and expertise cards
- `src/components/Projects.js` - Project details and descriptions
- `src/components/Skills.js` - Skills and technology timeline
- `src/components/Experience.js` - Work experience timeline
- `src/components/Contact.js` - Contact information and form

### Styling Changes

Modify styles in:
- `src/index.css` - Global styles and custom CSS
- `tailwind.config.js` - Tailwind configuration and theme
- Individual component files - Component-specific styles

### Color Scheme

Update colors in `tailwind.config.js`:
```javascript
colors: {
  blue: { /* blue color palette */ },
  purple: { /* purple color palette */ }
}
```

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔧 Available Scripts

- `npm start` - Runs the app in development mode
- `npm run build` - Builds the app for production
- `npm test` - Launches the test runner
- `npm run eject` - Ejects from Create React App (not recommended)

## 🚀 Performance Optimization

The website includes several performance optimizations:
- **Code Splitting**: Automatic code splitting by Create React App
- **Lazy Loading**: Images and components load as needed
- **Minification**: Production builds are minified
- **Caching**: Static assets are cached for better performance
- **Optimized Images**: Images are optimized for web delivery

## 🔒 Security Considerations

- **Environment Variables**: Sensitive data should be stored in `.env` files
- **HTTPS**: Always deploy with HTTPS enabled
- **Content Security Policy**: Consider adding CSP headers
- **Dependencies**: Regularly update dependencies for security patches

## 📊 Analytics Integration

To add analytics (Google Analytics, etc.):

1. **Add tracking code** to `public/index.html`
2. **Or use React Helmet** for dynamic meta tags
3. **Configure environment variables** for different environments

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**: Server will automatically try port 3001, 3002, etc.
2. **Build errors**: Check terminal output for specific error messages
3. **Dependencies missing**: Run `npm install` again
4. **Styling issues**: Ensure Tailwind CSS is properly configured

### Development Tips

- Use browser dev tools to test responsive design
- Check console for any JavaScript errors
- Test contact form functionality
- Verify all links work correctly

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Contact

- **Email**: sean@yeomans.ca
- **Phone**: 204-951-1274
- **Location**: Winnipeg, MB, Canada

---

**Built with ❤️ using React, Framer Motion, and Tailwind CSS**

*This portfolio showcases 25+ years of experience spanning multimedia development, interactive design, and enterprise solutions.* 