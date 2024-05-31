import {Form} from '@remix-run/react'
import {Label} from "components/ui/label"
import {Input} from "components/ui/input"
import {Button} from "components/ui/button"
import Title from 'components/ui/title'
import {ActionFunctionArgs, redirect} from "@remix-run/node";
import {authCookie} from "~/auth";


export async function action({request}: ActionFunctionArgs) {
  const formData: FormData = await request.formData();
  const response = await fetch(process.env.API_URL, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: "post",
    body: JSON.stringify(
        {
          identifier: formData.get("identifier"),
          password: formData.get("password")
        }
    )
  })
  if (response.status !== 200) {
    throw redirect("/login")
  }
  const cookieValue = {login:true};
  return redirect('/panel', {
    headers:{
      "Set-Cookie": await authCookie.serialize(cookieValue)
    }
  })
}

export default function Component() {
  return (
      <div
          className="flex min-h-screen items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-900">
        <div className="w-full max-w-md space-y-8">
          <div>
            <Title variant='centered'>
              Connectez-vous
            </Title>
          </div>
          <Form className="mt-8 space-y-6" method="post">
            <input defaultValue="true" name="remember" type="hidden"/>
            <div className="-space-y-px rounded-md shadow-sm">
              <div>
                <Label className="sr-only" htmlFor="email">
                  Identifiant
                </Label>
                <Input
                    autoComplete="Identifier"
                    className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                    id="identifier"
                    name="identifier"
                    placeholder="Entrez votre identifiant"
                    required
                    type="text"
                />
              </div>
              <div>
                <Label className="sr-only" htmlFor="password">
                  Mot de passe
                </Label>
                <Input
                    autoComplete="current-password"
                    className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-100 dark:placeholder-gray-400"
                    id="password"
                    name="password"
                    placeholder="Mot de passe"
                    required
                    type="password"
                />
              </div>
            </div>
            <div>
              <Button
                  className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-400 dark:text-gray-900 dark:hover:bg-indigo-500 dark:focus:ring-indigo-400"
                  type="submit"
              >
                Se connecter
              </Button>
            </div>
          </Form>
        </div>
      </div>
  )
}