import styled from 'styled-components';

interface SectionProps {
	children: React.ReactNode;
}

/**
 * @description 섹션 컴포넌트
 */
const Section: React.FC<SectionProps> = ({ children }) => {
	// view
	return <StyledSection>{children}</StyledSection>;
};

export default Section;

// STYLED COMPONENTS
const StyledSection = styled.section`
	padding: 4.8rem 0;
	background-color: beige;
`;
