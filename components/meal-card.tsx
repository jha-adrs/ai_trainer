import Image from "next/image";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { MEAL_TIMES } from "@prisma/client";
import { capitalizeFirstLetter } from "@/lib/utils";

interface MealCardProps {
    name: string;
    description: string;
    image: string;
    calories: number;
    protein: number;
    carbs: number;
    fat: number;
    ingredients: string[];
    recipe: string;
    idealTime: MEAL_TIMES;
}

export const MealCard = ({
    name,
    description,
    image,
    calories,
    protein,
    carbs,
    fat,
    ingredients,
    recipe,
    idealTime
}: MealCardProps) => {
    return (
        <Card className=" flex flex-col items-center justify-center">
            <CardHeader>
                <Image src={image} alt={name} width={200} height={150} className="rounded-lg" />
            </CardHeader>
            <CardContent >
                <div className="flex flex-row justify-between items-center">
                <h3 className="text-lg font-semibold">{name}</h3>
                <Badge className="">{capitalizeFirstLetter(idealTime)}</Badge>
                </div>
                <p className="text-sm text-gray-500">{description}</p>
                <div className="flex justify-between">
                    <div>
                        <p className="text-sm font-semibold"> {calories}gm <span className="text-muted-foreground">calories</span></p>
                        <p className="text-sm font-semibold"> {protein}gm <span className="text-muted-foreground">protein</span></p>
                        <p className="text-sm font-semibold"> {carbs}gm <span className="text-muted-foreground">carbs</span></p>
                        <p className="text-sm font-semibold"> {fat}gm <span className="text-muted-foreground">fat</span></p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}