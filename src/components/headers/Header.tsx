import styled from 'styled-components';

interface HeaderProps {
	children: React.ReactNode;
}

/**
 * @description 공통 헤더 컴포넌트
 */
const Header = ({ children }: HeaderProps) => {
	// view
	return (
		<StyledHeader>
			<HeaderContainer>{children}</HeaderContainer>
		</StyledHeader>
	);
};

export default Header;

// STYLED COMPONENTS
const StyledHeader = styled.header`
	background-color: #fff;
`;

const HeaderContainer = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px 40px;
	margin: 0 auto;
`;
