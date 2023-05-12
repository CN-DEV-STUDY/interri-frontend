import styled from 'styled-components';

interface SecondaryHeadingProps {
	children: React.ReactNode;
}

/**
 * @description h2 컴포넌트
 */
const SecondaryHeading = ({ children }: SecondaryHeadingProps) => {
	// view
	return <StyledH2>{children}</StyledH2>;
};

export default SecondaryHeading;

// STYLED COMPONENTS
const StyledH2 = styled.h2`
	font-size: 3rem;
`;
