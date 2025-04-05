# QuickPDF - AI-Powered PDF Summarizer

QuickPDF is a full-stack AI SaaS application that transforms PDFs into beautiful, structured visual summaries similar to Instagram reels. This project is built using a **$0 Tech Stack**, utilizing free-tier services wherever possible. If OpenAI credits run out, we seamlessly switch to **Gemini AI** for free summarization.

## 🚀 Features

- 📝 AI-powered structured summaries with key insights
- 🎨 Interactive summary viewer with progress tracking
- 🔒 Secure file handling and processing
- 🔐 Protected routes and API endpoints
- 💰 Flexible pricing plans (Basic & Pro)
- 🪝 Webhook integration for Stripe events
- 📊 User dashboard to manage summaries
- 📱 Mobile and desktop responsive design
- 🔄 Real-time updates with revalidation
- 🚀 Production-ready deployment
- 🔔 Toast notifications for status updates and error handling
- 📈 Performance optimizations
- 🔍 SEO-friendly summary generation
- 🗂️ Markdown Export for blog post conversion

---

## 🛠️ Tech Stack

### **Core Technologies:**

- **🚀 Next.js 15** - Server-side rendering, routing, and API endpoints using Server Components & Actions
- **⚛️ React 19** - UI development with reusable components
- **🔑 Clerk** - Authentication via Passkeys, GitHub, and Google Sign-in
- **🤖 GPT-4 & Gemini AI** - AI-driven summarization with emoji-enhanced output
- **🧠 Langchain** - PDF parsing, text extraction, and document chunking
- **🎨 ShadCN UI** - Customizable UI components
- **💾 NeonDB (PostgreSQL)** - Serverless database for storing summaries and user data
- **📤 UploadThing** - Secure PDF uploads (up to 32MB)
- **💳 Stripe** - Subscription management and payments
- **🔔 Toast notifications** - Real-time status updates
- **📜 TypeScript** - Static typing for better development experience
- **💅 TailwindCSS 4** - Responsive utility-first styling
- **🚀 Deployment on Vercel**

---

## 📂 Project Structure

```
quickpdf/
│── src/
│   ├── components/      # Reusable UI components
│   ├── pages/           # Next.js pages
│   ├── api/             # API routes
│   ├── hooks/           # Custom React hooks
│   ├── utils/           # Utility functions
│── public/              # Static assets
│── prisma/              # Database schema & migrations
│── styles/              # Global styles
│── .env                 # Environment variables
│── next.config.js       # Next.js configuration
│── tailwind.config.js   # Tailwind configuration
│── README.md            # Project documentation
```

---

## 🚀 Getting Started

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/Varunyadavgithub/QuickPDF.git
cd QuickPDF
```

### 2️⃣ Install Dependencies

```sh
npm install 
```

### 3️⃣ Setup Environment Variables

Create a `.env.local` file and add the required environment variables:

```env
NEXT_PUBLIC_CLERK_FRONTEND_API=your_clerk_api_key
DATABASE_URL=your_database_url
NEXT_PUBLIC_OPENAI_API_KEY=your_openai_key
NEXT_PUBLIC_STRIPE_PUBLIC_KEY=your_stripe_public_key
STRIPE_SECRET_KEY=your_stripe_secret_key
UPLOADTHING_SECRET=your_uploadthing_secret
```

### 4️⃣ Run the Development Server

```sh
npm run dev
```

Your application should now be running on `http://localhost:3000`

---

## 📌 Features Breakdown

### 🏗 **Authentication**

- Secure sign-in using **Clerk** with Google, GitHub, and Passkeys
- Protected routes for user and admin dashboards

### 📤 **PDF Upload & AI Summarization**

- Users can upload PDFs (up to 32MB) using **UploadThing**
- AI-powered summarization using **GPT-4 & Gemini AI**
- **Langchain** for PDF parsing and text extraction

### 📊 **Dashboard & Summary Viewer**

- View and manage all uploaded summaries
- Progress tracking for reading summaries
- Markdown export to convert summaries into blog posts

### 💳 **Payments & Subscription Plans**

- **Stripe integration** for handling payments and subscriptions
- Webhook implementation for managing subscription events

### 🔄 **Real-Time Updates & Performance Optimizations**

- Automatic **revalidation** of summary pages
- **SEO-friendly** summary generation for better visibility

---

## 🌍 Deployment

QuickPDF is deployed on **Vercel** for production-ready hosting. To deploy your own version:

```sh
git push origin main
vercel deploy
```

---

## 🙌 Contributing

Contributions are welcome! To contribute:

1. Fork the repository
2. Create a new branch: `git checkout -b feature-name`
3. Commit your changes: `git commit -m 'Added new feature'`
4. Push to the branch: `git push origin feature-name`
5. Submit a pull request

---

## 📜 License

This project is licensed under the **MIT License**. Feel free to modify and use it for your own projects.

---

## 🚀 Follow for Updates

Stay updated with new features and improvements:

- 📌 [GitHub](https://github.com/Varunyadavgithub/QuickPDF)
- 🔥 [Twitter](https://x.com/varun_yadav01)
- 💬 [LinkedIn](https://www.linkedin.com/in/varunyadavcse25/)

Happy Coding! 🎉🚀
