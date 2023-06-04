import styled from 'styled-components'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import Input from '../ui/Input'

type FormData = {
	email: string
	password: string
}

function LoginForm() {
	const {
		handleSubmit,
		control,
		formState: { errors },
	} = useForm<FormData>()

	const onSubmit: SubmitHandler<FormData> = (data) => {
		console.log(data)
	}

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
