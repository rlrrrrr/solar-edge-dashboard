import SelectOpeningTime from "../../components/ui/selectOpeningTime";
import {useLoaderData} from "@remix-run/react";
import {ActionFunctionArgs, redirect} from "@remix-run/node";


export async function action({request,
                             }: ActionFunctionArgs){
    const formData = await request.formData()
    const newPlanner = formData.get("openingTimes")
    const response = await fetch(`${process.env.API_URL}/calendar`, {
        method: "post",
        body: newPlanner
    })

    if (response.status !== 200) {
        throw Error("planer dispatch error")
    }
    return redirect('/panel')
}

export async function loader(){
    const response = await fetch(`${process.env.API_URL}/calendar`)
    if (!response.ok) {
        throw new Error('Failed to fetch data planner');
    }
    const result = await response.json()
    return result
}

export default function OpeningHours(){
    const data = useLoaderData<typeof loader>();
    console.log("openingHours ",data)
    return (
        <SelectOpeningTime openingHours={data}></SelectOpeningTime>
    )
}