import {
  AlertTriangle,
  ArrowRight,
  Check,
  ChevronLeft,
  ChevronRight,
  CircuitBoardIcon,
  Command,
  CreditCard,
  DumbbellIcon,
  File,
  FileText,
  GoalIcon,
  HelpCircle,
  Image,
  Laptop,
  LayoutDashboardIcon,
  Loader2,
  LogIn,
  LucideIcon,
  LucideProps,
  LucideSalad,
  Moon,
  MoreVertical,
  Pizza,
  Plus,
  Settings,
  SunDim,
  SunMedium,
  Sunrise,
  Trash,
  Twitter,
  User,
  User2Icon,
  UserX2Icon,
  X,
} from "lucide-react";

export type Icon = LucideIcon;

export const Icons = {
  dashboard: LayoutDashboardIcon,
  logo: Command,
  login: LogIn,
  close: X,
  profile: User2Icon,
  spinner: Loader2,
  kanban: CircuitBoardIcon,
  chevronLeft: ChevronLeft,
  chevronRight: ChevronRight,
  trash: Trash,
  employee: UserX2Icon,
  post: FileText,
  page: File,
  media: Image,
  settings: Settings,
  billing: CreditCard,
  ellipsis: MoreVertical,
  add: Plus,
  warning: AlertTriangle,
  user: User,
  arrowRight: ArrowRight,
  help: HelpCircle,
  pizza: Pizza,
  sun: SunMedium,
  moon: Moon,
  laptop: Laptop,
  gitHub: ({ ...props }: LucideProps) => (
    <svg
      aria-hidden="true"
      focusable="false"
      data-prefix="fab"
      data-icon="github"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 496 512"
      {...props}
    >
      <path
        fill="currentColor"
        d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3 .3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5 .3-6.2 2.3zm44.2-1.7c-2.9 .7-4.9 2.6-4.6 4.9 .3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3 .7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3 .3 2.9 2.3 3.9 1.6 1 3.6 .7 4.3-.7 .7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3 .7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3 .7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
      ></path>
    </svg>
  ),
  twitter: Twitter,
  check: Check,
  google: ({ ...props }: LucideProps) => (
    <svg width="33" height="32" viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M28.3266 16.2764C28.3266 15.4607 28.2604 14.6406 28.1193 13.8381H16.8005V18.459H23.2823C23.0133 19.9494 22.1491 21.2678 20.8836 22.1056V25.1039H24.7506C27.0214 23.0139 28.3266 19.9273 28.3266 16.2764Z" fill="#4285F4" />
      <path d="M16.8005 28.0008C20.037 28.0008 22.7664 26.9382 24.755 25.1039L20.888 22.1055C19.8121 22.8375 18.4232 23.252 16.8049 23.252C13.6743 23.252 11.0199 21.1399 10.0675 18.3003H6.07703V21.3912C8.11414 25.4434 12.2633 28.0008 16.8005 28.0008Z" fill="#34A853" />
      <path d="M10.0631 18.3003C9.56042 16.8099 9.56042 15.1961 10.0631 13.7058V10.6148H6.07704C4.37504 14.0056 4.37503 18.0005 6.07703 21.3912L10.0631 18.3003Z" fill="#FBBC04" />
      <path d="M16.8005 8.74966C18.5114 8.7232 20.1649 9.36697 21.4039 10.5487L24.8299 7.12262C22.6605 5.0855 19.7812 3.96553 16.8005 4.00081C12.2633 4.00081 8.11416 6.55824 6.07704 10.6148L10.0631 13.7058C11.0111 10.8617 13.6699 8.74966 16.8005 8.74966Z" fill="#EA4335" />
    </svg>

  ),
  dumbells: DumbbellIcon,
  food: LucideSalad,
  goals: GoalIcon,
  sundim: SunDim,
  sunrise: Sunrise,
  
};
