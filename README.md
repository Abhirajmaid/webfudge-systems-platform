# Webfudge Platform

A comprehensive multi-tenant SaaS platform built with Next.js, Tailwind CSS, and Strapi CMS.

## 🏗️ Project Structure

This is a monorepo managed with Turborepo and npm workspaces.

```
webfudge-platform/
├── apps/
│   ├── landing/         # Landing page (Port: 3000)
│   ├── crm/            # CRM Application (Port: 3001)
│   ├── pm/             # Project Management (Port: 3002)
│   ├── accounts/       # Account Management (Port: 3003)
│   ├── vendor/         # Vendor Portal (Port: 3004)
│   └── backend/        # Strapi API (Port: 1337)
├── packages/
│   ├── ui/             # Shared UI components
│   ├── auth/           # Authentication utilities
│   ├── billing/        # Billing utilities
│   ├── config/         # Shared configurations
│   └── utils/          # Shared utilities
└── tooling/
    ├── tsconfig/       # TypeScript configurations
    ├── eslint/         # ESLint configurations
    ├── prettier/       # Prettier configurations
    └── env/            # Environment configurations
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 18.0.0
- npm >= 9.0.0

### Installation

Install all dependencies:

```bash
npm install
```

This will install dependencies for all apps and packages in the monorepo.

### Development

Start all applications in development mode:

```bash
npm run dev
```

Or run specific applications:

```bash
# Landing page
cd apps/landing && npm run dev

# CRM
cd apps/crm && npm run dev

# Project Management
cd apps/pm && npm run dev

# Accounts
cd apps/accounts && npm run dev

# Vendor Portal
cd apps/vendor && npm run dev

# Backend API
cd apps/backend && npm run develop
```

### Building

Build all applications:

```bash
npm run build
```

### Production

Start all applications in production mode:

```bash
npm run start
```

## 📦 Applications

### Frontend Apps (Next.js + Tailwind CSS)

#### Landing (Port 3000)
- Public-facing landing page
- Marketing content
- Lead generation

#### CRM (Port 3001)
- Customer Relationship Management
- Leads, Contacts, Deals
- Sales pipeline management

#### Project Management (Port 3002)
- Project tracking
- Task management
- Team collaboration
- Progress reports

#### Accounts (Port 3003)
- User management
- Organization settings
- Billing & subscriptions
- Invoices & audit logs
- Roles & permissions

#### Vendor Portal (Port 3004)
- Vendor dashboard
- License management
- Organization oversight
- Revenue tracking

### Backend API (Strapi - Port 1337)

- RESTful API
- Content management
- User authentication
- Database management

Access the Strapi admin panel at: `http://localhost:1337/admin`

## 🎨 Tech Stack

### Frontend
- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Language**: JavaScript/TypeScript
- **UI Components**: Custom component library

### Backend
- **CMS**: Strapi 4
- **Database**: SQLite (development) / PostgreSQL (production)
- **API**: REST API

### DevOps
- **Monorepo**: Turborepo
- **Package Manager**: npm workspaces
- **Code Quality**: ESLint, Prettier
- **Version Control**: Git

## 🔧 Configuration

### Environment Variables

Each application requires its own environment variables. Copy the example files:

```bash
# Backend
cp apps/backend/.env.example apps/backend/.env

# Frontend apps (if needed)
cp apps/landing/.env.example apps/landing/.env
cp apps/crm/.env.example apps/crm/.env
cp apps/pm/.env.example apps/pm/.env
cp apps/accounts/.env.example apps/accounts/.env
cp apps/vendor/.env.example apps/vendor/.env
```

## 📝 Scripts

### Root Level
- `npm run dev` - Start all apps in development
- `npm run build` - Build all apps
- `npm run start` - Start all apps in production
- `npm run lint` - Lint all apps
- `npm run format` - Format code with Prettier
- `npm run clean` - Clean all build artifacts and node_modules

### Individual Apps
Each app has its own scripts defined in its `package.json`.

## 🏢 Shared Packages

### @webfudge/ui
Shared UI components used across all applications.

### @webfudge/auth
Authentication utilities and helpers.

### @webfudge/billing
Billing and subscription management utilities.

### @webfudge/utils
Common utility functions.

### @webfudge/config
Shared configuration files.

## 🔐 Authentication

The platform uses JWT-based authentication managed by Strapi.

## 📚 API Documentation

API documentation is available in the Strapi admin panel.

## 🧪 Testing

(To be implemented)

## 🚢 Deployment

(To be implemented)

## 🤝 Contributing

(To be defined)

## 📄 License

(To be defined)

## 📖 Documentation

Comprehensive documentation is available:

### 🚀 Start Here
- **[Getting Started Guide](./GETTING_STARTED.md)** - Your first stop
- **[Installation Guide](./INSTALLATION.md)** - Detailed installation steps
- **[Quick Start Guide](./QUICKSTART.md)** - Get up and running quickly

### 📚 Complete Documentation
- **[Documentation Index](./DOCUMENTATION_INDEX.md)** - 📑 Complete guide to all documentation
- **[Project Overview](./PROJECT_OVERVIEW.md)** - High-level project overview
- **[Architecture Documentation](./ARCHITECTURE.md)** - System design and architecture
- **[Commands Reference](./COMMANDS.md)** - All available commands
- **[Environment Variables](./ENVIRONMENT.md)** - Configuration guide
- **[Setup Summary](./SETUP_SUMMARY.md)** - What's been initialized
- **[Project Checklist](./PROJECT_CHECKLIST.md)** - Track implementation progress
- **[Completion Report](./COMPLETION_REPORT.md)** - Initialization completion details

## 📞 Support

For support, please contact: support@webfudge.com

---

Built with ❤️ by Webfudge Systems

