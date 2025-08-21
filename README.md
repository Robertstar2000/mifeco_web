# MIFECO - Strategic Consulting & Software Solutions

![MIFECO Logo](public/vite.svg)

A modern, responsive React application for MIFECO (Management Innovation For Enhanced Competitive Operations), a leading strategic consulting firm specializing in business transformation, digital solutions, and space industry consulting.

## 🌟 Overview

MIFECO is a comprehensive business consulting platform that offers:
- **Strategic Planning Services** - Comprehensive business strategy development
- **Digital Transformation** - Modern technology implementation and workflow optimization
- **Growth Optimization** - Data-driven growth strategies and market expansion
- **Team Development** - Leadership training and organizational development
- **Performance Analytics** - Advanced KPI tracking and business intelligence
- **Risk Management** - Comprehensive risk assessment and mitigation strategies

## 🚀 Key Features

### 🏢 Consulting Services
- **Strategic Planning**: $17,500 per project plus expenses
- **Digital Transformation**: Custom quotes available
- **Consultation Sessions**: $500 per session
- **Industry Expertise**: Education, Healthcare, Technology, Space Industry

### 💻 Software Solutions
- **Researcher**: AI-powered research assistant ($39/month after free trial)
- **Hyperion**: Scientific ideation and research platform ($39/month after free trial)
- **Engineering Assistant**: Advanced engineering development tool ($39/month after free trial)
- **Complete Software Suite**: $99/month for all three tools

### 🎯 Core Competencies
- **30+ Years Experience** with proven success rates
- **25+ Prestigious Clients** across multiple industries
- **100% Success Rate** with measurable ROI
- **Award-Winning Excellence** including Mars Society recognition

## 🏗️ Project Structure

```
mifeco-website/
├── public/
│   └── vite.svg              # Website favicon
├── src/
│   ├── assets/               # Static assets (images, videos, icons)
│   │   ├── App.jsx           # Additional app assets
│   │   ├── business_consulting_team.jpg
│   │   ├── mars_rover_technology.jpg
│   │   ├── mars_society_award.jpg
│   │   ├── mifeco_demo_video_new.mp4
│   │   ├── mifeco_demo_video_scene_2.mp4
│   │   ├── mifeco_demo_video.mp4
│   │   ├── mifeco_hero_illustration.jpg
│   │   ├── mifeco-clients.jpeg
│   │   ├── modern_office_technology.jpg
│   │   ├── mti_logo.jpg
│   │   ├── react.svg
│   │   ├── space_industry_background.jpg
│   │   └── strategic_planning_icon.jpg
│   ├── components/
│   │   ├── ui/               # Reusable UI components (shadcn/ui)
│   │   │   ├── button.jsx
│   │   │   ├── card.jsx
│   │   │   ├── badge.jsx
│   │   │   ├── input.jsx
│   │   │   └── [other UI components...]
│   │   ├── App.jsx           # Main application component
│   │   ├── CalendarScheduler.jsx    # Appointment booking
│   │   ├── ConsultationBookingModal.jsx
│   │   ├── ContentModal.jsx         # Dynamic content display
│   │   ├── IndustriesSection.jsx    # Industry-specific services
│   │   ├── IndustryPopup.jsx        # Industry detail modals
│   │   ├── PricingSection.jsx       # Pricing and packages
│   │   ├── SEOHead.jsx             # SEO optimization
│   │   ├── ServiceContentModal.jsx # Service detail modals
│   │   ├── ServicePopup.jsx        # Service information
│   │   ├── SoftwareSection.jsx     # Software product showcase
│   │   ├── VideoModal.jsx          # Video content display
│   │   ├── Web-netlify.code-workspace
│   │   └── Web-netlify.code-workspaceA.code-workspace
│   ├── content/            # Markdown content files
│   │   ├── privacy-policy.md
│   │   ├── services-content.md
│   │   └── terms-of-service.md
│   ├── hooks/              # Custom React hooks
│   │   └── use-mobile.js   # Mobile responsiveness hook
│   ├── lib/                # Utility libraries
│   │   └── utils.js        # Utility functions
│   ├── App.css             # Global styles
│   ├── App.jsx             # Main application entry point
│   ├── index.css           # Base styles and CSS variables
│   └── main.jsx            # React application entry
├── dist/                   # Production build output
├── components.json         # shadcn/ui configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
├── jsconfig.json          # JavaScript configuration
├── package.json           # Dependencies and scripts
├── pnpm-lock.yaml         # Package manager lock file
└── vite.config.js         # Vite build configuration
```

## 🛠️ Technology Stack

### Frontend Framework
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **React Router** - Client-side routing (integrated components)

### UI & Styling
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn/ui** - Modern UI component library
- **Lucide React** - Beautiful icon library
- **Framer Motion** - Animation library (implied in components)

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

### Key Dependencies
- `@stripe/stripe-js` - Payment processing integration
- `react-helmet-async` - Dynamic document head management
- `lucide-react` - Icon components
- Various shadcn/ui components for consistent UI

## 🚀 Getting Started

### Prerequisites
- **Node.js** (v16 or higher)
- **pnpm** (v8 or higher) - Recommended package manager
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Robertstar2000/mifeco-website.git
   cd mifeco-website
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   ```

3. **Start development server**
   ```bash
   pnpm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
# Create optimized production build
pnpm run build

# Preview production build
pnpm run preview
```

## 📱 Components Overview

### Core Components

#### `App.jsx`
- **Purpose**: Main application wrapper and routing
- **Features**:
  - State management for modals and popups
  - SEO head management
  - Responsive navigation
  - Footer and header sections

#### `PricingSection.jsx`
- **Purpose**: Display service pricing and packages
- **Features**:
  - Interactive pricing cards
  - Stripe payment integration
  - Multiple service tiers
  - Dynamic pricing display

#### `SoftwareSection.jsx`
- **Purpose**: Showcase software products and tools
- **Features**:
  - Product comparison
  - Purchase flow integration
  - System requirements display
  - Download management

#### `IndustriesSection.jsx`
- **Purpose**: Industry-specific service offerings
- **Features**:
  - Interactive industry cards
  - Detailed industry modals
  - Client testimonials
  - Service specialization

### UI Components (shadcn/ui)

- **Button**: Customizable button component with variants
- **Card**: Flexible card container for content
- **Badge**: Status and category indicators
- **Input**: Form input components
- **Dialog**: Modal and popup containers
- **And many more...**

## 🎨 Design System

### Color Palette
- **Primary**: Gradient from blue to purple (`from-blue-500 to-purple-600`)
- **Secondary**: Orange to red gradients
- **Accent**: Green to teal gradients
- **Neutral**: Gray scale with custom gradients

### Typography
- **Primary Font**: System font stack with fallbacks
- **Heading Scale**: From 2xl (1.5rem) to 7xl (4.5rem)
- **Body Text**: Medium weight with optimized line height

### Responsive Design
- **Mobile First**: Optimized for mobile devices (320px+)
- **Tablet**: Enhanced layout for medium screens (768px+)
- **Desktop**: Full feature set on large screens (1024px+)

## 🌐 Deployment

### Build Process
```bash
# Development build with hot reload
pnpm run dev

# Production build
pnpm run build

# Production files are created in /dist folder
```

### Deployment Options

#### Netlify/Vercel (Recommended)
1. Connect GitHub repository
2. Set build command: `pnpm run build`
3. Set publish directory: `dist`
4. Deploy automatically on git push

#### Traditional Hosting (Apache/Nginx)
1. Build production files: `pnpm run build`
2. Upload `dist` folder contents to web server
3. Configure server to serve `index.html` for all routes (SPA)

#### DreamHost/FTP Deployment
1. Build production files: `pnpm run build`
2. Use FTP client to upload `dist` folder to `public_html`
3. Ensure proper file permissions (755 for directories, 644 for files)

## 🔧 Configuration

### Environment Variables
Create `.env` file for:
- Stripe API keys
- Email service configuration
- Analytics tracking IDs

### Build Configuration
Modify `vite.config.js` for:
- Build optimization
- Asset handling
- Plugin configuration

## 📊 Performance Features

### Optimization Features
- **Code Splitting**: Automatic route-based splitting
- **Asset Optimization**: Image compression and WebP conversion
- **CSS Optimization**: Unused CSS removal and minification
- **JavaScript Optimization**: Tree shaking and minification

### Performance Metrics
- **First Contentful Paint**: <1.5s
- **Largest Contentful Paint**: <2.5s
- **Cumulative Layout Shift**: <0.1
- **Total Bundle Size**: ~600KB (gzipped)

## 🔒 Security Features

- **HTTPS Only**: All connections encrypted
- **Content Security Policy**: XSS protection
- **Input Validation**: Form data sanitization
- **Dependency Security**: Regular security audits

## 📈 SEO & Analytics

### SEO Features
- **Meta Tags**: Dynamic title and description
- **Structured Data**: JSON-LD for rich snippets
- **Open Graph**: Social media optimization
- **Sitemap**: Automatic generation

### Analytics Integration
- **Google Analytics**: User behavior tracking
- **Search Console**: Search performance monitoring
- **Core Web Vitals**: Performance monitoring

## 🤝 Contributing

1. Fork the repository
2. Create feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📝 License

This project is proprietary software owned by MIFECO Inc.
All rights reserved. No unauthorized use, copying, or distribution permitted.

## 📞 Support

- **Email**: mifecoinc@gmail.com
- **Phone**: (248) 207-1524
- **Office**: Florida and Michigan

## 🏆 Awards & Recognition

- **Mars Society Award Winner** - Telerobotic Mars Expedition Design Competition 2022
- **InnoCentive Challenge Winner** - 3x Innovation Recognition
- **Featured in Wired Magazine** - Technology Innovation Coverage
- **Mars Technology Institute Affiliate** - Space Technology Partnership

## 🔄 Recent Updates

### Version History
- **v2.1.0**: Added hidden affiliate links, removed unrelated testimonials
- **v2.0.0**: Major UI/UX improvements, enhanced mobile responsiveness
- **v1.5.0**: Added software purchase flow, Stripe integration
- **v1.0.0**: Initial launch with core consulting services

### Latest Features
- ✅ Hidden affiliate link integration
- ✅ Customer testimonials cleanup
- ✅ Enhanced pricing structure
- ✅ Improved software purchase flow
- ✅ Optimized production build

---

**Built with ❤️ by the MIFECO team**
*Transforming businesses through strategic innovation and digital excellence*
