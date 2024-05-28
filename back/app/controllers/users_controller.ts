import type { HttpContext } from '@adonisjs/core/http'
import { randomUUID } from 'node:crypto'
import User from '#models/user'

export default class UsersController {
  /**
   * Display a list of resource
   */
  async index({}: HttpContext) {}

  /**
   * Handle form submission for the create action
   */
  async store({ request }: HttpContext) {
    const user = new User()
    const uuid = randomUUID()
    const { identifier, password } = request.body()
    user.id = uuid
    user.identifier = identifier
    user.password = password
    await user.save()
  }

}
