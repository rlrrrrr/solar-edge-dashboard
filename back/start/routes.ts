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
import AdminController from '#controllers/admin_controller'
const SessionController = () => import('#controllers/session_controller')
const UsersController = () => import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router
  .get('/private', async () => {
    return {
      private: 'private',
    }
  })
  .use(middleware.auth())

router.post('/login', [SessionController, 'store'])

router.post('/signin', [UsersController, 'store'])

router.get('/api/electricity', [ApiController, 'electricity'])
router.get('/api/co2Production', [ApiController, 'co2Production'])
router.get('/api/energyDetails', [ApiController, 'energyDetails'])

router.get('/api/daily_solar_radiation', [ApiController, 'daily_solar_radiation'])
router.get('/api/hourly_prediction_solar_radiation', [ApiController, 'hourly_prediction_solar_radiation'])

router.post('/admin/solarEdgeKey', [AdminController, 'setSolarEdgeKey'])