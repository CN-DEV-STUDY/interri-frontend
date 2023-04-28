import styled from 'styled-components';

interface SectionProps {
	color?: string;
	children: React.ReactNode;
}

/**
 * @description 섹션 컴포넌트
 */
const Section = ({ color, children }: SectionProps) => {
	console.log('color', color);
	// view
	return <StyledSection color={color}>{children}</StyledSection>;
};

export default Section;

// STYLED COMPONENTS
const StyledSection = styled.section`
	padding: 4.8rem 0;
	background-color: ${(props) => props.color || '#fff'};
`;
