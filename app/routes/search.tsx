import type { Route } from "./+types/home";
import { SearchPage } from "../search/search";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Search() {
  return <SearchPage />;
}
