import { Icons } from "@/components/icons";
import { NavItem, SidebarNavItem } from "@/types";

export type User = {
  id: number;
  name: string;
  company: string;
  role: string;
  verified: boolean;
  status: string;
};
export const users: User[] = [
  {
    id: 1,
    name: "Candice Schiner",
    company: "Dell",
    role: "Frontend Developer",
    verified: false,
    status: "Active",
  },
  {
    id: 2,
    name: "John Doe",
    company: "TechCorp",
    role: "Backend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 3,
    name: "Alice Johnson",
    company: "WebTech",
    role: "UI Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 4,
    name: "David Smith",
    company: "Innovate Inc.",
    role: "Fullstack Developer",
    verified: false,
    status: "Inactive",
  },
  {
    id: 5,
    name: "Emma Wilson",
    company: "TechGuru",
    role: "Product Manager",
    verified: true,
    status: "Active",
  },
  {
    id: 6,
    name: "James Brown",
    company: "CodeGenius",
    role: "QA Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 7,
    name: "Laura White",
    company: "SoftWorks",
    role: "UX Designer",
    verified: true,
    status: "Active",
  },
  {
    id: 8,
    name: "Michael Lee",
    company: "DevCraft",
    role: "DevOps Engineer",
    verified: false,
    status: "Active",
  },
  {
    id: 9,
    name: "Olivia Green",
    company: "WebSolutions",
    role: "Frontend Developer",
    verified: true,
    status: "Active",
  },
  {
    id: 10,
    name: "Robert Taylor",
    company: "DataTech",
    role: "Data Analyst",
    verified: false,
    status: "Active",
  },
];


export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  gender: string;
  date_of_birth: string; // Consider using a proper date type if possible
  street: string;
  city: string;
  state: string;
  country: string;
  zipcode: string;
  longitude?: number; // Optional field
  latitude?: number; // Optional field
  job: string;
  profile_picture?: string | null; // Profile picture can be a string (URL) or null (if no picture)
};

export const navItems: NavItem[] = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: "dashboard",
    label: "Dashboard",
  },
  {
    title: "Workouts",
    href: "/dashboard/workouts",
    icon: "dumbells",
    label: "workouts",
  },
  {
    title: "Meal Plans",
    href: "/dashboard/meal-plans",
    icon: "food",
    label: "meal-plans",
  },
  {
    title: "Profile",
    href: "/dashboard/profile",
    icon: "profile",
    label: "profile",
  },
  {
    title: "Goals",
    href: "/dashboard/goals",
    icon: "goals",
    label: "goals",
  },
  {
    title: "Logout",
    href: "/",
    icon: "login",
    label: "login",
  },
];


export const sampleMeals = [
  {
    id: 1,
    name: "Grilled Chicken Salad",
    description: "A delicious and healthy salad with grilled chicken",
    image: "/images/salad.jpg",
    calories: 350,
    protein: 25,
    carbs: 15,
    fat: 20,
    ingredients: [
      "Grilled chicken breast",
      "Mixed greens",
      "Cherry tomatoes",
      "Cucumber",
      "Red onion",
      "Feta cheese",
      "Balsamic vinaigrette",
    ],
    recipe: `1. Season the chicken breast with salt, pepper, and olive oil.
    2. Grill the chicken breast until fully cooked.
    3. In a large bowl, combine the mixed greens, cherry tomatoes, cucumber, red onion, and feta cheese
    4. Slice the grilled chicken breast and place on top of the salad
    5. Drizzle with balsamic vinaigrette and serve`,
  },
  {
    id: 2,
    name: "Avocado Toast",
    description: "A simple and delicious avocado toast recipe",
    image: "/images/salad.jpg",
    calories: 250,
    protein: 10,
    carbs: 20,
    fat: 15,
    ingredients: [
      "Whole grain bread",
      "Avocado",
      "Cherry tomatoes",
      "Red pepper flakes",
      "Lemon juice",
      "Salt and pepper",
    ],
    recipe: `1. Toast the whole grain bread until golden brown
    2. Mash the avocado with lemon juice, salt, and pepper
    3. Spread the mashed avocado on the toast
    4. Top with sliced cherry tomatoes and red pepper flakes
    5. Serve immediately`,
  },
  {
    id: 3,
    name: "Greek Yogurt Parfait",
    description: "A healthy and delicious greek yogurt parfait",
    image: "/images/salad.jpg",
    calories: 200,
    protein: 15,
    carbs: 25,
    fat: 10,
    ingredients: [
      "Greek yogurt",
      "Granola",
      "Mixed berries",
      "Honey",
    ],
    recipe: `1. In a glass or bowl, layer greek yogurt, granola, mixed berries, and honey
    2. Repeat the layers until the glass or bowl is full
    3. Serve immediately`,
  },
  
]


export const sampleWorkouts = [
  {
    id: 1,
    name: "Bench Press",
    equipment: true,
    users: 1000,
    level: "Advanced",
    sets: 4,
  },
  {
    "id": 2,
    "name": "Squats",
    "equipment": true,
    "users": 1500,
    "level": "Intermediate",
    "sets": 3
  },
  {
    "id": 3,
    "name": "Deadlift",
    "equipment": true,
    "users": 1200,
    "level": "Advanced",
    "sets": 4
  },
  
];




export const countries = [
  {"code": "AQ", "code3": "ATA", "name": "Antarctica", "id": "010"},
  {"code": "AU", "code3": "AUS", "name": "Australia", "id": "036"},
  {"code": "BR", "code3": "BRA", "name": "Brazil", "id": "076"},
  {"code": "FR", "code3": "FRA", "name": "France", "id": "250"},
  {"code": "IN", "code3": "IND", "name": "India", "id": "356"},
  {"code": "AE", "code3": "ARE", "name": "United Arab Emirates (UAE)", "id": "784"},
	{"code": "GB", "code3": "GBR", "name": "United Kingdom of Great Britain and Northern Ireland (UK)", "id": "826"},
	{"code": "US", "code3": "USA", "name": "United States of America (USA)", "id": "840"},
	
]