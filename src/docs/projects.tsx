import APCAIMS from "./projects/apcaims.mdx";
import APCEIMS from "./projects/apceims.mdx";
import Get2geda from "./projects/get2geda.mdx";
import Pims from "./projects/mim.mdx";
import RxeduApp from "./projects/rxedu_app.mdx";
import RxeduWeb from "./projects/rxeduweb.mdx";
import { IProjectPost } from "./types";

export const AppProjects: Array<IProjectPost> = [
  {
    id: "1",
    title: "APCAIMS",
    subtitle: "",
    cover_image: "/images/project/aims.png",
    category: "web",
    start_date: "27th October, 2023",
    comp: <APCAIMS />,
  },
  {
    id: "2",
    title: "APC Election Management System",
    subtitle: "Continuation of the ultimate rust backend",
    cover_image: "/images/project/sit_room.png",
    category: "web",
    start_date: "15th November,  2023",
    comp: <APCEIMS />,
  },
  {
    id: "3",
    title: "Get2geda",
    subtitle: "Socail app for students in DELSU",
    cover_image: "/images/project/g2g.jpg",
    category: "mobile",
    start_date: "15th November,  2023",
    comp: <Get2geda />,
  },
  {
    id: "4",
    title: "Pharmacy Inventory Management System",
    subtitle: "Continuation of the ultimate rust backend",
    cover_image: "/images/project/mims.jpg",
    category: "mobile",
    start_date: "15th November,  2023",
    comp: <Pims />,
  },
  {
    id: "5",
    title: "Rxedu Mobile app",
    subtitle: "A medical app for medics preparing for various exams",
    cover_image: "/images/project/rxedu.jpg",
    category: "mobile",
    start_date: "15th November,  2023",
    comp: <RxeduApp />,
  },
  {
    id: "6",
    title: "Rxedu Web",
    subtitle: "Continuation of the ultimate rust backend",
    cover_image: "/images/project/rxedu_web.jpg",
    category: "web",
    start_date: "15th November,  2023",
    comp: <RxeduWeb />,
  },
];
