import { RepositoryService } from '#contracts/repository'
import app from '@adonisjs/core/services/app'

export default class AppProvider {
  async boot() {
    const { AdminRepository } = await import('#services/admin-repository')

    app.container.bind(RepositoryService, () => {
      return app.container.make(AdminRepository)
    })
  }
}
