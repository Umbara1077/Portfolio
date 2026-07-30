# Dante Corso – Personal Portfolio Website

Welcome to the source code for my personal portfolio site: [https://dantecorso.com](https://dantecorso.com)

This site highlights my services, skills, and project experience as a full stack developer with expertise in web, mobile, and cybersecurity solutions.

---

## 🌐 Live Site

https://dantecorso.com

## 📁 Project Structure

```
index.html                   # Single HTML entry point for the React app
vite.config.js               # Vite build configuration

src/
├── main.jsx                 # App bootstrap (router + theme provider)
├── App.jsx                  # Route table for the extensionless React pages
├── theme.jsx                # Light/dark theme state and DOM application
├── navigation.js            # Navigation link sets used by the header/drawer
├── components/              # Header, mobile drawer, footers, shared pieces
├── hooks/                   # Per-page <style>, meta tag, and stylesheet hooks
├── lib/                     # Firebase and EmailJS integration
└── pages/                   # One component (plus its CSS) per page
    ├── NotFound.jsx         # Custom 404 error page
    ├── About.jsx            # "About Me" page with background info
    ├── Admin.jsx            # Admin portal for managing backend content
    ├── Connect.jsx          # Linktree-style connection page
    ├── Contact.jsx          # Contact page for visitor inquiries
    ├── CyberSecurity.jsx    # Overview of cybersecurity services
    ├── Home.jsx             # Main landing page (Home)
    ├── JobRequest.jsx       # Job request submission form
    ├── Login.jsx            # Admin login for secure access
    ├── MobileDevelopment.jsx# Mobile application development services
    ├── Portfolio.jsx        # Portfolio of past projects and work
    ├── Resume.jsx           # Résumé with tabbed sections
    ├── Skills.jsx           # List of technical and soft skills
    └── WebDevelopment.jsx   # Web development service overview

public/                      # Copied to the build output as-is
├── css/styles.css           # Global stylesheet
├── images/                  # Image assets (logo, icons, etc.)
├── pdf/                     # Downloadable résumé
├── videos/                  # Video assets (e.g. service showcases)
├── precisionpixel.apk       # APK file for the Precision Pixel Android app
├── robots.txt               # SEO config for search engine crawlers
└── sitemap.xml              # Sitemap for site indexing
```

## 🛠 Local Development

```bash
npm install
npm run dev      # Vite dev server
npm run build    # Production build into dist/
npm run preview  # Serve the production build locally
```

Firebase Hosting serves `dist/` and rewrites every unknown path to
`index.html` so extensionless routes such as `/about` work on a direct visit or refresh.


## ✨ Features

- Mobile-friendly, responsive design
- Downloadable Android app (Precision Pixel)
- Admin login interface (`/login` → `/admin`)
- Multiple service pages (web, mobile, cybersecurity)
- Live contact + job request forms
- SEO support with sitemap and robots.txt
- Structured, clean codebase for easy updates

---

## ⚙️ Tech Stack

- React 19 with React Router, built by Vite
- Firebase (Auth, Firestore, Storage) and EmailJS
- Static hosting (e.g. Firebase Hosting, GitHub Pages)
- Designed for tablet + desktop UX
- Lightweight frontend with quick load times

---

## 📩 Contact

To get in touch, visit the contact page:  
https://dantecorso.com/contact  
or use the job request form:  
https://dantecorso.com/job-request

---

## 🔒 Admin Access

- Admin Panel: `/admin`
- Login Page: `/login`
- Requires backend integration to secure access (not included in this repo)

---

## 📦 APK Download

You can download the Android app directly from:  
[`precisionpixel.apk`](https://dantecorso.com/precisionpixel.apk)

---

## 🧑‍💻 Maintained by

**Dante Corso**  
Full Stack Engineer  
https://dantecorso.com
