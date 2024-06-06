import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { RepositoryService } from '#contracts/repository'
import logger from '@adonisjs/core/services/logger'
@inject()
export default class AdminsController {
  constructor(protected adminRepository: RepositoryService) {}

  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const { identifier, password } = request.body()
    await this.adminRepository.save(identifier, password)
  }
}
