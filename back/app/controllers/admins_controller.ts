import type { HttpContext } from '@adonisjs/core/http'
import { inject } from '@adonisjs/core'
import { UserRepositoryService } from '#contracts/repository'
import { userSchema, passwordSchema } from '#utils/schemas'
import vine from '@vinejs/vine'
@inject()
export default class AdminsController {
  constructor(protected adminRepository: UserRepositoryService) {}
  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const { identifier, password } = request.body()
    const data = {
      identifier: identifier,
      password: password,
    }
    const validator = vine.compile(userSchema)
    const validatedData = await validator.validate(data)
    await this.adminRepository.save(validatedData.identifier, validatedData.password)
  }

  async updatePassword({ params, request }: HttpContext) {
    const password = request.body();
    const validator = vine.compile(passwordSchema);
    const validatedData = await validator.validate(password);
    await this.adminRepository.updatePassword(params.identifier, validatedData.password)
  }
}
