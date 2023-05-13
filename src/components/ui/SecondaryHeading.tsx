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
	font-weight: 600;
	line-height: 36px;
	text-shadow: 0px 4px 4px rgba(0, 26, 114, 0.4);
`;
