# GHUMAU - Modern Travel Platform for Nepal

Ghumau is a premium, modern travel platform designed to provide a seamless and immersive experience for exploring the beauty of Nepal. Built with a focus on aesthetics and performance, it features the "Alpine Sanctuary" design system.

## 🏔️ Key Features

- **AI Trip Planner**: Personalized itineraries based on your budget, duration, and preferences.
- **Saved Adventures**: Curated collection of your favorite destinations and trekking routes.
- **Local Eats Guide**: Discover authentic Nepalese cuisine, from street food to fine dining.
- **Booking Management**: Seamlessly browse and book stays across Nepal.
- **Interactive Maps**: Visualize your journey with mid-range stay maps and destination guides.
- **Packing List Generator**: Smart checklist to ensure you're prepared for the Himalayan terrain.

## 🎨 Design System: Alpine Sanctuary

The platform adheres to a strict "No-Line" rule, utilizing tonal backgrounds, glassmorphism, and premium typography (Plus Jakarta Sans & Manrope) to create a serene, editorial-grade user experience.

## 🌿 Design Philosophy

- **Serenity through Simplicity**: Minimizing visual noise by removing hard borders and utilizing soft shadows.
- **Contextual Awareness**: Every interaction is designed to feel natural and responsive to the user's journey.
- **Authentic Storytelling**: Prioritizing real-life photography of Nepal to foster a genuine connection with the destination.

## 🛠️ Technology Stack

- **Frontend**: React 19, Vite 8, Tailwind CSS 3
- **Animations**: Framer Motion 12
- **Icons**: Lucide React & Material Symbols
- **Styling**: PostCSS with custom design tokens

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/shashwat-bikram-singh/GHUMAU.git
   cd GHUMAU
   ```

2. Install dependencies for the root and frontend:
   ```bash
   npm run install-all
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

- `/frontend`: The core React application.
- `/src`: Legacy or root-level source files.
- `/stitch_ghumuam_nepal_travel_ui`: Original UI/UX design source and migration assets.

## 🏗️ Architecture Overview

The project is structured as a monorepo-lite, with the core application residing in the `frontend` directory. The main repository manages global configurations, documentation, and the design source assets.

- **Design First**: The development follows a design-first approach using the "Alpine Sanctuary" tokens.
- **Component Driven**: React components are built to be reusable and themeable.
- **Submodule Flow**: The `frontend` directory is managed as a git submodule to allow independent development and deployment cycles.

## 📊 Project Status

- [x] Phase 1: Core Design System & UI Migration
- [x] Phase 2: Authentic Content & Real Imagery Integration
- [/] Phase 3: Interactive Features & API Integration
- [ ] Phase 4: Performance Optimization & SEO

## 📄 License

Private - All rights reserved.
