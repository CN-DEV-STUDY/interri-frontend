import { Jwt, LoginFormType } from '@/components/user/type'
import { atom } from 'recoil'

const userState = atom({
	key: 'userState',
	default: { isLoggedIn: false },
})

export default userState
