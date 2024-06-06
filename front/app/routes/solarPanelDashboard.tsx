import DashboardCard from "components/ui/dashboardCard"
import Title from "components/ui/title"
import ProductionChart from "components/ui/productionChart";
import GasEmissionChart from "~/routes/gasEmissionsChart";
import EnergyDataChart from "components/ui/energyDetailsChart";
import {DatePickerWithRange} from "components/ui/datePicker";
import React from "react";
import {DateRange} from "react-day-picker";
import {addDays, format} from "date-fns";
import {useLoaderData} from "@remix-run/react";
import DayProductionChart from "../../components/ui/dayProductionChart";
import TheoricProductionChart from "../../components/ui/theoricProdChart";

export async function loader() {
    if (!process.env.API_URL) {
        throw new Error("you need to define API_URL");
    }
    const gazEmissionApiUrl = new URL(`${process.env.API_URL}/api/co2Production`);
    const theoricProdChartUrl = new URL(`${process.env.API_URL}/api/hourly_prediction_solar_radiation`);
    const currentDate = format(new Date(), 'yyyy-MM-dd');
    const dayProductionApiUrl = new URL(`${process.env.API_URL}/api/electricity?startDate=${currentDate}&endDate=${currentDate}&timeUnit=QUARTER_OF_AN_HOUR`);

    const dataPromises = [
        await fetch(gazEmissionApiUrl),
        await fetch(theoricProdChartUrl),
        await fetch(dayProductionApiUrl)
    ];

    try {
        const responses = await Promise.all(dataPromises);
        const dataGazEmission = await responses[0].json();
        const theoricProductionTomorrow = await responses[1].json();
        const dataProductionDay = await responses[2].json();
        return Promise.resolve({
            gazEmission: dataGazEmission,
            theoricProduction: theoricProductionTomorrow,
            productionDay: dataProductionDay,
            url:process.env.API_URL
        });
    } catch (error) {
        console.error("Failed to fetch Data", error);
        return Promise.resolve(null);
    }
}


export function dateRangeToAPIStr(range: DateRange): [string, string] {
  if (!range.from || !range.to) throw new Error("Invalid date range");
  const startDate = range.from.toISOString().split('T')[0];
  const endDate = range.to.toISOString().split('T')[0];
  return [startDate, endDate];
}

export default function Component() {
    const data = useLoaderData<typeof loader>();
    const [date, setDate] = React.useState<DateRange>({
      from: addDays(new Date(), -6),
      to: new Date(),
    })

    return (
        <>
            <div className="flex min-h-screen flex-col">
              <Title supClass="mb-10">Dashboard de la journée: panneaux solaires</Title>
                <div className="flex-1 bg-gray-100 py-8 px-6">
                    <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
                        <DashboardCard title="Production de cette journée">
                            <DayProductionChart data={data.productionDay} />
                        </DashboardCard>
                        <DashboardCard title="Histogramme des emissions de gaz depuis le debut">
                            <GasEmissionChart data={data.gazEmission}/>
                        </DashboardCard>
                        <DashboardCard title="Graphique de la production theorique des prochaines 24h">
                            <TheoricProductionChart data={data.theoricProduction}/>
                        </DashboardCard>
                    </div>
                </div>
              <Title supClass="mb-10">Dashboard avec selection de date: panneaux solaires</Title>
                < DatePickerWithRange date = {date} setDate = {setDate} />
                <div className="flex-1 bg-gray-100 py-8 px-6">
                    <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
                        <DashboardCard title="Production">
                            <ProductionChart date = { date } api_url={data.url}/>
                        </DashboardCard>
                        <DashboardCard title="Informations generales">
                            <EnergyDataChart date = { date } api_url={data.url}/>
                        </DashboardCard>
                    </div>
                </div>
            </div>
        </>
    )
}
