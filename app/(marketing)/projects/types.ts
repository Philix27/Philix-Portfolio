type ICategory = 'BLOCKCHAIN' | 'GAME' | 'FINANCE' | 'PRODUCTIVITY' | 'DEVELOPER' | 'EDUCATION';
type IDevice = 'MOBILE' | 'WEB' | 'DESKTOP' | 'PWA';
type IStatus = 'ACTIVE' | 'NON_ACTIVE';
type ILang = 'TYPESCRIPT' | 'JAVASCRIPT' | 'SOLIDITY' | 'RUST' | 'GO' | 'DART';
type ITags =
  | 'NEXT.JS'
  | 'EXPRESS.JS'
  | 'TAILWIND'
  | 'REACT NATIVE'
  | 'SHADCN'
  | 'NEST.JS'
  | 'HONO.JS'
  | 'MONGO_DB'
  | 'POSTGRES'
  | 'WAGMI'
  | 'WEB3AUTH'
  | 'TURBO-REPO'
  | 'ETHERS.JS'
  | 'PRISMA'
  | 'HACKATHON'
  | 'FLUTTER'
  | 'DRIZZLE';

export type IProject = {
  id: number;
  title: string;
  subtitle: string;
  sourceCode: string;
  img: string;
  liveLink: string;
  lastContribution: string;
  dateStarted: string;
  language: ILang[];
  tags: ITags[];
  status: IStatus;
  categories: ICategory[];
  devices: IDevice[];
};
