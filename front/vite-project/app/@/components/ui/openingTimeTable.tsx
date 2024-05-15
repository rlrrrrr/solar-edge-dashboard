import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "app/@/components/ui/table"

export default function OpeningTimeTable() {
    return (
        <div className="space-y-2">
            <h2 className="text-2xl font-bold">Nos horaires</h2>
            <div className="rounded-lg border dark:border-gray-800 overflow-hidden">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Jour</TableHead>
                            <TableHead>Horaires</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        <TableRow>
                            <TableCell>Lundi</TableCell>
                            <TableCell>9h - 18h</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Mardi</TableCell>
                            <TableCell>9h - 18h</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Mercredi</TableCell>
                            <TableCell>9h - 18h</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Jeudi</TableCell>
                            <TableCell>9h - 18h</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Vendredi</TableCell>
                            <TableCell>9h - 18h</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Samedi</TableCell>
                            <TableCell>Fermé</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>Dimanche</TableCell>
                            <TableCell>Fermé</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </div>
        </div>
    )
}