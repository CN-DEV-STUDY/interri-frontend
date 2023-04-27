import styled from 'styled-components';

/**
 * @description 유저 메뉴 컴포넌트
 */
const UserMenu = () => {
	// view
	return <CircleMenu />;
};

export default UserMenu;

// STYLED COMPONENTS
const CircleMenu = styled.div`
	width: 50px;
	height: 50px;
	background-color: aqua;
	border-radius: 50%;
`;
