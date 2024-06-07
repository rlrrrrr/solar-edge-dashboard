import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "components/ui/table";
import Title from "./title";



export default function OpeningTimeTable({openingHours}) {
    return (
        <div className="space-y-2">
            <Title variant='secondary'>Les Horaires de l'épicerie solidaire</Title>
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
}