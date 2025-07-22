# ArtWork Assignment

A modern React application built with Vite for artwork management and display.

## 🎨 Overview

ArtWork Assignment is a web application that provides functionality for managing and displaying artwork collections. Built with modern web technologies, it offers a fast and responsive user experience with hot module replacement (HMR) and optimized development workflow.

## ✨ Features

- **Modern React Architecture**: Built with React 18+ using functional components and hooks
- **Fast Development**: Powered by Vite for lightning-fast development and builds
- **Type Safety**: TypeScript support for better code quality and developer experience
- **Code Quality**: ESLint configuration with React-specific rules
- **Hot Module Replacement**: Instant updates during development
- **Responsive Design**: Mobile-friendly and responsive UI components

## 🚀 Quick Start

### Prerequisites

Make sure you have the following installed:
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/rraushan1205/artWorkAssignment.git
cd artWorkAssignment
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start the development server with HMR
- `npm run build` - Build the project for production
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality

## 🛠️ Tech Stack

- **Frontend Framework**: React 18+
- **Build Tool**: Vite
- **Language**: TypeScript/JavaScript
- **Linting**: ESLint
- **Development**: Hot Module Replacement (HMR)

### Vite Plugins

This project uses the following Vite plugins:

- **@vitejs/plugin-react**: Uses Babel for Fast Refresh
- **@vitejs/plugin-react-swc**: Alternative plugin using SWC for Fast Refresh (faster compilation)

## 📁 Project Structure

```
artWorkAssignment/
├── public/                 # Static assets
├── src/                   # Source code
│   ├── components/        # React components
│   ├── assets/           # Images, fonts, etc.
│   ├── hooks/            # Custom React hooks
│   ├── utils/            # Utility functions
│   ├── types/            # TypeScript type definitions
│   ├── App.tsx           # Main App component
│   └── main.tsx          # Application entry point
├── index.html            # HTML template
├── package.json          # Project dependencies
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite configuration
└── eslint.config.js      # ESLint configuration
```

## 🔧 Development

### Code Quality

This project includes ESLint configuration for maintaining code quality:

- React-specific lint rules
- TypeScript support
- Recommended configurations for production applications

### Type Safety

For production applications, consider enabling type-aware lint rules in your ESLint configuration:

```javascript
export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      // or for stricter rules:
      ...tseslint.configs.strictTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
])
```

### Additional React Plugins

You can enhance the development experience by installing additional React-specific ESLint plugins:

```bash
npm install --save-dev eslint-plugin-react-x eslint-plugin-react-dom
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This will create a `dist` folder with optimized production files.

### Preview Production Build

```bash
npm run preview
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📋 Development Guidelines

- Follow the existing code style and conventions
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure all linting checks pass before committing

## 🐛 Issues

If you encounter any issues or have suggestions for improvements, please:

1. Check existing issues to avoid duplicates
2. Create a new issue with a clear description
3. Include steps to reproduce the problem
4. Provide relevant system information

## 📄 License

This project is open source. Please check the repository for license information.

## 👨‍💻 Author

**Raushan Kumar** - [@rraushan1205](https://github.com/rraushan1205)

---

## 📚 Additional Resources

- [Vite Documentation](https://vitejs.dev/)
- [React Documentation](https://reactjs.org/)
- [TypeScript Documentation](https://www.typescriptlang.org/)
- [ESLint Documentation](https://eslint.org/)

---

*Built with ❤️ using React and Vite*
