import { UserRepositoryService } from '#contracts/repository'
import { AuthentificationService } from '#contracts/auth-service'
import { ApplicationService } from '@adonisjs/core/types'

export default class AppProvider {
  constructor(protected app: ApplicationService) {}
  async boot() {
    const { AdminRepository } = await import('#services/admin-repository')
    const { AuthentificationSessionService } = await import('#services/auth_service')
    this.app.container.bind(AuthentificationService, () => {
      return this.app.container.make(AuthentificationSessionService)
    })
    this.app.container.bind(UserRepositoryService, () => {
      return this.app.container.make(AdminRepository)
    })
  }
}
