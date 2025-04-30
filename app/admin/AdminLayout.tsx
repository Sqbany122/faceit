import { Link, Form } from "react-router";
import "../assets/css/admin.css"


export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="pageContent flex h-screen w-full">
        <div className="drawer p-2">
            <div className="drawer-logo">
                <h1>Faceit</h1>
            </div>
            <div className="drawer-menu">
                <ul>
                    <li>
                        <Link to="/admin/dashboard">
                            <h1>Dashboard</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard">
                            <h1>Blocked players</h1>
                        </Link>
                    </li>
                    <li>
                        <Link to="/admin/dashboard">
                            <h1>Matches</h1>
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
        <div className="adminContent p-2">
            <div className="adminContent-header flex">
                <div className="text-center">
                    <Form method="get">
                        <input
                            className="searchBar p-2 w-100 rounded"
                            placeholder="Search player"
                        />
                    </Form>
                </div>
            </div>
            {children}
        </div>
    </main>
  );
}
