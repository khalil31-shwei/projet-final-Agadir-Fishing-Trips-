# Agadir Fishing Trips

A modern, scalable React + Vite web application for a fishing trip booking platform in Agadir, Morocco.

## 🎣 Features

- **Multi-language Support**: English, French, and Arabic with RTL support
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Animations**: Framer Motion for engaging user experience
- **Modern Routing**: React Router for seamless navigation
- **Scalable Architecture**: Clean folder structure ready for expansion

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing
- **Framer Motion** - Animation library
- **i18next** - Internationalization

## 📁 Project Structure

```
agadir-fishing-trips/
├── public/              # Static assets
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.tsx
│   │   └── Footer.tsx
│   ├── pages/          # Page components
│   │   ├── Home.tsx
│   │   ├── Trips.tsx
│   │   ├── TripDetails.tsx
│   │   ├── About.tsx
│   │   └── Contact.tsx
│   ├── App.tsx         # Main app component with routing
│   ├── main.tsx        # Entry point
│   ├── i18n.ts         # i18n configuration
│   └── index.css       # Global styles with Tailwind
├── tailwind.config.js  # Tailwind configuration
├── postcss.config.js   # PostCSS configuration
├── vite.config.ts      # Vite configuration
└── package.json        # Dependencies
```

## 🛠️ Installation & Setup

1. **Install dependencies**:
```bash
npm install
```

2. **Start development server**:
```bash
npm run dev
```

3. **Build for production**:
```bash
npm run build
```

4. **Preview production build**:
```bash
npm run preview
```

## 🌐 Pages

### Home (`/`)
- Hero section with call-to-action
- Features showcase
- CTA section for bookings

### Trips (`/trips`)
- Grid of available fishing trips
- Trip cards with details and pricing
- Filter and search capabilities (ready to implement)

### Trip Details (`/trips/:id`)
- Detailed trip information
- What's included
- Schedule
- Booking sidebar

### About (`/about`)
- Company story
- Team members
- Core values
- Why choose us

### Contact (`/contact`)
- Contact form
- Contact information
- WhatsApp integration
- Map placeholder

## 🎨 Design System

### Colors

**Primary (Blue)**:
- 50: #e6f7ff
- 600: #1890ff
- 700: #0050b3

**Ocean (Teal)**:
- 50: #e6f7f7
- 600: #009999
- 700: #005c5c

### Typography

- **Default**: Inter (Latin scripts)
- **Arabic**: Cairo (Arabic script with RTL support)

### Custom Button Classes

```css
.btn-primary      /* Primary blue button */
.btn-secondary    /* Ocean teal button */
.btn-outline      /* Outlined button */
```

## 🌍 Internationalization

The app supports three languages:
- **English** (en)
- **French** (fr)
- **Arabic** (ar) with RTL support

Language is automatically detected from browser settings and can be changed via the navbar language selector.

## 🔧 Customization

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add route in `src/App.tsx`
3. Add navigation link in `src/components/Navbar.tsx`
4. Add translations in `src/i18n.ts`

### Extending i18n

Add new translation keys in `src/i18n.ts`:

```typescript
const resources = {
  en: {
    translation: {
      // Add your keys here
    }
  },
  // ... other languages
}
```

### Custom Tailwind Classes

Extend the theme in `tailwind.config.js`:

```javascript
theme: {
  extend: {
    colors: {
      // Add custom colors
    }
  }
}
```

## 🚀 Future Enhancements

The architecture is ready for:

- **Payment Integration**: Stripe, PayPal, or local payment gateways
- **E-commerce Store**: Fishing equipment and merchandise
- **AI Assistant**: Chatbot for customer support
- **Booking System**: Real-time availability and reservations
- **User Authentication**: Customer accounts and booking history
- **Admin Dashboard**: Manage trips, bookings, and content
- **Reviews & Ratings**: Customer feedback system
- **Blog**: Fishing tips and news
- **Gallery**: Photo and video showcase

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔒 Best Practices

- ✅ TypeScript for type safety
- ✅ Component-based architecture
- ✅ Reusable components
- ✅ Clean code structure
- ✅ Responsive design
- ✅ Accessibility considerations
- ✅ SEO-friendly structure
- ✅ Performance optimized

## 📝 License

MIT License - feel free to use this project for your own purposes.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📧 Contact

For questions or support, please contact:
- Email: info@agadirfishing.com
- Phone: +212 XXX-XXXXXX

---

Built with ❤️ for Agadir Fishing Trips
