import SelectOpeningTime from "../../components/ui/selectOpeningTime";
import {useLoaderData} from "@remix-run/react";
import {ActionFunctionArgs, json, redirect} from "@remix-run/node";


export async function action({request,
                             }: ActionFunctionArgs){
    console.log("test ",request)
    const formData = await request.formData()
    const newPlanner = formData.get("openingTimes")


    // console.log("b",body)
    //const {openingTimes} = JSON.parse(body[body.find('openingTimes=')])
    console.log("openingtimes From body ",)
    const response = await fetch(`${process.env.API_URL}/calendar`, {
        method: "post",
        body: newPlanner
    })

    if (response.status !== 200) {
        console.log(response)
        throw Error("dont works")
    }
    console.log("suceed ",response)

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