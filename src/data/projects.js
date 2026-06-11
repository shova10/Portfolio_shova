import img1 from '../assets/image_civicaid.png'
import img2 from '../assets/image_NID.png'
import img3 from '../assets/image_portfolio.png'
import img4 from '../assets/cashflow.ss.png'

const projectsData = [
  {
    id: '01',
    title: 'CivicAid - Civic Issue Reporting Platform',
    description:
      'CivicAid is a full-stack civic issue reporting platform where citizens can submit, track, and follow local problems like road damage or water outages. I built the entire frontend in React with role-based access for citizens,  and admins, each seeing a tailored dashboard. Features include an interactive Leaflet heatmap for issue density, real-time status notifications, and an admin panel with filtering, sorting, and pagination. Integrated with a Django REST backend via Axios and JWT auth, deployed on Vercel as part of a two-person team.',
    image: img1,
    tags: ['React.js', 'Django REST API', 'Leaflet.js', 'Vercel', 'Git'],
    github: 'https://github.com/shova10/civicaid',
    live: 'https://civicaid-sooty.vercel.app',
  },
  {
    id: '02',
    title: 'Nepal Insight Dashboard',
    description: `Built a single-page dashboard visualizing three Nepal datasets, earthquake activity, air quality, and provincial population in one interface. Implemented an interactive React-Leaflet map with color-coded CircleMarkers scaled by earthquake magnitude, Recharts AreaCharts and BarCharts for AQI and population data, and a light/dark theme system using a MutationObserver to sync Leaflet's map tiles with React's theme state. Overrode Leaflet's default popup CSS for dark mode contrast consistency. date-seeded simulated data for AQI to keep the UI dynamic without a live API.`,
    image: img2,
    tags: ['React.js', 'Tailwind CSS v4', 'Leaflet.js', 'Recharts', 'Vite'],
    github: 'https://github.com/shova10/Nepal-Insight-Dashboard',
    live: 'https://nepal-insight-dashboard.vercel.app/',
  },
  {
    id: '03',
    title: 'Personal Portfolio Website',
    description:
      'Architected a scalable, modular component matrix leveraging a decoupled configuration design layer for data state management. Focused heavily on modern UI/UX principles, featuring a premium dark aesthetic with responsive mobile-first visual layouts.',
    image: img3,
    tags: ['React.js', 'Tailwind CSS v4', 'JavaScript (ES6+)', 'Vite'],
    github: 'https://github.com/shova10/Portfolio_shova',
    live: 'https://portfolio-shova.vercel.app/',
  },
  {
    id: '04',
    title: 'Cashflow ',
    description:
      'CashFlow is a personal finance tracker built with React, Zustand, and Recharts. It lets users log income and expense transactions, visualize monthly trends, and break down spending by category without a backend. Data persists in localStorage across sessions. Designed with a clean dark UI using Tailwind CSS.',
    image: img4,
    tags: [
      'React',
      'Zustand',
      'Recharts',
      'Tailwind CSS',
      'Vite',
      'localStorage',
    ],
    github: 'https://github.com/shova10/Cashflow',
    live: 'https://cashflow-alpha-eight.vercel.app/',
  },
]

export default projectsData
