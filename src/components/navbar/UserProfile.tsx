import styled from 'styled-components'
import { MouseEvent } from 'react'
import { useRecoilValue } from 'recoil'
import userState from '@/global/user/userState'

type CircleProps = {
	loggedIn?: boolean
}

/**
 * @description 유저 프로필 컴포넌트
 */
interface Props {
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

function UserProfile({ onClick }: Props) {
	const loggedIn = useRecoilValue(userState)
	console.log('loggedIn:', loggedIn)

	// view
	return (
		<>
			{loggedIn ? (
				<Circle onClick={onClick} loggedIn={true} />
			) : (
				<Circle onClick={onClick} loggedIn={false} />
			)}
		</>
	)
}

export default UserProfile

// STYLED COMPONENTS
const Circle = styled.div<CircleProps>`
	width: 40px;
	height: 40px;
	background-color: ${(props) => (props.loggedIn ? 'blue' : 'red')};
	border-radius: 50%;
`
