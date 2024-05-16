import { Label } from "components/ui/label"
import { Input } from "components/ui/input"
import { Textarea } from "components/ui/textarea"
import { Button } from "components/ui/button"
import Title from "components/ui/title";
import Paragraph from "../../components/ui/paragraph";
export default function ContactPage() {
    return (
        <div className="mx-auto max-w-md space-y-6">
            <div className="space-y-2 text-center">
                <Title >Contactez-nous</Title>
                <Paragraph variant={"secondary"}>
                    Remplissez le formulaire ci-dessous et nous vous répondrons dans les plus brefs délais.
                </Paragraph>
            </div>
            <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="name">Nom</Label>
                        <Input id="name" placeholder="Entrez votre nom" />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" placeholder="Entrez votre email" type="email" />
                    </div>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea className="min-h-[100px]" id="message" placeholder="Écrivez votre message" />
                </div>
                <Button className="w-full" type="submit">
                    Envoyer
                </Button>
            </form>
        </div>
    )
}