"use client";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";
import { User, sampleMeals } from "@/constants/data";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { columns } from "./columns";
import { MealCard } from "@/components/meal-card";
import { ScrollArea } from "@/components/ui/scroll-area";

interface ProductsClientProps {
  data: User[];
}

export const UserClient: React.FC<ProductsClientProps> = ({ data }) => {
  const router = useRouter();

  return (
    <>
      <div className="flex items-start justify-between">
        <Heading
          title={`Meal Plan`}
          description="Manage and view your meal plans"
        />
        <Button
          className="text-xs md:text-sm"
          onClick={() => router.push(`/dashboard/user/new`)}
        >
          <Plus className="mr-2 h-4 w-4" /> Add New
        </Button>
      </div>
      <Separator />
      {/* <DataTable searchKey="name" columns={columns} data={data} /> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 space-x-2">
          {
            sampleMeals.map((meal) => (
              <MealCard
                key={meal.id}
                name={meal.name}
                description={meal.description}
                image={meal.image}
                calories={meal.calories}
                protein={meal.protein}
                carbs={meal.carbs}
                fat={meal.fat}
                ingredients={meal.ingredients}
                recipe={meal.recipe}
                idealTime="BREAKFAST"
              />
            ))
          }
      </div>
    </>
  );
};
