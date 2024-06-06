import {LoaderFunctionArgs, redirect} from "@remix-run/node";
import {Link, Outlet, useLocation} from "@remix-run/react";
import {getAdonisCookie, cookieParse, logout} from "~/auth"
import {Button} from "../../components/ui/button";

export async function action(){
    await logout();
    return null;
}

export async function loader({request}:LoaderFunctionArgs) {
    const cookie = getAdonisCookie(request.headers,"panel");
    if(!cookie){
        throw redirect("/login");
    }
    const value = cookieParse(cookie);
    return value;
}

export function NavBar(){
    const location = useLocation();

    // Fonction pour déterminer si un lien doit être rendu en gras
    const isActive = (path) => {
        return location.pathname === path;
    };
    return (
        <nav
            className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
            <Link
                className={`${isActive('/panel/settings') ? 'text-bold' : 'text-gray-500 dark:text-gray-400'}`}
                to="/panel/settings"
            >
                Settings
            </Link>
            <Link
                className={`${isActive('/panel/planner') ? 'text-bold' : 'text-gray-500 dark:text-gray-400'}`}
                to="/panel/planner"
            >
                Planner
            </Link>
        </nav>
    )
}

export default function Home() {
    return (
        <div key="1" className="flex flex-col w-full min-h-screen">
            <section className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
                <NavBar/>
                <form className="flex items-center w-full gap-4 md:ml-auto md:gap-2 lg:gap-4" method="post">
                    <div className="flex-1 ml-auto sm:flex-initial">
                        <div className="relative"/>
                    </div>
                    <Button>
                        Logout
                    </Button>
                </form>
            </section>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="grid gap-4">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>      
                        <Outlet/>
                </div>
            </main>
        </div>
)
}

