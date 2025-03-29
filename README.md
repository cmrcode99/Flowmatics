# Flowmatic - AI-Powered Workflow Automation

A modern web application built with Next.js, TypeScript, and Tailwind CSS that showcases workflow automation solutions.

## Tech Stack

- **Framework**: Next.js
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Theme**: Dark/Light mode with next-themes
- **Icons**: Lucide React

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Build for production**:
   ```bash
   npm run build
   ```

## Project Structure

```
├── app/
│   ├── layout.tsx    # Root layout with theme provider
│   ├── page.tsx      # Landing page
│   └── globals.css   # Global styles and Tailwind imports
├── components/
│   └── theme-provider.tsx  # Dark/light mode provider
├── public/
│   └── images/      # Static images
├── tailwind.config.ts   # Tailwind configuration
├── tsconfig.json    # TypeScript configuration
└── next-env.d.ts    # Next.js type declarations
```

## Features

- Responsive design
- Dark/light mode support
- Modern UI components
- CSS variables for theming
- Animated transitions
- Type-safe development

## Styling

The project uses Tailwind CSS with a custom configuration that includes:

- Custom color scheme with CSS variables
- Container queries
- Custom animations
- Responsive breakpoints
- Custom border radius values

## Theme Configuration

The theme system uses CSS variables for colors and supports both dark and light modes. Key color tokens include:

- Primary
- Secondary
- Accent
- Muted
- Background
- Foreground
- Border
- Input
- Ring

## Dependencies

- next
- react
- react-dom
- tailwindcss
- typescript
- lucide-react
- next-themes
- tailwindcss-animate

## Development Dependencies

- @types/node
- @types/react
- @types/react-dom
- typescript
- postcss
- autoprefixer

## TypeScript Configuration

The project includes a comprehensive TypeScript setup with:

- ESNext features
- React JSX support
- Path aliases (@/ for root imports)
- Strict type checking
- Module resolution for Node.js

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request

## License

This project is licensed under the MIT License. 