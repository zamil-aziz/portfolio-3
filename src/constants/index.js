// Original data from index.js
const navLinks = [
    {
        name: 'Work',
        link: '#work',
    },
    {
        name: 'Experience',
        link: '#experience',
    },
    {
        name: 'Skills',
        link: '#skills',
    },
];

const words = [
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/designs.svg' },
    { text: 'Code', imgPath: '/images/code.svg' },
    { text: 'Ideas', imgPath: '/images/ideas.svg' },
    { text: 'Concepts', imgPath: '/images/concepts.svg' },
    { text: 'Designs', imgPath: '/images/designs.svg' },
    { text: 'Code', imgPath: '/images/code.svg' },
];

const counterItems = [
    { value: 15, suffix: '+', label: 'Years of Experience' },
    { value: 200, suffix: '+', label: 'Satisfied Clients' },
    { value: 108, suffix: '+', label: 'Completed Projects' },
    { value: 90, suffix: '%', label: 'Client Retention Rate' },
];

const logoIconsList = [
    {
        imgPath: '/images/logos/company-logo-1.png',
    },
    {
        imgPath: '/images/logos/company-logo-2.png',
    },
    {
        imgPath: '/images/logos/company-logo-3.png',
    },
    {
        imgPath: '/images/logos/company-logo-4.png',
    },
    {
        imgPath: '/images/logos/company-logo-5.png',
    },
    {
        imgPath: '/images/logos/company-logo-6.png',
    },
    {
        imgPath: '/images/logos/company-logo-7.png',
    },
    {
        imgPath: '/images/logos/company-logo-8.png',
    },
    {
        imgPath: '/images/logos/company-logo-9.png',
    },
    {
        imgPath: '/images/logos/company-logo-10.png',
    },
];

const abilities = [
    {
        imgPath: '/images/seo.png',
        title: 'Quality Focus',
        desc: 'Delivering high-quality results while maintaining attention to every detail.',
    },
    {
        imgPath: '/images/chat.png',
        title: 'Reliable Communication',
        desc: 'Keeping you updated at every step to ensure transparency and clarity.',
    },
    {
        imgPath: '/images/time.png',
        title: 'On-Time Delivery',
        desc: 'Making sure projects are completed on schedule, with quality & attention to detail.',
    },
];

const techStackImgs = [
    {
        name: 'React Developer',
        imgPath: '/images/logos/react.png',
    },
    {
        name: 'Python Developer',
        imgPath: '/images/logos/python.svg',
    },
    {
        name: 'Backend Developer',
        imgPath: '/images/logos/node.png',
    },
    {
        name: 'Interactive Developer',
        imgPath: '/images/logos/three.png',
    },
    {
        name: 'Project Manager',
        imgPath: '/images/logos/git.svg',
    },
];

const techStackIcons = [
    {
        name: 'React Developer',
        modelPath: '/models/react_logo-transformed.glb',
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: 'C# Developer',
        modelPath: '/models/c.glb',
        scale: 0.26,
        rotation: [0, 0, 0],
    },
    {
        name: 'Backend Developer',
        modelPath: '/models/node-transformed.glb',
        scale: 2.1,
        rotation: [0, -Math.PI / 3, 0],
    },
    {
        name: '3D Web Developer',
        modelPath: '/models/three.js-transformed.glb',
        scale: 0.21,
        rotation: [0, 0, 0],
    },
    {
        name: 'Git Workflow Expert',
        modelPath: '/models/git-svg-transformed.glb',
        scale: 0.2,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        lessons:
            "At Nucleus System Sdn. Bhd., I've expanded my full-stack capabilities using React, Next.js. I've also gained hands-on experience with CI/CD, API development, secure authentication (JWT, Keycloak), and Agile workflows.",
        imgPath: '/images/exp1.jpeg',
        logoPath: '/images/exp1.jpeg',
        title: 'Full Stack Web Developer',
        company: 'Nucleus System Sdn. Bhd.',
        date: 'April 2024 – Present',
        responsibilities: [
            'Built and maintained full-stack web applications using React/Next.js.',
            'Created and integrated RESTful and GraphQL APIs for scalable solutions.',
            'Implemented authentication and authorization systems using JWT and Keycloak.',
            'Implemented database operations and data management within the Next.js framework.',
            'Collaborated in Agile sprints and contributed to CI/CD pipeline deployments.',
        ],
    },
    {
        lessons:
            'Learned how to communicate effectively and professionally with a wide range of customers. I also developed strong problem-solving skills by handling challenging inquiries and complaints, and gained valuable experience working closely with different teams to deliver seamless service.',

        imgPath: '/images/exp2.jpg',
        logoPath: '/images/exp2.jpg',
        title: 'Customer Service Executive',
        company: 'Denave Sdn. Bhd.',
        date: 'July 2022 - April 2024',
        responsibilities: [
            'Managed customer inquiries and complaints with efficiency and empathy.',
            'Collaborated with cross-functional teams to ensure smooth service delivery.',
            'Maintained detailed records of customer interactions to support service improvements.',
        ],
    },
    {
        lessons:
            'Developed strong strategic thinking, teamwork, and adaptability by competing at national and international esports tournaments. These high-pressure environments helped sharpen my decision-making and leadership skills, which now support my work in tech and development.',
        imgPath: '/images/exp3.png',
        logoPath: '/images/exp3.png',
        title: 'Professional Esports Competitor',
        company: 'Various Teams',
        date: '2010 – 2022',
        responsibilities: [
            'Competed in national and international esports tournaments including PUBG, DOTA 2, StarCraft 2 and HearthStone.',
            'Achieved 2nd place at Malaysia AOC Battle of the Visionaries.',
            'Developed advanced problem-solving and strategic thinking skills under pressure.',
            'Worked closely with team members to analyze gameplay, devise tactics, and execute coordinated strategies.',
            'Translated esports-honed discipline and focus into software development and project execution.',
        ],
    },
];

const expLogos = [
    {
        name: 'logo1',
        imgPath: '/images/logo1.png',
    },
    {
        name: 'logo2',
        imgPath: '/images/logo2.png',
    },
    {
        name: 'logo3',
        imgPath: '/images/logo3.png',
    },
];

const socialImgs = [
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/zamil-aziz/',
        imgPath: '/images/linkedin.png',
    },
    {
        name: 'github',
        url: 'https://github.com/zamil-aziz/',
        imgPath: '/images/github.png',
    },
    {
        name: 'x',
        url: 'https://x.com/zamilaziz2/',
        imgPath: '/images/x.png',
    },
    {
        name: 'strava',
        url: 'https://www.strava.com/athletes/112389118/',
        imgPath: '/images/strava.png',
    },
];

// New data extracted from ShowcaseSection
const projectsData = [
    {
        id: 1,
        title: 'Eventlah',
        description:
            'A comprehensive event management portal that enables merchants, administrators, and agents to efficiently manage events, ticket sales, and performance tracking. The portal features tailored user interfaces, real-time analytics, QR ticket scanning, and customizable event pages, all within a modern React-based interface. Working closely with a senior developer, I played a significant role in implementing core functionalities and delivering a high-quality product.',
        imagePath: '/images/project1.png',
        isFeatured: true,
    },
    {
        id: 2,
        title: 'Photobooth App',
        description:
            'A fully client-side kiosk photobooth app that enables users to capture, edit, and enhance photos with fun filters and effects. Optimized for touchscreens and event use, it runs entirely in the browser without the need for a backend, ensuring fast and offline-friendly performance.',

        imagePath: '/images/project2.png',
        isFeatured: false,
    },
    {
        id: 3,
        title: 'MyDuitApp',
        description:
            'A modern PWA expense tracker app that helps users log and manage their spending with ease. Built with service workers for offline support and a seamless mobile experience, it uses Supabase and Prisma for real-time data syncing and secure backend storage.',
        imagePath: '/images/project3.png',
        isFeatured: false,
    },
    {
        id: 4,
        title: 'Milbnb',
        description:
            'An Airbnb-inspired full-stack application with secure user authentication, property listings with image uploads, and real-time bookings. Built with a modern tech stack, it leverages server-side rendering and database management for a seamless user experience.',
        imagePath: '/images/project4.png',
        isFeatured: false,
    },
    {
        id: 5,
        title: 'Mingo',
        description:
            'A Duolingo-inspired web application featuring progress tracking, interactive lessons, and subscription handling via Stripe. Designed with a focus on state management and database integration, this project delivers a seamless learning experience with a modern and responsive UI.',
        imagePath: '/images/project5.png',
        isFeatured: false,
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    projectsData,
};
