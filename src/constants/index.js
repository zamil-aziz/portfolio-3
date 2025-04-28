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
    {
        name: 'Testimonials',
        link: '#testimonials',
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
        name: 'Python Developer',
        modelPath: '/models/python-transformed.glb',
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: 'Backend Developer',
        modelPath: '/models/node-transformed.glb',
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: 'Interactive Developer',
        modelPath: '/models/three.js-transformed.glb',
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: 'Project Manager',
        modelPath: '/models/git-svg-transformed.glb',
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review: 'Zamil built responsive and scalable web apps with a strong focus on UI/UX using React and Material-UI. His contributions enhanced project quality and client satisfaction.',
        imgPath: '/images/exp1.jpeg',
        logoPath: '/images/exp1.jpeg',
        title: 'Freelance Fullstack Web Developer',
        date: 'July 2024 - Present',
        responsibilities: [
            'Developed responsive web applications using React and Material-UI.',
            'Collaborated with clients to gather requirements and deliver tailored solutions.',
            'Ensured performance optimization, cross-browser compatibility, and mobile responsiveness.',
        ],
        company: 'Nucleus System Sdn. Bhd.',
    },
    {
        review: 'Zamil handled customer inquiries and reservations professionally, ensuring a positive customer experience through clear communication and problem-solving.',
        imgPath: '/images/exp2.jpg',
        logoPath: '/images/exp2.jpg',
        title: 'Customer Service Associate',
        date: 'July 2023 - May 2024',
        responsibilities: [
            'Managed customer inquiries and reservation processes efficiently.',
            'Provided professional support and maintained high customer satisfaction ratings.',
            'Collaborated with internal teams to resolve client issues promptly.',
        ],
        company: 'Denave Sdn. Bhd.',
    },
    {
        review: 'Zamil demonstrated dedication, teamwork, and strategic thinking as a competitive esports player, participating in national and international tournaments.',
        imgPath: '/images/exp3.png',
        logoPath: '/images/exp3.png',
        title: 'Competitive Esports Player',
        date: '2010 - 2022',
        responsibilities: [
            'Competed in national and international esports tournaments.',
            'Developed teamwork, communication, and strategic decision-making skills.',
            'Built a personal brand and engaged with the gaming community.',
        ],
        company: 'Self-Employed',
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

const testimonials = [
    {
        name: 'Esther Howard',
        mentions: '@estherhoward',
        review: 'I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
        imgPath: '/images/client1.png',
    },
    {
        name: 'Wade Warren',
        mentions: '@wadewarren',
        review: 'Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
        imgPath: '/images/client3.png',
    },
    {
        name: 'Guy Hawkins',
        mentions: '@guyhawkins',
        review: "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: '/images/client2.png',
    },
    {
        name: 'Marvin McKinney',
        mentions: '@marvinmckinney',
        review: 'Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.',
        imgPath: '/images/client5.png',
    },
    {
        name: 'Floyd Miles',
        mentions: '@floydmiles',
        review: 'Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!',
        imgPath: '/images/client4.png',
    },
    {
        name: 'Albert Flores',
        mentions: '@albertflores',
        review: 'Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.',
        imgPath: '/images/client6.png',
    },
];

const socialImgs = [
    {
        name: 'insta',
        url: 'https://www.instagram.com/',
        imgPath: '/images/insta.png',
    },
    {
        name: 'fb',
        url: 'https://www.facebook.com/',
        imgPath: '/images/fb.png',
    },
    {
        name: 'x',
        url: 'https://www.x.com/',
        imgPath: '/images/x.png',
    },
    {
        name: 'linkedin',
        url: 'https://www.linkedin.com/',
        imgPath: '/images/linkedin.png',
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};
