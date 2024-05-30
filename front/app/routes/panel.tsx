import {LoaderFunctionArgs, redirect} from "@remix-run/node";
import { Link } from "@remix-run/react";
import {getAdonisCookie, cookieParse, logout} from "~/auth"
import {ReactNode} from "react";
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../components/ui/card";
import {Label} from "../../components/ui/label";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";


export async function action(){
    await logout();
    return null;
}


export function SetIntervalSection(){
    return (
            <div className="space-y-2">
                <Label htmlFor="refresh-interval">Interval (seconds)</Label>
                <Input
                    id="refresh-interval"
                    max="300"
                    min="10"
                    placeholder="Enter refresh interval"
                    step="10"
                    type="number"
                />
            </div>
    )
}

export function SetApiKeySection() {
    return (
        <>
            <div className="space-y-2">
                <Label htmlFor="api-key">API Key</Label>
                <Input id="api-key" placeholder="Enter your API key" type="text"/>
            </div>
            <div className="space-y-2">
                <Label htmlFor="secret-key">Secret Key</Label>
                <Input id="secret-key" placeholder="Enter your secret key" type="text"/>
            </div>
        </>
    )
}


export async function loader({request}:LoaderFunctionArgs) {
    const cookie = getAdonisCookie(request.headers," panel");
    console.log("cookie ",cookie);
    if(!cookie){
        throw redirect("/login");
    }
    const value = cookieParse(cookie);
    return value;
}

export function SettingsLayout({title,description,content}: {title:string,description:string, content: ReactNode }) {
    return (
            <Card>
                <CardHeader>
                    <CardTitle>{title}</CardTitle>
                    <CardDescription>{description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    {content}
                    <Button>Save</Button>
                </CardContent>
            </Card>
    )
}


export default function Home() {
    return (
        <div key="1" className="flex flex-col w-full min-h-screen">
            <section className="flex items-center h-16 px-4 border-b shrink-0 md:px-6">
                <nav
                    className="flex-col hidden gap-6 text-lg font-medium md:flex md:flex-row md:items-center md:gap-5 md:text-sm lg:gap-6">
                    <Link className="text-bold" to="#">
                        Settings
                    </Link>
                    <Link className="text-gray-500 dark:text-gray-400" to="#">
                        Planner
                    </Link>

                </nav>
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
                    <div className="grid gap-4 md:grid-cols-2">
                        <SettingsLayout title={"API Settings"}
                                        description={"Enter your API keys to connect your services."}
                                        content={<SetApiKeySection/>}/>
                        <SettingsLayout title={"Refresh Interval"}
                                        description={"Set the interval in seconds to refresh the dashboard data."}
                                        content={<SetIntervalSection/>}/>
                    </div>
                </div>
            </main>
        </div>
)
}

