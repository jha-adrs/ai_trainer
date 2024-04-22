import BreadCrumb from "@/components/breadcrumb";
import { UserClient } from "@/components/tables/user-tables/client";
import { users } from "@/constants/data";

const breadcrumbItems = [{ title: "Meal Plans", link: "/dashboard/meal-plans" }];
export default function page() {
  return (
    <>
      <div className="flex-1 space-y-4 min-h-screen p-4 md:p-8 pt-6 ">
        <BreadCrumb items={breadcrumbItems} />
        <UserClient data={users} />
      </div>
    </>
  );
}
