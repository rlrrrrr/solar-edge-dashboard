import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'variables'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.string('key').notNullable().unique()
      table.text('value').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}