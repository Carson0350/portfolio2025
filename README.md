# Carson Antoine - Professional Portfolio

A modern, performant portfolio website built with Next.js 14, TypeScript, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript (strict mode)
- **Styling:** Tailwind CSS 4 + shadcn/ui
- **Deployment:** Vercel
- **Font:** Inter (Google Fonts)
- **Icons:** Lucide React

## 📋 Prerequisites

- Node.js 18+ and npm
- Git
- Vercel account (for deployment)

## 🛠️ Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/Carson0350/portfolio2025.git
cd portfolio2025
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up environment variables

Copy the example environment file:

```bash
cp .env.example .env.local
```

Edit `.env.local` and fill in the required values:

```env
# Site Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000

# Contact Form (Required for contact functionality)
RESEND_API_KEY=your_resend_api_key_here

# Rate Limiting (Required for contact form)
UPSTASH_REDIS_REST_URL=your_upstash_url_here
UPSTASH_REDIS_REST_TOKEN=your_upstash_token_here

# Analytics (Optional)
NEXT_PUBLIC_GA_MEASUREMENT_ID=your_ga_id_here
# OR
NEXT_PUBLIC_PLAUSIBLE_DOMAIN=yourdomain.com
```

**Getting API Keys:**

- **Resend:** Sign up at [resend.com](https://resend.com) (100 emails/day free)
- **Upstash Redis:** Sign up at [upstash.com](https://upstash.com) (10K requests/day free)
- **Google Analytics:** Create property at [analytics.google.com](https://analytics.google.com)
- **Plausible:** Sign up at [plausible.io](https://plausible.io)

### 4. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint
- `npm run format` - Format code with Prettier
- `npm run type-check` - Check TypeScript types

## 🏗️ Project Structure

```
portfolio/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/            # React components
│   └── ui/               # shadcn/ui components
├── lib/                   # Utility functions
│   ├── env.ts            # Environment variables
│   └── utils.ts          # Helper functions
├── docs/                  # Project documentation
│   ├── brief.md          # Project brief
│   ├── prd/              # Product requirements
│   ├── front-end-spec.md # UI/UX specification
│   ├── architecture.md   # Technical architecture
│   └── stories/          # Development stories
└── public/               # Static assets

```

## 🚢 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import project in [Vercel Dashboard](https://vercel.com/new)
3. Configure environment variables in Vercel
4. Deploy!

The site will automatically deploy on every push to the main branch.

### Environment Variables in Vercel

Add the following environment variables in your Vercel project settings:

- `RESEND_API_KEY`
- `UPSTASH_REDIS_REST_URL`
- `UPSTASH_REDIS_REST_TOKEN`
- `NEXT_PUBLIC_GA_MEASUREMENT_ID` (optional)
- `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` (optional)

## 📚 Documentation

- **Project Brief:** `docs/brief.md`
- **Product Requirements:** `docs/prd/`
- **UI/UX Specification:** `docs/front-end-spec.md`
- **Architecture:** `docs/architecture.md`
- **Development Stories:** `docs/stories/`
- **Branching Strategy:** `docs/BRANCHING-STRATEGY.md`

## 🧪 Code Quality

- **ESLint:** Configured with Next.js and TypeScript rules
- **Prettier:** Automatic code formatting
- **Husky:** Pre-commit hooks for linting and formatting
- **TypeScript:** Strict mode enabled

## 📄 License

MIT

## 👤 Author

**Carson Antoine**

- GitHub: [@Carson0350](https://github.com/Carson0350)
- Portfolio: [portfolio2025-uao8.vercel.app](https://portfolio2025-uao8.vercel.app)

---

Built with ❤️ using Next.js, TypeScript, and Tailwind CSS
