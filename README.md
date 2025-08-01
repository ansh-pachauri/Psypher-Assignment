# Book Your Show - Live Entertainment Platform

A modern, responsive web application for booking live shows, concerts, and events with tier-based access control. Built with Next.js 14, TypeScript, Tailwind CSS, and Clerk authentication.

## 🎭 Features

- **Tier-Based Access Control**: Free, Silver, Gold, and Platinum membership tiers
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Modern UI**: Clean, minimal design with smooth animations
- **Real-time Tier Updates**: Instant tier upgrades with immediate access to new events
- **Authentication**: Secure user authentication with Clerk
- **Database Integration**: Supabase for event management
- **TypeScript**: Full type safety throughout the application

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Authentication**: Clerk
- **Database**: Supabase
- **UI Components**: Shadcn/ui
- **Icons**: Lucide React
- **Deployment**: Vercel (recommended)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js 18+ 
- npm or yarn
- Git

## 🛠️ Setup Instructions

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd district
```

### 2. Install Dependencies

```bash
npm install
# or
yarn install
```

### 3. Environment Variables

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
CLERK_SECRET_KEY=your_clerk_secret_key

# Supabase Database
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
SUPABASE_SERVICE_ROLE_KEY=your_supabase_service_role_key

# Next.js
NEXTAUTH_SECRET=your_nextauth_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4. Database Setup

#### Supabase Configuration

1. Create a new Supabase project at [supabase.com](https://supabase.com)
2. Create the `events` table with the following schema:

```sql
CREATE TABLE events (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title VARCHAR(255) NOT NULL,
  description TEXT,
  image_url TEXT,
  event_date TIMESTAMP WITH TIME ZONE,
  tier VARCHAR(50) CHECK (tier IN ('free', 'silver', 'gold', 'platinum')),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

```

### 5. Clerk Authentication Setup

1. Create a new Clerk application at [clerk.com](https://clerk.com)
2. Configure your authentication settings
3. Add your domain to the allowed origins
4. Copy your publishable and secret keys to the environment variables

### 6. Run the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 👥 Authentication & Tier System

### User Journey

1. **Landing Page**: Users start at the homepage with a "Book Now" button
2. **Sign Up/In**: Clicking "Book Now" redirects to Clerk authentication
3. **Free Tier Access**: New users automatically get free tier access
4. **Tier Upgrade**: Users can upgrade to Platinum to access all events

### Tier Access Levels

| Tier | Access Level | Events Available |
|------|-------------|------------------|
| **Free** | Basic | Free events only |
| **Platinum** | Ultimate | All events (Free + Silver + Gold + Platinum) |

### Clerk Authentication Process

#### Initial User Setup
1. User clicks "Book Now" on landing page
2. Redirected to Clerk sign-in/sign-up page
3. User creates account or signs in
4. Automatically assigned to **Free Tier**
5. Redirected to `/bookshow` page with free tier events

#### Tier Upgrade Process
1. User is on `/bookshow` page with free tier events
2. Clicks "Upgrade to Platinum" button
3. Server action updates user's tier in Clerk metadata
4. Events refresh automatically to show all available events
5. User now has access to all tiers (Free, Silver, Gold, Platinum)

### Setting User Tiers in Clerk

#### For New Users (Automatic)
- Users are automatically assigned to `free` tier upon first sign-in
- No manual configuration needed


## 📸 Screenshots

### Landing Page
<!-- Add screenshot of the homepage here -->
## Landing Page
![Landing Page](/images/landingpage.png)

## Authentication Page
![Authentication](https://github.com/ansh-pachauri/Psypher-Assignment/blob/main/public/images/clerkauth.png)

## Free Tier Events Page
![Free Tier Events](/images/freetier.png)

## Platinum Tier Events Page
![Platinum Tier Events](/images/platinumtier.png)



## 🎯 Usage

### For End Users

1. **Landing Page**: Visit the homepage and click "Book Now"
2. **Authentication**: Sign up or sign in through Clerk
3. **Free Tier Access**: Automatically get access to free events
4. **Browse Events**: View events available for your current tier
5. **Upgrade to Platinum**: Click "Upgrade to Platinum" to access all events
6. **Book Events**: Click "Book Now" on any available event

### For Developers

- **Component Structure**: 
  - `Hero.tsx` - Landing page component
  - `minimal-card-demo.tsx` - Events display component
  - `getEvents.ts` - Server action for fetching events
  - `updatetier.ts` - Server action for updating user tiers

- **Key Routes**:
  - `/` - Landing page (public)
  - `/sign-in` - Authentication page
  - `/bookshow` - Events page (protected)


## 🔧 Customization

### Adding New Events

1. Insert new records into the `events` table
2. Use appropriate tier values: `'free'`, `'silver'`, `'gold'`, `'platinum'`

### Modifying Tiers

1. Update the tier logic in `getEvents.ts`
2. Modify tier icons in `minimal-card-demo.tsx`
3. Update tier upgrade functionality in `updatetier.ts`

### Styling

The application uses Tailwind CSS with custom components from shadcn/ui. Modify the classes in the component files to change the appearance.


---


