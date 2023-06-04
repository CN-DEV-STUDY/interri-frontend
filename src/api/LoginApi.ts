import { LoginFormType } from '@/components/user/type'
import axios from 'axios'

export const postLoginRequest = async (loginForm: LoginFormType) => {
	const { data } = await axios.post(
		process.env.REACT_APP_BASE_URL + '/login',
		loginForm
	)

	return data.data
}
