import styled from 'styled-components'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Input from '../ui/Input'
import { LoginFormType } from './type'

import { postLoginRequest } from '@/api/LoginApi'
import { useNavigate } from 'react-router-dom'
import { useCookies } from 'react-cookie'
import { useSetRecoilState } from 'recoil'
import userState from '@/global/user/userState'
import { useMutation } from '@tanstack/react-query'

function LoginForm() {
	// cookie
	const [cookies, setCookies] = useCookies()
	const setUserState = useSetRecoilState(userState)

	// react-hook-form
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<LoginFormType>()

	const onSubmit: SubmitHandler<LoginFormType> = (data) => {
		console.log('onSubmit:', data)
		loginMutation.mutate(data)
	}

	// navigation
	const navigate = useNavigate()

	// react-query
	const loginMutation = useMutation(postLoginRequest, {
		onMutate: (varialble) => {
			console.log('onMutate', varialble)
		},
		onSuccess: (data, variables, context) => {
			console.log('success', data, variables, context)
			setCookies('accessToken', data.accessToken)
			setCookies('refreshToken', data.refreshToken)
			setUserState({ isLoggedIn: true })

			navigate('/')
		},
	})

	// view
	return (
		<Form onSubmit={handleSubmit(onSubmit)}>
			<Controller
				name='email'
				control={control}
				rules={{ required: true }}
				defaultValue=''
				render={({ field }) => (
					<Input
						{...field}
						placeholder='이메일'
						hasError={errors.email ? true : false}
					/>
				)}
			/>
			<Controller
				name='password'
				control={control}
				rules={{ required: true }}
				defaultValue=''
				render={({ field }) => (
					<Input
						{...field}
						placeholder='비밀번호'
						hasError={errors.password ? true : false}
					/>
				)}
			/>
			<Button>로그인</Button>
		</Form>
	)
}

export default LoginForm

// style
const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;
`

const Button = styled.button`
	border: none;
	border-radius: 9px;
	background-color: #1d2133;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	padding: 10px 45px;
	width: 300px;
	height: 50px;

	display: flex;
	align-items: center;
	justify-content: center;

	cursor: pointer;
`
