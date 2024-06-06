import { useState } from 'react';
import { CardTitle, CardHeader, CardContent, Card } from "components/ui/card";
import { Label } from "components/ui/label";
import { Input } from "components/ui/input";
import { Textarea } from "components/ui/textarea";
import { Button } from "components/ui/button";

export default function ContactPage() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:example@example.com?subject=Contact Form Submission&body=${encodeURIComponent(`Prénom: ${firstName}\nNom: ${lastName}\nEmail: ${email}\nMessage: ${message}`)}`;
        window.location.href = mailtoLink;
    };

    return (
        <Card className="w-full max-w-2xl mx-auto">
            <CardHeader>
                <CardTitle>Contactez-Nous</CardTitle>
            </CardHeader>
            <CardContent>
                <form className="grid gap-4" onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor="first-name">prénom</Label>
                            <Input
                                id="first-name"
                                placeholder="Entrez votre prénom"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                            />
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor="last-name">nom</Label>
                            <Input
                                id="last-name"
                                placeholder="Entrez votre nom"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            placeholder="Entrez votre e-mail"
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                            className="min-h-[100px]"
                            id="message"
                            placeholder="Entrez votre message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                        />
                    </div>
                    <Button className="w-full md:w-auto" type="submit">
                        Envoyer
                    </Button>
                </form>
            </CardContent>
        </Card>
    );
}
