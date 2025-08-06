# Zaktomate Website

A modern React-based website for Zaktomate, featuring AI automation tools for Bangladeshi businesses.

## Features

- **Modern React Architecture**: Built with React 18, Vite, and modern JavaScript
- **Responsive Design**: Fully responsive layout that works on all devices
- **Dark/Light Mode**: Theme toggle with system preference detection
- **Interactive Chat Demo**: Live chatbot demonstration with API integration
- **Smooth Animations**: Framer Motion animations throughout the site
- **SEO Optimized**: Meta tags and structured data for better search visibility
- **Performance Optimized**: Fast loading with code splitting and lazy loading

## Pages

- **Home**: Hero section with call-to-action and service overview
- **Services**: Detailed information about Zakbot, ZakDeck, and custom AI solutions
- **Zakbot**: Dedicated page for the AI chatbot product with live demo
- **Pricing**: Transparent pricing plans for Bangladeshi businesses
- **About**: Company information, mission, and team details
- **Contact**: Contact form with validation and integration
- **FAQ**: Comprehensive FAQ section organized by categories
- **Dashboard**: User dashboard with statistics and management features

## Tech Stack

### Frontend
- **React 18**: UI library with modern features
- **Vite**: Fast build tool and development server
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Framer Motion**: Animation library
- **React Icons**: Icon library
- **React Query**: Data fetching and caching
- **Axios**: HTTP client

### Styling
- **Tailwind CSS**: Primary styling framework
- **Custom CSS**: Additional custom styles
- **Google Fonts**: Typography (Montserrat, Open Sans, Roboto Mono)

### Development Tools
- **ESLint**: Code linting
- **PostCSS**: CSS processing
- **Autoprefixer**: CSS vendor prefixing

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd zaktomate-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

### Building for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Environment Variables

Create a `.env` file in the root directory:

```env
VITE_API_BASE_URL=http://localhost:7001
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/mvgrlkvl
VITE_APP_URL=http://localhost:3000
```

## Project Structure

```
src/
├── components/
│   ├── common/           # Reusable components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── Card.jsx
│   └── specific/         # Page-specific components
│       ├── ChatDemo.jsx
│       └── StatsDashboard.jsx
├── context/              # React context
│   └── ThemeContext.jsx
├── pages/                # Page components
│   ├── Home.jsx
│   ├── Services.jsx
│   ├── Zakbot.jsx
│   ├── Pricing.jsx
│   ├── About.jsx
│   ├── Contact.jsx
│   ├── FAQ.jsx
│   └── Dashboard.jsx
├── services/             # API services
│   └── api.js
├── App.jsx               # Main app component
├── main.jsx              # Entry point
└── index.css             # Global styles
```

## API Integration

The website integrates with several APIs:

- **Chat API**: For the interactive chatbot demo
- **Stats API**: For displaying real-time statistics
- **Form API**: For contact form submissions (via Formspree)

## Deployment

The website can be deployed to any static hosting service:

1. Build the project:
```bash
npm run build
```

2. Deploy the `dist` folder to your hosting provider.

### Vercel Deployment

1. Push your code to a Git repository
2. Connect your repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy automatically on push

### Netlify Deployment

1. Push your code to a Git repository
2. Connect your repository to Netlify
3. Set build command to `npm run build`
4. Set publish directory to `dist`
5. Configure environment variables

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## License

This project is licensed under the ISC License.

## Support

For support and questions:
- Email: support@zaktomate.com
- Website: https://zaktomate.com