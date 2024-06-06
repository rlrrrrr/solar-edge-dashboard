import { Label } from "../../components/ui/label";
import { Input } from "../../components/ui/input";
import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Form } from "@remix-run/react";
import {ActionFunctionArgs, redirect} from "@remix-run/node";


export async function action({request}: ActionFunctionArgs){
    const formData: FormData = await request.formData();
    const endpoint_url = new URL(`${process.env.API_URL}/admin/solarEdgeKey`)
    const response = await fetch(endpoint_url, {
        headers: {
            'Content-Type': 'application/json',
        },
        method: "post",
        body: JSON.stringify(
            {
                key: formData.get("api-key"),
            }
        )
    })


    if(response.status !== 200){
        throw redirect("/panel/settings")
    }
    return redirect("/panel")
}


export function SetApiKeySection() {
    return (
        <>
            <div className="grid gap-4 md:grid-cols-2">
                <Form className="space-y-2"  method="post" >
                    <div className="space-y-2">
                        <Label htmlFor="api-key">API Key</Label>
                        <Input name="api-key" id="api-key" placeholder="Enter your API key" type="text" required />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="secret-key">Secret Key</Label>
                        <Input id="secret-key" placeholder="Enter your secret key" type="text" />
                    </div>
                    <Button type="submit">Save</Button>
                </Form>

            </div>
        </>
    )
}


export function SetIntervalSection() {
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
            <Button>Save</Button>
        </div>
    )
}


export function SettingsLayout({ title, description, content }: { title: string, description: string, content: ReactNode }) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                    {content}
            </CardContent>
        </Card>
    )
}


export default function render() {
    return (
        <>
            <SettingsLayout title={"API Settings"}
                description={"Enter your API keys to connect your services."}
                content={<SetApiKeySection />} />
            <SettingsLayout title={"Refresh Interval"}
                description={"Set the interval in seconds to refresh the dashboard data."}
                content={<SetIntervalSection />} />
        </>
    )
}