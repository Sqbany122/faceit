import type { Route } from "./+types/home";
import { PlayerPage } from "../player/player";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Player() {
  return <PlayerPage />;
}
