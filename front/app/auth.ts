import {createCookie, redirect} from "@remix-run/node";

export function getAdonisCookie(headers:Headers,field:string):string {
    const cookie = headers.get("cookie")
    if(!cookie)throw redirect("/login");
    const valueCookie =  cookie.split(';').filter( (e) => e.startsWith(field)).at(0);
    if(!valueCookie){
        throw redirect("/login");
    }
    return valueCookie;
}

export function cookieParse(cookie:string){
    const [key,value] = cookie.split("=");
    const [content, signature] = value.split("%3")
    const json = JSON.parse(atob(content));
    if(!json || !json.login){
        throw redirect("/login")
    }
    return json.login;
}



export const authCookie = createCookie("panel", {
    path: "/",
    sameSite: "lax",
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
});





export async function logout(){
    throw redirect("/",{
            headers:{
                "Set-Cookie": await authCookie.serialize("", {
                    maxAge: 0,
                })
            }
        }

    )
}