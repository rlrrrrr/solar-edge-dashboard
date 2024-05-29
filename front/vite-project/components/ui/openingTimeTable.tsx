import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "components/ui/table";
import Title from "./title";
import { useOpeningHoursStore } from '../../store/openingHoursStore';

const OpeningTimeTable = () => {
    const { openingHours } = useOpeningHoursStore();

    return (
        <div className="space-y-2">
            <Title variant='secondary'>Nos horaires</Title>
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
                                    {time.morningStart && time.morningEnd
                                        ? `${time.morningStart} - ${time.morningEnd}`
                                        : 'Fermé le matin'}
                                    <br />
                                    {time.eveningStart && time.eveningEnd
                                        ? `${time.eveningStart} - ${time.eveningEnd}`
                                        : 'Fermé le soir'}
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
