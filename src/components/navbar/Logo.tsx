import styled from 'styled-components';

/**
 * @description 로고 컴포넌트
 *
 */
const Logo = () => {
	// view
	return (
		<a href='#'>
			<Img
				src={process.env.PUBLIC_URL + '/images/apple-logo.png'}
				alt='interri logo'
			/>
		</a>
	);
};

export default Logo;

// STYLED COMPONENTS
const Img = styled.img`
	width: 100px;
`;
