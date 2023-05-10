import styled from 'styled-components';

/**
 * @description 로고 컴포넌트
 *
 */
const Logo = () => {
	// view
	return (
		<TextLogo>
			LOGO
			
		</TextLogo>
			/* <Img
				src={process.env.PUBLIC_URL + '/images/apple-logo.png'}
				alt='interri logo'
			/> */
		
	);
};

export default Logo;

// STYLED COMPONENTS
const Img = styled.img`
	width: 100px;
`;


const TextLogo = styled.div`
	font-size: 3.6rem;
	font-weight: 700;
`;