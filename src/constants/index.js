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
        date: 'June 2022 – December 2022',
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
            'Zamil consistently demonstrated professionalism and excellent interpersonal skills while handling customer service operations. His ability to resolve issues promptly made him a valuable asset to the team.',
        imgPath: '/images/exp2.jpg',
        logoPath: '/images/exp2.jpg',
        title: 'Customer Service Executive',
        date: 'June 2020 - December 2023',
        responsibilities: [
            'Managed customer inquiries and complaints with efficiency and empathy.',
            'Collaborated with cross-functional teams to ensure smooth service delivery.',
            'Maintained detailed records of customer interactions to support service improvements.',
        ],
    },
    {
        lessons:
            'Zamil’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.',
        imgPath: '/images/exp3.png',
        logoPath: '/images/exp3.png',
        title: 'React Native Developer',
        date: 'March 2019 - May 2020',
        responsibilities: [
            "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
            'Improved app performance and user experience through code optimization and testing.',
            'Coordinated with the product team to implement features based on feedback.',
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
};
