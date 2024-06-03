import HeroSection from "components/ui/heroSection"
import DashboardCard from "components/ui/dashboardCard"
import Title from "components/ui/title"
import Paragraph from "components/ui/paragraph"
import ProductionChart from "components/ui/productionChart";
import GasEmissionChart from "components/ui/gasEmissionsChart";
import AvgProductionChart from "components/ui/avgProductionChart";
import DayProductionChart from "components/ui/dayProductionChart";
import EnergyDataChart from "components/ui/energyDetailsChart";
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
      from: addDays(new Date(), -32),
      to: addDays(new Date(), 2),
    })

    return (
        <>
            <div className="flex min-h-screen flex-col">
              <Title supClass="mb-10">Dashboard de la journée: panneaux solaires</Title>
                <div className="flex-1 bg-gray-100 py-8 px-6">
                    <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
                        <DashboardCard title="Production de cette journée">
                            <DayProductionChart/>
                        </DashboardCard>
                        <DashboardCard title="Histogramme des emissions de gaz depuis le debut">
                            <GasEmissionChart/>
                        </DashboardCard>
                    </div>
              </div>
              <Title supClass="mb-10">Dashboard avec selection de date: panneaux solaires</Title>
                < DatePickerWithRange date = {date} setDate = {setDate} />
                <div className="flex-1 bg-gray-100 py-8 px-6">
                    <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-1 lg:grid-cols-1">
                        <DashboardCard title="Production">
                            <ProductionChart date = { date } />
                        </DashboardCard>
                        <DashboardCard title="Production moyenne">
                            <AvgProductionChart/>
                        </DashboardCard>
                        <DashboardCard title="Informations generales">
                            <EnergyDataChart date = { date }/>
                        </DashboardCard>
                    </div>
                </div>
            </div>
        </>
    )
}

function LineChart(props) {
    return (
        <div {...props}>
            {/* <ResponsiveLine
         data={[
           {
             id: "Desktop",
             data: [
               { x: "Jan", y: 43 },
               { x: "Feb", y: 137 },
               { x: "Mar", y: 61 },
               { x: "Apr", y: 145 },
               { x: "May", y: 26 },
               { x: "Jun", y: 154 },
             ],
           },
           {
             id: "Mobile",
             data: [
               { x: "Jan", y: 60 },
               { x: "Feb", y: 48 },
               { x: "Mar", y: 177 },
               { x: "Apr", y: 78 },
               { x: "May", y: 96 },
               { x: "Jun", y: 204 },
             ],
           },
         ]}
         margin={{ top: 10, right: 10, bottom: 40, left: 40 }}
         xScale={{
           type: "point",
         }}
         yScale={{
           type: "linear",
         }}
         axisTop={null}
         axisRight={null}
         axisBottom={{
           tickSize: 0,
           tickPadding: 16,
         }}
         axisLeft={{
           tickSize: 0,
           tickValues: 5,
           tickPadding: 16,
         }}
         colors={["#2563eb", "#e11d48"]}
         pointSize={6}
         useMesh={true}
         gridYValues={6}
         theme={{
           tooltip: {
             chip: {
               borderRadius: "9999px",
             },
             container: {
               fontSize: "12px",
               textTransform: "capitalize",
               borderRadius: "6px",
             },
           },
           grid: {
             line: {
               stroke: "#f3f4f6",
             },
           },
         }}
         role="application"
       /> */}
        </div>
    )
}


function PieChart(props) {
    return (
        <div {...props}>
            {/* <ResponsivePie
         data={[
           { id: "Jan", value: 111 },
           { id: "Feb", value: 157 },
           { id: "Mar", value: 129 },
           { id: "Apr", value: 150 },
           { id: "May", value: 119 },
           { id: "Jun", value: 72 },
         ]}
         sortByValue
         margin={{ top: 10, right: 10, bottom: 10, left: 10 }}
         cornerRadius={0}
         padAngle={0}
         borderWidth={1}
         borderColor={"#ffffff"}
         enableArcLinkLabels={false}
         arcLabel={(d) => `${d.id}`}
         arcLabelsTextColor={"#ffffff"}
         arcLabelsRadiusOffset={0.65}
         colors={["#2563eb"]}
         theme={{
           labels: {
             text: {
               fontSize: "18px",
             },
           },
           tooltip: {
             chip: {
               borderRadius: "9999px",
             },
             container: {
               fontSize: "12px",
               textTransform: "capitalize",
               borderRadius: "6px",
             },
           },
         }}
         role="application"
       /> */}
        </div>
    )
}