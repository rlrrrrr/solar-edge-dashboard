import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { RepositoryService } from '#contracts/repository'
import {adminSchema} from "#utils/schemas";
import vine from '@vinejs/vine'
@inject()
export default class AdminsController {
  constructor(protected adminRepository: RepositoryService) {}



  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const { identifier, password } = request.body()
    const data = {
      identifier:identifier,
      password:password
    }
    const validator = vine.compile(adminSchema);
    const validatedData = await validator.validate(data);
    await this.adminRepository.save(validatedData.identifier, validatedData.password)
  }
}
