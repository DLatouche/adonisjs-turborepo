import router from '@adonisjs/core/services/router'
import { User, roles } from '@repo/type'

router.get('/', async () => {
  const user: User = {
    id: '1',
    role: roles.admin,
  }
  return {
    user,
  }
})
