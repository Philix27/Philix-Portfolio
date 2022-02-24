import  Mim  from '../../../pages/project/mim';
import  Home  from '../../../pages/index';

export const projects = [
  {
    title: 'Get2geda',
    group: "mobile",
    detailsPage: "/project/g2g",
    githubLink: "",
    description: "An android app for Delta State University Students, (Nigeria). Contains an e-commerce section and a news section ",
    image: '/images/project/g2g.jpg',
    tags: ['Dart', 'Flutter', 'Firebase', ],
    source: 'https://play.google.com/store/apps/details?id=com.philix.delsu_connect',
    visit: 'https://play.google.com/store/apps/details?id=com.philix.delsu_connect',
    id: 0,
  },
  {
    title: 'Mims',
    group: "mobile",
         detailsPage: "/project/mim",
    description:"Mobile Inventory Management System. An android app to track inventory of a retail shop.",
    image: '/images/project/mims.jpg',
    tags: ['Dart', 'Flutter', 'Firebase', ],
    source: '#',
    visit: '#',
    githubLink: "",
    id: 1,
  },
  {
    title: 'Rxedu - App',
    group: "mobile",
    detailsPage: "/project/rxedu",
    description: "An Educaational App for Pharmacists preparing for various exams. Contains MCQs, and related materials need to ace pharmaceutical exams.",
      image: '/images/project/rxedu.jpg',
      tags: ['Dart', 'Flutter', 'Firebase', ],
    source: 'https://play.google.com/store/apps/details?id=com.philix.rxedu',
    visit: 'https://play.google.com/store/apps/details?id=com.philix.rxedu',
    githubLink: "",
    id: 2,
  },
  {
    title: 'Rxedu - Website',
     detailsPage: "/project/rxeduweb",
    description: "An Educaational Website (For the app) for Pharmacists preparing for various exams. Contains MCQs, and related materials need to ace pharmaceutical exams.",
    group: "web",
      image: '/images/project/rxedu_web.jpg',
      tags: ['React', 'Next.js', 'Node js',],
    source: 'https://rxedu.online/',
    visit: 'https://rxedu.online/',
    githubLink: "",
    id: 3,
  },
  {
    title: 'Bioplus',
    group: "mobile",
     detailsPage: "/project/bioplus",
    description: "A mobile app for selling and buying otc pharmaceuticals ",
    image: '/images/project/bioplus.jpg',
    tags: ['Dart', 'Flutter', 'Firebase', ],
    source: '#',
    visit: '#',
    githubLink: "",
    id: 4,
  },
  {
    title: 'BTB',
    group: "mobile",
     detailsPage: "/project/btb",
    description: "A Binance Cryptocurrency trading bot ",
    image: '/images/project/btb.jpg',
    tags: ['Dart', 'Python',  ],
    source: '#',
    visit: '#',
    githubLink: "",
    id: 5,
  },
  {
    title: 'Portfolio',
    group: "web",
     detailsPage: '/',
    description: "My personal website for detailed explanation of all my projects.",
    image: '/images/project/portfolio.jpg',
    tags: ['Next.js',],
    source: 'www.philix.tech',
    visit: 'www.philix.tech',
    githubLink: "",
    id: 6,
  },
];
