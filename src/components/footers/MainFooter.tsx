import styled from 'styled-components';

/**
 * @description 푸터 컴포넌트
 */
const MainFooter = () => {
	// view
	return <Footer>푸터</Footer>;
};

export default MainFooter;

// STYLED COMPONENTS
const Footer = styled.footer`
	position: fixed;
	width: 100%;
	left: 0;
	bottom: 0;

	font-size: 30px;

	background-color: black;
`;
