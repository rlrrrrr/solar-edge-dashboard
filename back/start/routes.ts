/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import ApiController from '#controllers/api_controller'
import SessionController from '#controllers/session_controller'
import AdminsController from "#controllers/admins_controller";
import CalendarController from '#controllers/calendar_controller'
import ApiKeyController from "#controllers/api_key_controller";

router.post('/login', [SessionController, 'store']);
router.post('/signin', [AdminsController, 'store'])
router.put('/admin/:identifier', [AdminsController, 'updatePassword']).use(middleware.auth());

router.post('/admin/solarEdgeKey', [ApiKeyController, 'setSolarEdgeKey']).use(middleware.auth());

router.get('/api/electricity', [ApiController, 'electricity']);
router.get('/api/co2Production', [ApiController, 'co2Production']);
router.get('/api/energyDetails', [ApiController, 'energyDetails']);
router.get('/api/daily_solar_radiation', [ApiController, 'daily_solar_radiation']);
router.get('/api/hourly_prediction_solar_radiation', [
  ApiController,
  'hourly_prediction_solar_radiation',
])

router.get('/calendar', [CalendarController, 'get']);
router.post('/calendar', [CalendarController, 'set']).use(middleware.auth());
