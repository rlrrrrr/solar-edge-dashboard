import Admin from '#models/admin'
import UuidGenerator from '#services/uuid-generator'
import { inject } from '@adonisjs/core'
import { RepositoryService } from '#contracts/repository'

@inject()
export class AdminRepository implements RepositoryService {
  constructor(protected uuidGenerator: UuidGenerator) {}

  async save(identifier: string, password: string) {
    const uuid = this.uuidGenerator.generate()
    const admin = new Admin()
    admin.id = uuid
    admin.identifier = identifier
    admin.password = password
    await admin.save()
  }
}
