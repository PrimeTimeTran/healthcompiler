# HealthCompiler HubSpot CMS Theme

A production-ready HubSpot CMS theme for HealthCompiler, built following the official HubSpot Boilerplate structure.

## 📁 Theme Structure

```
healthcompiler-theme/
├── theme.json              # Theme configuration
├── fields.json             # Global theme fields
├── css/
│   ├── variables.css       # CSS custom properties
│   └── main.css            # Main stylesheet
├── js/
│   └── main.js             # Theme JavaScript
├── templates/
│   ├── layouts/
│   │   └── base.html       # Base layout template
│   ├── home.html           # Home page template
│   ├── page.html           # Standard page template
│   ├── landing.html        # Landing page template
│   └── system/
│       ├── 404.html        # 404 error page
│       └── 500.html        # 500 error page
├── modules/
│   ├── hero.module/        # Hero section
│   ├── feature-cards.module/
│   ├── platform-overview.module/
│   ├── outcomes.module/
│   ├── cta-banner.module/
│   └── footer.module/
└── partials/
    ├── header.html         # Global header
    └── footer.html         # Global footer
```

## 🎨 Color System

The theme uses the HealthCompiler brand colors:

| Variable | Hex | Usage |
|----------|-----|-------|
| `--hc-bg-primary` | #FCF8F8 | Page background |
| `--hc-bg-secondary` | #FBEFEF | Section backgrounds |
| `--hc-surface` | #F9DFDF | Cards, panels |
| `--hc-accent` | #F5AFAF | Accent UI elements |
| `--hc-cta` | #FAAC68 | Primary CTAs |
| `--hc-text-primary` | #2E2E2E | Headings, body text |
| `--hc-text-muted` | #6B6B6B | Secondary text |

## 🚀 Deployment

### Prerequisites
- Node.js 16+
- HubSpot CLI (`npm install -g @hubspot/cli`)

### Steps

1. **Authenticate with HubSpot:**
   ```bash
   hs init
   ```

2. **Upload the theme:**
   ```bash
   hs upload healthcompiler-theme healthcompiler-theme
   ```

3. **Watch for changes (development):**
   ```bash
   hs watch healthcompiler-theme healthcompiler-theme
   ```

## 📦 Modules

### Solution Pages
- **solution-hero.module** - Hero section with eyebrow, headline, description, CTA
- **solution-content.module** - Flexible content sections with background options
- **feature-image-grid.module** - Alternating image/text feature rows
- **benefits-grid.module** - Grid of benefit cards with icons
- **data-process-steps.module** - Process flow visualization
- **stats-section.module** - Statistics and highlights display

### Home Page
- **hero.module** - Full-width hero with CTAs and trust badges
- **testimonials.module** - Customer testimonials grid
- **industries-grid.module** - Industries we serve cards

### Global
- **cta-banner.module** - Call-to-action section
- **footer.module** - Multi-column footer

### Page Templates
- `direct-primary-care.html` - DPC solution page
- `concierge-medicine.html` - Concierge solution page
- `functional-medicine.html` - Functional medicine page
- `employers.html` - Employers solution page
- `acos.html` - ACO solution page
- `brokers-advisors.html` - Brokers & advisors page

## ✏️ Customization

All modules are fully editable in the HubSpot page editor. Marketers can:
- Edit all text content
- Update CTAs and links
- Add/remove items from lists
- Change icons and emojis
- Toggle visibility of elements

## 📱 Responsive Design

The theme is fully responsive with breakpoints at:
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## 🔒 Security

- HIPAA-aligned design patterns
- No external dependencies
- Clean, auditable code

## 📄 License

MIT License - HealthCompiler
