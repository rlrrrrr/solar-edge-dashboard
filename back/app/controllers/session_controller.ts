import { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class SessionController {
  async store({ request, auth, response }: HttpContext) {
    const { identifier, password } = request.only(['identifier', 'password'])

    const user = await User.verifyCredentials(identifier, password)

    await auth.use('web').login(user)

    response.json('authenticated')
  }
}
