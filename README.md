# 🧮 Splitzy – Smart Expense Splitter

Splitzy is a modern expense-splitting app built with [Next.js](w), [Convex](w) (serverless backend), [Clerk](w) (authentication), and [Resend](w) (email API). Designed for seamless group payments, bill splitting, and shared expenses.

---

----DEPLOYED LINK : https://splitzy-nu.vercel.app/

## 🚀 Tech Stack

- **Frontend**: Next.js
- **Backend**: Convex
- **Auth**: Clerk.dev


---

## 🛠️ Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/vinnnnay/splitzy.git
cd splitzy




# Convex Configuration
CONVEX_DEPLOYMENT=
NEXT_PUBLIC_CONVEX_URL=

# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

CLERK_JWT_ISSUER_DOMAIN=

# Resend Email Service
RESEND_API_KEY=



npx convex dev      # Starts the Convex backend
npm run dev         # Starts the Next.js frontend





/app           → Next.js app directory
/components    → UI components
/convex        → Convex functions and schema
/lib           → Helper functions
/public        → Static files



