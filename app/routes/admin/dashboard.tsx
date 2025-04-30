import type { Route } from "../+types/home";
import { AdminLayout } from "../../admin/AdminLayout";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Dashboard() {
  return <AdminLayout />;
}
