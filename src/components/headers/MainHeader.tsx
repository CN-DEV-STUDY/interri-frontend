import styled from 'styled-components';
import Logo from '@/components/navbar/Logo';
import Menu from '@/components/navbar/Menu';
import Button from '@/components/ui/Button';
import UserMenu from '@/components/navbar/UserMenu';

/**
 * @description 메인 헤더 컴포넌트
 */
const MainHeader = () => {
	// view
	return (
		<Header>
			<Logo />
			<Menu />
			<Wrapper>
				<Button text='글 쓰기' />
				<UserMenu />
			</Wrapper>
		</Header>
	);
};

export default MainHeader;

// STYLED COMPONENTS
const Header = styled.header`
	display: flex;
	align-items: center;
	justify-content: space-between;
	background-color: green;

	padding: 10px 40px;
`;

const Wrapper = styled.div`
	display: flex;
	gap: 5px;
`;
