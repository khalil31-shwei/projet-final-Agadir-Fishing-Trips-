# Project Structure Documentation

## Overview
This document outlines the complete folder structure and file organization for the Agadir Fishing Trips web application.

## Directory Tree

```
agadir-fishing-trips/
│
├── public/                          # Static assets served directly
│   └── vite.svg                     # Vite logo (default)
│
├── src/                             # Source code
│   │
│   ├── components/                  # Reusable UI components
│   │   ├── Navbar.tsx              # Navigation bar with language switcher
│   │   └── Footer.tsx              # Footer with links and contact info
│   │
│   ├── pages/                       # Page components (route-based)
│   │   ├── Home.tsx                # Landing page with hero and features
│   │   ├── Trips.tsx               # Trip listing page
│   │   ├── TripDetails.tsx         # Individual trip details page
│   │   ├── About.tsx               # About us page
│   │   └── Contact.tsx             # Contact form and information
│   │
│   ├── App.tsx                      # Main app component with routing
│   ├── main.tsx                     # Application entry point
│   ├── i18n.ts                      # i18n configuration (EN/FR/AR)
│   ├── index.css                    # Global styles with Tailwind directives
│   └── vite-env.d.ts               # Vite type definitions
│
├── .gitignore                       # Git ignore rules
├── eslint.config.js                 # ESLint configuration
├── index.html                       # HTML entry point
├── package.json                     # Dependencies and scripts
├── package-lock.json                # Locked dependency versions
├── postcss.config.js                # PostCSS configuration
├── README.md                        # Project documentation
├── tailwind.config.js               # Tailwind CSS configuration
├── tsconfig.json                    # TypeScript base configuration
├── tsconfig.app.json                # TypeScript app configuration
├── tsconfig.node.json               # TypeScript node configuration
└── vite.config.ts                   # Vite build configuration

```

## File Descriptions

### Root Configuration Files

- **`package.json`**: Project metadata, dependencies, and npm scripts
- **`vite.config.ts`**: Vite bundler and dev server configuration
- **`tailwind.config.js`**: Tailwind CSS theme and plugin configuration
- **`postcss.config.js`**: PostCSS plugins (Tailwind + Autoprefixer)
- **`tsconfig.json`**: TypeScript compiler options
- **`eslint.config.js`**: Code linting rules

### Source Files (`src/`)

#### Core Files
- **`main.tsx`**: React app initialization and mounting
- **`App.tsx`**: Main component with React Router setup
- **`i18n.ts`**: Internationalization configuration
- **`index.css`**: Global styles, Tailwind directives, custom utilities

#### Components (`src/components/`)
Reusable UI components used across multiple pages:

- **`Navbar.tsx`**:
  - Responsive navigation
  - Language switcher (EN/FR/AR)
  - Mobile menu
  - Active route highlighting

- **`Footer.tsx`**:
  - Brand information
  - Quick links
  - Contact details
  - Social media links

#### Pages (`src/pages/`)
Route-based page components:

- **`Home.tsx`**:
  - Hero section with CTA
  - Features grid
  - Secondary CTA section

- **`Trips.tsx`**:
  - Trip cards grid
  - Trip information display
  - Links to trip details

- **`TripDetails.tsx`**:
  - Dynamic route (`/trips/:id`)
  - Detailed trip information
  - Booking sidebar
  - What's included list
  - Schedule timeline

- **`About.tsx`**:
  - Company story
  - Team members
  - Core values
  - Why choose us section

- **`Contact.tsx`**:
  - Contact form with validation
  - Contact information cards
  - WhatsApp integration
  - Map placeholder

## Component Architecture

### Layout Structure
```
App
├── Navbar (sticky top)
├── Main Content (flex-grow)
│   └── Routes
│       ├── Home
│       ├── Trips
│       ├── TripDetails
│       ├── About
│       └── Contact
└── Footer
```

### State Management
Currently using:
- React hooks (useState, useEffect)
- React Router (useParams, useLocation)
- i18next hooks (useTranslation)

**Ready for expansion**:
- Context API for global state
- Redux/Zustand for complex state
- React Query for server state

## Routing Structure

```
/ ...................... Home page
/trips ................. Trips listing
/trips/:id ............. Trip details (dynamic)
/about ................. About page
/contact ............... Contact page
```

## Styling Architecture

### Tailwind CSS
- Utility-first approach
- Custom color palette (primary, ocean)
- Responsive breakpoints
- Custom component classes

### Custom Classes
Defined in `index.css`:
- `.btn-primary` - Primary action button
- `.btn-secondary` - Secondary action button
- `.btn-outline` - Outlined button

### RTL Support
- Automatic direction switching for Arabic
- Font family changes based on language
- Proper text alignment

## Future Expansion Points

### Recommended Additions

1. **`src/types/`** - TypeScript type definitions
   ```
   src/types/
   ├── Trip.ts
   ├── User.ts
   └── Booking.ts
   ```

2. **`src/hooks/`** - Custom React hooks
   ```
   src/hooks/
   ├── useAuth.ts
   ├── useBooking.ts
   └── useTrips.ts
   ```

3. **`src/services/`** - API service layer
   ```
   src/services/
   ├── api.ts
   ├── tripService.ts
   └── authService.ts
   ```

4. **`src/context/`** - React Context providers
   ```
   src/context/
   ├── AuthContext.tsx
   └── BookingContext.tsx
   ```

5. **`src/utils/`** - Utility functions
   ```
   src/utils/
   ├── formatters.ts
   ├── validators.ts
   └── constants.ts
   ```

6. **`src/assets/`** - Images, icons, fonts
   ```
   src/assets/
   ├── images/
   ├── icons/
   └── fonts/
   ```

## Development Workflow

1. **Component Creation**: Create in `src/components/`
2. **Page Creation**: Create in `src/pages/` and add route in `App.tsx`
3. **Styling**: Use Tailwind utilities or add custom classes in `index.css`
4. **i18n**: Add translations in `src/i18n.ts`
5. **Testing**: Add tests alongside components (`.test.tsx`)

## Build Output

Production build creates:
```
dist/
├── assets/
│   ├── index-[hash].js
│   └── index-[hash].css
└── index.html
```

## Best Practices

✅ **Component Organization**
- One component per file
- Named exports for components
- Props interface defined above component

✅ **File Naming**
- PascalCase for components: `Navbar.tsx`
- camelCase for utilities: `formatDate.ts`
- kebab-case for CSS: `custom-styles.css`

✅ **Import Order**
1. React imports
2. Third-party libraries
3. Local components
4. Utilities and types
5. Styles

✅ **Code Structure**
- Interfaces/types at top
- Component definition
- Styled components (if any)
- Export at bottom

---

Last Updated: 2026-01-29
