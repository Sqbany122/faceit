import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("search", "routes/search.tsx"),
    route("/player/:id", "routes/player.tsx"),
    route("/admin/dashboard", "routes/admin/dashboard.tsx")
] satisfies RouteConfig;
