import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "components/ui/table";
import Title from "./title";
import { useOpeningHoursStore } from '../../store/openingHoursStore';
import Paragraph from "./paragraph"


const OpeningTimeTable = () => {
    const { openingHours } = useOpeningHoursStore();

    return (
        <div className="space-y-2">
            <Title variant='secondary'>Les Horaires de l'épicerie solidaire</Title>
            <Paragraph variant='secondary'>
                L'épicerie solidaire du Magasin Connecté fonctionne grâce à une association étudiante indépendante qui propose des produits essentiels à des prix réduits pour soutenir les étudiants dans le besoin.
            </Paragraph>
            <div className="rounded-lg border dark:border-gray-800 overflow-hidden bg-gray-100 dark:bg-gray-800">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Jour</TableHead>
                            <TableHead>Horaires</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {openingHours.map((time) => (
                            <TableRow key={time.day}>
                                <TableCell>{time.day}</TableCell>
                                <TableCell>
                                    {time.morningClosed ? 'Fermé le matin' : (
                                      `${time.morningStart} - ${time.morningEnd}`
                                    )}
                                    <br />
                                    {time.eveningClosed ? 'Fermé le soir' : (
                                      `${time.eveningStart} - ${time.eveningEnd}`
                                    )}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </div>
    );
};

export default OpeningTimeTable;
