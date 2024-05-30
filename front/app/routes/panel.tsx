import {LoaderFunctionArgs, redirect} from "@remix-run/node";
import { Link } from "@remix-run/react";
import {getAdonisCookie, cookieParse} from "~/auth"
import {ReactNode} from "react";



export async function loader({request}:LoaderFunctionArgs) {
    const cookie = getAdonisCookie(request.headers," panel");
    console.log("cookie ",cookie);
    if(!cookie){
        throw redirect("/login");
    }
    const value = cookieParse(cookie);
    return value;
}


export default function Home({children}: {children:ReactNode}) {
    return (
        <div key="1" className="flex flex-col w-full min-h-screen">
            <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
                <nav
                    className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link className="text-bold" to="#">
                        Settings
                    </Link>
                    <Link className="text-gray-500 dark:text-gray-400" to="#">
                        Planner
                    </Link>
                </nav>
            </header>
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                {children}
            </main>
        </div>
    )
}

