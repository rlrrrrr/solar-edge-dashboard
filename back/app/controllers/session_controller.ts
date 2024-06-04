import { HttpContext } from '@adonisjs/core/http'
import Admin from '#models/admin'

export default class SessionController {
  async store({ request, auth, response }: HttpContext) {
    const { identifier, password } = request.only(['identifier', 'password'])

    const admin = await Admin.verifyCredentials(identifier, password)

    await auth.use('web').login(admin)

    response.json('authenticated')
  }
}
