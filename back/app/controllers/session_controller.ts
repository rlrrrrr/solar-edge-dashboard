import { HttpContext } from '@adonisjs/core/http'
import { AuthentificationService } from '#contracts/auth-service'
import { inject } from '@adonisjs/core'

@inject()
export default class SessionController {
  constructor(protected authService: AuthentificationService) {}
  async store({ request, auth, response }: HttpContext) {
    const { identifier, password } = request.only(['identifier', 'password'])

    await this.authService.auth(identifier, password, auth)
    response.json({ value: 'authenticated' })
  }
}
