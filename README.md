# Personal Portfolio Website 🚀

A modern, responsive, and single-page personal portfolio built with React and Tailwind CSS. This website showcases my background, professional skills, featured engineering projects, and handles direct user inquiries via an integrated contact channel.

---

## ✨ Key Features

* ⚡ Single-Page Architecture: Smooth scrolling experience transitioning through curated sections.
* 📱 Fully Responsive Design: Clean layout optimization across small mobile screens up to high-resolution desktop monitors.
* 🎨 Custom Color Theme: Designed around a specialized typography design utilizing custom canvas backgrounds and eye-catching selection accent highlights.
* 🛠️ Component-Driven: Built modularly with independent, reusable React components for effortless maintenance.

---

## 📂 Section Layout Breakdown

The entry point of the app (`App.jsx`) structure maps to the following modular sections:

* `Navbar`: Persistent top header navigation with links to jump directly to specific main sections.
* `Hero`: Above-the-fold introductory greeting screen featuring a strong call-to-action (CTA).
* `About`: A professional deep-dive detailing my journey, engineering philosophy, and background context.
* `Projects`: Grid showcase highlighting featured technical deployments with descriptions, live links, and codebase source repositories.
* `Skills`: Interactive, structured layout highlighting technical competencies, languages, and core framework proficiencies.
* `Contact`: Interactive user message submission form for networking, hiring managers, or collaborative inquiries.
* `Footer`: Bottom closing metadata panel displaying copyright text and social profile links (GitHub, LinkedIn, Twitter).

---

## 🛠️ Tech Stack

* Core Library: React 
* Styling Framework: Tailwind CSS
* Typography: Tailwind Sans Font Stack
* Icons (Optional): React Icons / Lucide React

---

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/your-portfolio-repo.git](https://github.com/your-username/your-portfolio-repo.git)
   cd your-portfolio-repo


Install dependency packages:
Bash
npm install

Launch the local development environment server:
Bash
npm run dev
Note: If using standard Create React App (CRA), use npm start instead.

Build the site for deployment production:
Bash
npm run build


🎨 Customizing Styles
The system-wide base layout uses utility tokens configured in your project's tailwind.config.js file:

bg-canvas: Controls the deep background canvas color layer.

selection:bg-accent: Defines the custom selection highlights color when users click-and-drag text elements.
