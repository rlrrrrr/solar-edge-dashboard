import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "../../components/ui/card";
import {Label} from "../../components/ui/label";
import {Input} from "../../components/ui/input";
import {Button} from "../../components/ui/button";
import {ReactNode} from "react";

export function SetIntervalSection(){
    return (
        <>
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
        </>
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

export function SettingsLayout({title,description,content}: {title:string,description:string, content: ReactNode }) {
    return (
        <>
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

        </>
    )
}


export default function Component(){
    return (
        <>
            <SettingsLayout title={"API Settings"} description={"Enter your API keys to connect your services."} content={<SetApiKeySection/>} />
            <SettingsLayout title={"Refresh Interva"} description={"Set the interval in seconds to refresh the dashboard data."} content={<SetIntervalSection/>} />
        </>
    )
}