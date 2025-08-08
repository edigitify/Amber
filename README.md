# Amber Website

A modern, responsive website built with React, Vite, and Tailwind CSS.

## Features

### ✅ Responsive Design
- Mobile-first approach with responsive breakpoints
- Optimized for all screen sizes (mobile, tablet, desktop)
- Touch-friendly navigation and interactions

### ✅ Navigation & Logo
- Fixed top navigation bar with proper logo positioning
- Responsive mobile menu with hamburger icon
- Smooth transitions and hover effects
- Active link highlighting

### ✅ Complete Page Structure
- **Home**: Hero section with call-to-action and feature highlights
- **About**: Company information with statistics and story
- **Products**: Product showcase with pricing and features
- **Contact**: Contact form with company information
- **Partner**: Partnership opportunities with application form

### ✅ Modern UI/UX
- Clean, professional design with blue color scheme
- Consistent spacing and typography
- Interactive elements with hover effects
- Form validation and user feedback

## Technology Stack

- **React 19** - Modern React with hooks
- **Vite** - Fast build tool and development server
- **Tailwind CSS 4** - Utility-first CSS framework
- **React Router DOM** - Client-side routing
- **ESLint** - Code linting and formatting

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd Amber-Website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── App.jsx                 # Main app component with routing
├── App.css                 # Global styles
├── main.jsx               # Entry point
├── index.css              # Tailwind CSS imports
├── assets/
│   └── logo.png          # Company logo
└── Componentes/
    ├── Navbar/
    │   └── navbar.jsx    # Navigation component
    └── Pages/
        ├── Home.jsx       # Home page
        ├── About.jsx      # About page
        ├── Products.jsx   # Products page
        ├── Contact.jsx    # Contact page
        └── Partner.jsx    # Partner page
```

## Key Improvements Made

### 1. **Logo Optimization**
- Proper sizing for different screen sizes (h-16 md:h-20 lg:h-24)
- Better positioning and alignment
- Updated alt text for accessibility

### 2. **Navigation Enhancement**
- Responsive navigation with mobile menu
- Improved link styling and hover effects
- Better spacing and typography
- Consistent active state indicators

### 3. **Mobile Responsiveness**
- Mobile-first responsive design
- Touch-friendly interface elements
- Optimized layouts for all screen sizes
- Proper breakpoint usage (sm, md, lg, xl)

### 4. **Complete Page Structure**
- All navigation links now have corresponding pages
- Consistent design language across all pages
- Interactive forms with proper validation
- Professional content structure

### 5. **Performance & Accessibility**
- Optimized component structure
- Proper semantic HTML
- ARIA labels and accessibility features
- Fast loading with Vite

## Customization

### Colors
The website uses a blue color scheme. To change colors, update the Tailwind classes in the components:
- Primary: `blue-600`, `blue-700`, `blue-800`
- Secondary: `gray-50`, `gray-100`, `gray-200`

### Logo
Replace `src/assets/logo.png` with your company logo.

### Content
Update the content in each page component to match your business needs.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License.
