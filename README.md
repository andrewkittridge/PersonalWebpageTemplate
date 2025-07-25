# Andrew Kittridge - Full-Stack Web Developer Portfolio

A modern, animated portfolio website showcasing my expertise in Java, Spring Framework, and enterprise application development. Built with React, TypeScript, and enhanced with sophisticated animations and a clean white/grey theme.

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
git clone <repository-url>
cd AndrewKittridge

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

This is a personal portfolio project, but suggestions and feedback are welcome!

## 📄 **License**

This project is open source and available under the [MIT License](LICENSE).

---

**Connect with me:**
- [LinkedIn](https://linkedin.com/in/andrewkittridge)
- [GitHub](https://github.com/andrewkittridge)
- [Email](mailto:andrew@kittridge.dev)

*Built with ❤️ using React, TypeScript, and modern web technologies.* 