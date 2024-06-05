import HeroSection from "components/ui/heroSection"
import DashboardCard from "components/ui/dashboardCard"
import Title from "components/ui/title"
import Paragraph from "components/ui/paragraph"
import ProductionChart from "components/ui/productionChart";
import GasEmissionChart from "components/ui/gasEmissionsChart";
import DayProductionChart from "components/ui/dayProductionChart";
import EnergyDataChart from "components/ui/energyDetailsChart";
import TheoricProductionChart from "components/ui/theoricProdChart";
import { DatePickerWithRange } from "components/ui/datePicker";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

export function dateRangeToAPIStr(range: DateRange): [string, string] {
    if (!range.from || !range.to) throw new Error("Invalid date range");
    const startDate = range.from.toISOString().split('T')[0];
    const endDate = range.to.toISOString().split('T')[0];
    return [startDate, endDate];
}

export default function Component() {

    const [date, setDate] = React.useState<DateRange>({
        from: addDays(new Date(), -6),
        to: new Date(),
    })

    return (
        <>
            <div className="flex min-h-screen flex-col">
                <Title supClass="mb-10">Dashboard de la journée: panneaux solaires</Title>
                <div className="flex-1 bg-gray-100 py-8 flex justify-center">
                    <div className="flex flex-col w-full max-w-4xl gap-8 p-[10px]">
                        <DashboardCard title="Production de cette journée">
                            <DayProductionChart />
                        </DashboardCard>
                        <DashboardCard title="Histogramme des emissions de gaz depuis le debut">
                            <GasEmissionChart />
                        </DashboardCard>
                        <DashboardCard title="Graphique de la production theorique des prochaines 24h">
                            <TheoricProductionChart />
                        </DashboardCard>
                    </div>
                </div>
                <Title supClass="mb-10">Dashboard avec selection de date: panneaux solaires</Title>
                <DatePickerWithRange date={date} setDate={setDate} />
                <div className="flex-1 bg-gray-100 py-8 flex justify-center p-[10px]">
                    <div className="flex flex-col w-full max-w-4xl gap-8">
                        <DashboardCard title="Production">
                            <ProductionChart date={date} />
                        </DashboardCard>
                        <DashboardCard title="Informations generales">
                            <EnergyDataChart date={date} />
                        </DashboardCard>
                    </div>
                </div>
            </div>
        </>

    )
}
