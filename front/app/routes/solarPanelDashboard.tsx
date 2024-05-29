import HeroSection from "components/ui/heroSection"
import DashboardCard from "components/ui/dashboardCard"
import Title from "components/ui/title"
import Paragraph from "components/ui/paragraph"
import ProductionChart from "components/ui/productionChart";
import GasEmissionChart from "components/ui/gasEmissionsChart";
import AvgProductionChart from "components/ui/avgProductionChart";
import DayProductionChart from "components/ui/dayProductionChart";
import { DatePickerWithRange } from "components/ui/datePicker";
import React from "react";
import { DateRange } from "react-day-picker";
import { addDays } from "date-fns";

export default function Component() {

    const [date, setDate] = React.useState<DateRange>({
      from: addDays(new Date(), -32),
      to: addDays(new Date(), 2),
    })

    return (
        <>
            <div className="flex min-h-screen flex-col">
              <Title supClass="mb-10">Dashboard : panneaux solaires</Title>
                < DatePickerWithRange date = {date} setDate = {setDate} />
                <main className="flex-1 bg-gray-100 py-8 px-6">
                    <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        <DashboardCard title="graphe 1">
                            <ProductionChart date = { date } />
                        </DashboardCard>
                        <DashboardCard title="graphe 2">
                            <GasEmissionChart/>
                        </DashboardCard>
                        <DashboardCard title="statut">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Title variant="tertiary">Production</Title>
                                    <Paragraph variant="secondary">12.5 kW</Paragraph>
                                </div>
                                <div>
                                    <Title variant="tertiary">Consumption</Title>
                                    <Paragraph variant="secondary">9.2 kW</Paragraph>
                                </div>
                            </div>
                        </DashboardCard>
                        <DashboardCard title="graphe 3">
                            <AvgProductionChart/>
                        </DashboardCard>
                        <DashboardCard title="graphe 4">
                            <DayProductionChart/>
                        </DashboardCard>
                        <DashboardCard title="battery">
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <Title variant="tertiary">Charge Level</Title>
                                    <Paragraph variant="secondary">82%</Paragraph>
                                </div>
                                <div>
                                    <Title variant="tertiary">Capacity</Title>
                                    <Paragraph variant="secondary">12 kWh</Paragraph>
                                </div>
                            </div>
                        </DashboardCard>
                    </div>
                </main>
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