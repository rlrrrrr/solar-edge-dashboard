import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Variables extends BaseModel {
  @column({ isPrimary: true })
  declare key: string

  @column()
  declare value: string
}
