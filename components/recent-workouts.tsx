import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Icons } from "./icons";

const recentWorkouts = [
  {
    name: "Evening Workout",
    time: "6:00 PM",
    calories: "200",
    workoutTime: "30 mins",
    icon: "sundim"
  },
  {
    name: "Morning Workout",
    time: "6:00 AM",
    calories: "300",
    workoutTime: "45 mins",
    icon: "sunrise"
  },
  {
    name: "Afternoon Workout",
    time: "1:00 PM",
    calories: "250",
    workoutTime: "35 mins",
    icon:"sun"
  },
  {
    name: "Evening Workout",
    time: "6:00 PM",
    calories: "200",
    workoutTime: "30 mins",
    icon: "sundim"
  },
  {
    name: "Midnight Workout",
    time: "12:00 AM",
    calories: "400",
    workoutTime: "60 mins",
    icon: "moon"
  }
]

export function RecentWorkouts() {
  return (
    <div className="space-y-8">
      <h3 className="text-lg font-semibold">Recent Workouts</h3>
      <div className="space-y-4">
        {
          recentWorkouts.map((item,index)=>{
            return (<WorkoutCard key={index} {...item} />)
          })
        }
      </div>
    </div>
  );
}

interface WorkoutCardProps {
  name: string;
  time: string;
  calories: string;
  workoutTime: string;
  icon: string
}
const WorkoutCard = ({
name,
time,
calories,
workoutTime,
icon
}:WorkoutCardProps) => {
  // @ts-ignore
  const Icon = Icons[icon] || Icons.sun;
  return (<div className="flex items-center">
     <Icon className="h-6 w-6 text-muted-foreground" />
    <div className="ml-4 space-y-1">
      <p className="text-sm font-medium leading-none">{name}</p>
      <p className="text-sm text-muted-foreground">
        {time}
      </p>
    </div>
    <div className="ml-auto font-medium">
      
    <p className="text-sm text-muted-foreground">{calories} calories</p>
      <p className="text-sm text-muted-foreground">{workoutTime}</p>
    </div>
  </div>)
}