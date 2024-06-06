import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "components/ui/table";
import Title from "./title";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { useOpeningHoursStore } from '../../store/openingHoursStore';

// Define the loader function to fetch data from the API
export const loader = async () => {
    let response;
    try {
        response = await fetch(`${process.env.API_URL}/calendar`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch');
        }
    } catch (error) {
        const { openingHours } = useOpeningHoursStore.getState();
        return json(openingHours);
    }

    const openingHours = await response.json();
    return json(openingHours);
};

const OpeningTimeTable = () => {
    const openingHours = useLoaderData();

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
};

export default OpeningTimeTable;
