import Admin from '#models/admin'
import { Authenticator } from '@adonisjs/auth'
import { Authenticators } from '@adonisjs/auth/types'
import { AuthentificationService } from '#contracts/auth-service.js'

export class AuthentificationSessionService implements AuthentificationService {
  async auth(identifier: string, password: string, auth: Authenticator<Authenticators>) {
    const admin = await Admin.verifyCredentials(identifier, password)
    await auth.use('web').login(admin)
  }
}
