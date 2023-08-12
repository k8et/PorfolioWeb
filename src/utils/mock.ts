// @ts-ignore
import Bank from '../assets/img/Bank.png'
// @ts-ignore
import Stuff from '../assets/img/Stuff.png'
// @ts-ignore
import Medical from '../assets/img/Medical.png'
// @ts-ignore
import Crypto from '../assets/img/Crypto.png'
// @ts-ignore
import Rick from '../assets/img/Rick.png'
// @ts-ignore
import Star from '../assets/img/Star.png'
export const mockNavigationItems = [
    '#home',
    '#about',
    '#skills',
    '#qualification',
    '#portfolio',
    '#contact',
];
export const tabContent = [
    {
        id: 1,
        category: 'education',
        title: "HTU 'KHPI'",
        subtitle: "Energy / computer engineering",
        date: "10/2020 — present",
    },
    {
        id: 2,
        category: 'education',
        title: "Frontend",
        subtitle: "JS, React, TS, HTML, CSS and other",
        date: "01/2022 — present",
    },
    {
        id: 3,
        category: 'experience',
        title: "ProCoders",
        subtitle: "Trainee Frontend Developer",
        date: "02/2022 - 05/2022",
    },
    {
        id: 4,
        category: 'experience',
        title: "Belkins Inc",
        subtitle: "React Developer",
        date: "06/2022-01/2023",
    }
];
export const programmingData = [
    {name: 'HTML', level: 'Advanced'},
    {name: 'CSS', level: 'Intermediate'},
    {name: 'SASS', level: 'Intermediate'},
    {name: 'JavaScript', level: 'Upper-Intermediate'},
    {name: 'TypeScript', level: 'Intermediate'},
    {name: 'Tailwind', level: 'Intermediate'},
    {name: 'Figma', level: 'Intermediate'},
    {name: 'Git/GitHub', level: 'Intermediate'},
];
export const toolsData = [
    {name: 'Firebase', level: 'Intermediate'},
    {name: 'Webpack', level: 'Intermediate'},
    {name: 'Parcel', level: 'Intermediate'},
    {name: 'React Router', level: 'Upper-Intermediate'},
    {name: 'Axios', level: 'Intermediate'},
    {name: 'React', level: 'Advanced'},
    {name: 'Redux', level: 'Beginner'},
    {name: 'Mobx', level: 'Intermediate'},
];
export const portfolioData = [
    {
        category: 'web',
        imageSrc: Bank,
        title: "Bank",
        DemoLink: "https://bank-57867.web.app/",
        GitLink: "https://github.com/k8et/Loayal-Bank"
    },
    {
        category: 'web',
        imageSrc: Stuff,
        title: "Stuff",
        DemoLink: "https://main--chic-caramel-7afa4b.netlify.app/",
        GitLink: "https://github.com/k8et/Stuff-Shop"
    }, {
        category: 'web',
        imageSrc: Medical,
        title: "Medical",
        DemoLink: "https://my-medical-project-2fab3.web.app/",
        GitLink: "https://github.com/k8et/Medical"
    },
    {
        category: 'web',
        imageSrc: Crypto,
        title: "Crypto",
        DemoLink: "https://exquisite-chaja-caffc6.netlify.app/",
        GitLink: "https://github.com/k8et/Crypto"
    },
    {
        category: 'design',
        imageSrc: Star,
        title: "Star Wars",
        DemoLink: "https://main--musical-gelato-71980a.netlify.app/",
        GitLink: "https://github.com/k8et/Star-Wars"
    },
    {
        category: 'design',
        imageSrc: Rick,
        title: "Rick and Morty",
        DemoLink: "https://main--precious-kulfi-46535f.netlify.app/",
        GitLink: "https://github.com/k8et/Rick-and-Morty"
    },
]
export const portfolioTabData = [
    {
        button: 'all',
        title: 'All'
    },
    {
        button: 'web',
        title: 'Web'
    },
    {
        button: 'design',
        title: 'Design'
    },
]