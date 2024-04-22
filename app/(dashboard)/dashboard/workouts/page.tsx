import BreadCrumb from "@/components/breadcrumb";
import { columns } from "@/components/tables/employee-tables/columns";
import { EmployeeTable } from "@/components/tables/employee-tables/employee-table";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { Employee, sampleWorkouts } from "@/constants/data";
import { capitalizeFirstLetter, cn } from "@/lib/utils";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const breadcrumbItems = [{ title: "Workouts", link: "/dashboard/workouts" }];

type paramsProps = {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
};

export default async function page({ searchParams }: paramsProps) {
  const page = Number(searchParams.page) || 1;
  const pageLimit = Number(searchParams.limit) || 10;
  const country = searchParams.search || null;
  const offset = (page - 1) * pageLimit;

  const res = await fetch(
    `https://api.slingacademy.com/v1/sample-data/users?offset=${offset}&limit=${pageLimit}` +
    (country ? `&search=${country}` : ""),
  );
  const employeeRes = await res.json();
  const totalUsers = employeeRes.total_users; //1000
  const pageCount = Math.ceil(totalUsers / pageLimit);
  const employee: Employee[] = employeeRes.users;
  return (
    <>
      <div className="flex-1 space-y-4  p-4 md:p-8 pt-6">
        <BreadCrumb items={breadcrumbItems} />

        <div className="flex items-start justify-between">
          <Heading
            title={`Workouts `}
            description="View popular workouts"
          />

          <Link
            href={"/dashboard/employee/new"}
            className={cn(buttonVariants({ variant: "default" }))}
          >
            <Plus className="mr-2 h-4 w-4" /> Add New
          </Link>
        </div>
        <Separator />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2">
          {
            sampleWorkouts.map((wk) => (
              <WorkoutCard
                key={wk.id}
                id={wk.id}
                name={wk.name}
                equipment={wk.equipment}
                users={wk.users}
                level={wk.level}
                sets={wk.sets}

              />
            ))
          }
        </div>
      </div>
    </>
  );
}

interface WorkoutCardProps {
  id: number;
  equipment: boolean;
  users: number;
  level: string;
  sets: number;
  name: string;
}

const WorkoutCard = ({ id,
  name,
  equipment,
  users,
  level,
  sets, }: WorkoutCardProps) => {
  return (
    <Card className=" flex flex-col items-center justify-center">
      <CardHeader>
        <Image src="/images/squat.jpg" alt={name} width={200} height={150} className="rounded-lg" />
      </CardHeader>
      <CardContent >
        <div className="flex flex-row justify-between items-center space-x-1">
          <h3 className="text-lg font-semibold">{name}</h3>
          <Badge className="">{level}</Badge>
        </div>
        <p className="text-sm text-gray-500">Equipment {equipment? "YES": "NO"}</p>
        <div className="flex justify-between">
          <div>
            <p className="text-sm font-semibold"> {sets} <span className="text-muted-foreground">sets</span></p>
           </div>
        </div>
      </CardContent>
    </Card>
  )
}