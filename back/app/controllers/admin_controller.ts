import { HttpContext } from '@adonisjs/core/http'
import env from '#start/env'

export default class AdminController {
  async setSolarEdgeKey({ request, response }: HttpContext) {
    let {key} = request.body();
    if (!key) response.abort({ message: "Missing parameter: key" });
    env.set('SOLAREDGE_APIKEY', key);
  }
}
