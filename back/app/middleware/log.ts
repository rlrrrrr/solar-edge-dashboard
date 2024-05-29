import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import logger from '@adonisjs/core/services/logger';

export default class LogMiddleware {

  async handle(
    ctx: HttpContext,
    next: NextFn,
  ) {
    let ret = next();
    logger.debug(ctx.response.getStatus() + " " + ctx.request.method() + " " + ctx.request.url());

    return ret;
  }
}