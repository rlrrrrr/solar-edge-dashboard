import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "../../components/ui/card"
import { Label } from "../../components/ui/label"
import { Input } from "../../components/ui/input"
import { Separator } from "../../components/ui/separator"
import { Button } from "../../components/ui/button"

export default function Component() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 dark:bg-gray-900">
            <Card className="w-full max-w-md">
                <CardHeader>
                    <CardTitle>Administration Panel</CardTitle>
                    <CardDescription>Manage your account settings.</CardDescription>
                </CardHeader>
                <CardContent className="grid grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="username">Add Admin</Label>
                            <Input id="username" placeholder="Enter your username" />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="password">Password</Label>
                            <Input id="password" type="password" placeholder="Enter your password" />
                        </div>
                    </div>
                    <div className="space-y-4 border-l pl-6 dark:border-gray-700">
                        <div className="space-y-2">
                            <Label htmlFor="new-password">Admin Settings</Label>
                            <Input id="new-password" type="password" placeholder="Enter a new password" />
                        </div>
                    </div>
                </CardContent>
                <Separator className="my-4" />
                <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                </CardFooter>
            </Card>
        </div>
    )
}