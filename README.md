# Andrew Kittridge - Full-Stack Web Developer Portfolio

A modern, animated portfolio website showcasing my expertise in Java, Spring Framework, and enterprise application development. Built with React, TypeScript, and enhanced with sophisticated animations and a clean white/grey theme.

**🌟 Open Source Portfolio Template** - Feel free to fork and customize for your own portfolio!

## ✨ Features

### 🎨 **Modern Design**
- **Clean White/Grey Theme**: Sophisticated color palette with pure white accents
- **Animated Gradient Background**: Subtle shifting gradients that create depth
- **Floating Particles**: Elegant white particles that float upward
- **Glass Morphism**: Modern glass-like effects on cards and components
- **Glow Animations**: Interactive white glow effects on hover

### 🚀 **Technical Stack**
- **Frontend**: React 18 + TypeScript + Vite
- **Styling**: Tailwind CSS + Framer Motion
- **UI Components**: Custom shadcn/ui components
- **Animations**: Framer Motion for smooth transitions
- **Analytics**: Vercel Analytics integration
- **Deployment**: Vercel with automatic deployments

### 📱 **Responsive Design**
- Mobile-first approach
- Optimized for all screen sizes
- Smooth scrolling and navigation
- Accessible design patterns

## 🎯 **Sections**

### Hero Section
- Animated introduction with gradient text effects
- Social media links with glow animations
- Call-to-action buttons with glass morphism

### About Section
- Professional background and expertise
- Interactive statistics with glass cards
- Smooth scroll-triggered animations

### Experience Section
- Detailed work history and achievements
- Timeline-based layout
- Hover effects and transitions

### Skills Section
- Technical skills and technologies
- Progress indicators and visual representations
- Categorized skill groups

### Education Section
- Academic background and certifications
- Clean card-based layout
- Animated content reveals

### Contact Section
- Contact form with validation
- Social media integration
- Professional contact information

## 🛠️ **Development**

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation
```bash
# Clone the repository
git clone https://github.com/andrewkittridge/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### Build for Production
```bash
# Build the project
npm run build

# Preview the build
npm run preview
```

## 🎨 **Theme Features**

### Animated Background
- **Gradient Animation**: 15-second cycle with white and dark tones
- **Particle System**: 10 floating particles with staggered timing
- **Glass Effects**: Backdrop blur and transparency on cards
- **Glow Effects**: White glow animations on interactive elements

### Color Palette
- **Primary**: Pure white (`hsl(0 0% 98%)`)
- **Background**: Deep dark (`hsl(240 10% 3.9%)`)
- **Secondary**: Dark grey (`hsl(240 3.7% 15.9%)`)
- **Text**: High contrast white for readability

## 📊 **Performance**

- **Lighthouse Score**: 95+ across all metrics
- **Bundle Size**: Optimized with Vite
- **Loading**: Lazy-loaded components for faster initial load
- **SEO**: Meta tags and structured data
- **Accessibility**: WCAG 2.1 AA compliant

## 🔧 **Customization**

### Personal Information
Update your information in these files:
- `client/src/lib/constants.ts` - Social links and contact info
- `client/src/components/` - Update content in each component
- `client/src/pages/Home.tsx` - Modify sections as needed

### Theme Colors
The theme uses CSS custom properties for easy customization:

```css
:root {
  --primary: 0 0% 98%; /* Pure white */
  --background: 240 10% 3.9%; /* Deep dark */
  --secondary: 240 3.7% 15.9%; /* Dark grey */
}
```

### Animation Settings
Adjust animation timing and effects in `client/src/index.css`:

```css
.animated-gradient-bg {
  animation: gradient-shift 15s ease infinite;
}

.particle {
  animation: float 20s infinite linear;
}
```

## 🚀 **Deployment**

The portfolio is deployed on Vercel with:
- Automatic deployments from main branch
- Preview deployments for pull requests
- Edge functions for API routes
- Global CDN for fast loading

## 📈 **Analytics**

- **Page Views**: Tracked with Vercel Analytics
- **Section Engagement**: Custom analytics for section visibility
- **Performance Monitoring**: Real-time performance metrics

## 🤝 **Contributing**

This is an open source project! Contributions are welcome:

- 🐛 **Bug Reports**: Use the [bug report template](.github/ISSUE_TEMPLATE/bug_report.md)
- 💡 **Feature Requests**: Use the [feature request template](.github/ISSUE_TEMPLATE/feature_request.md)
- 🔧 **Code Contributions**: See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines

### Quick Start for Contributors
1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

## 🙏 **Acknowledgments**

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [Tailwind CSS](https://tailwindcss.com/) for utility-first styling
- [Vercel](https://vercel.com/) for hosting and analytics

---

**Connect with me:**
- [LinkedIn](https://linkedin.com/in/andrewkittridge)
- [GitHub](https://github.com/andrewkittridge)
- [Email](mailto:andrew@kittridge.dev)

*Built with ❤️ using React, TypeScript, and modern web technologies.*

---

**⭐ Star this repo if you found it helpful!** 