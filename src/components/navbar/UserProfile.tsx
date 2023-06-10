import styled from 'styled-components'
import { MouseEvent } from 'react'
import { useRecoilValue } from 'recoil'
import userState from '@/global/user/userState'

type CircleProps = {
	isLoggedIn?: boolean
}

/**
 * @description 유저 프로필 컴포넌트
 */
interface Props {
	onClick: (e: React.MouseEvent<HTMLDivElement>) => void
}

function UserProfile({ onClick }: Props) {
	const { isLoggedIn } = useRecoilValue(userState)

	console.log('isLoggedIn:', isLoggedIn)

	// view
	return (
		<>
			{isLoggedIn ? (
				<Circle onClick={onClick} isLoggedIn={true} />
			) : (
				<Circle onClick={onClick} isLoggedIn={false} />
			)}
		</>
	)
}

export default UserProfile

// STYLED COMPONENTS
const Circle = styled.div<CircleProps>`
	width: 40px;
	height: 40px;
	background-color: ${(props) => (props.isLoggedIn ? 'blue' : 'red')};
	border-radius: 50%;
`
