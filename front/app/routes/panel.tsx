import {Link} from "@remix-run/react"
import { Button } from "components/ui/button"
import { CardTitle, CardDescription, CardHeader, CardContent, Card } from "components/ui/card"
import { Label } from "components/ui/label"
import { Input } from "components/ui/input"

export default function Home() {
    return (
        <div key="1" className="flex flex-col w-full min-h-screen">
            <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 p-4 md:gap-8 md:p-10">
                <div className="grid gap-4">
                    <h1 className="text-2xl font-bold">Admin Dashboard</h1>
                    <div className="grid gap-4 md:grid-cols-2">
                        <Card>
                            <CardHeader>
                                <CardTitle>API Settings</CardTitle>
                                <CardDescription>Enter your API keys to connect your services.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="space-y-2">
                                    <Label htmlFor="api-key">API Key</Label>
                                    <Input id="api-key" placeholder="Enter your API key" type="text" />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor="secret-key">Secret Key</Label>
                                    <Input id="secret-key" placeholder="Enter your secret key" type="text" />
                                </div>
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>Refresh Interval</CardTitle>
                                <CardDescription>Set the interval in seconds to refresh the dashboard data.</CardDescription>
                            </CardHeader>
                            <CardContent className="space-y-4">
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
                                <Button>Save</Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </main>
        </div>
    )
}

