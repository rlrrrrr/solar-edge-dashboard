import { HttpContext } from '@adonisjs/core/http'
import Variables from '#models/variables'

export default class CalendarController {
  async get({ response }: HttpContext) {
    let calendar = await Variables.query().where('key', 'calendar').first();
    if (calendar) {
      response.send(calendar.value);
    } else {
      response.status(204);
    }
  }

  async set({ request, response }: HttpContext) {
    await Variables.updateOrCreate({ key: 'calendar' }, { value: request.raw() || undefined });
    response.status(200);
  }
}