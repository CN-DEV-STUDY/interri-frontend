import styled from 'styled-components';

interface SectionProps {
	width: string;
	color?: string;
	children: React.ReactNode;
}

/**
 * @description 섹션 컴포넌트
 */
const Section = ({ width, color, children }: SectionProps) => {
	// view
	return (
		<StyledSection color={color}>
			<SectionContainer width={width}>{children}</SectionContainer>
		</StyledSection>
	);
};

export default Section;

// STYLED COMPONENTS
const StyledSection = styled.section`
	padding: 4.8rem 0;
	background-color: ${(props) => props.color || '#fff'};
`;

const SectionContainer = styled.div<SectionProps>`
	margin: 0 auto;
	${(props) => {
		console.log(props.width);
		if (props.width === 'large') {
			return 'width: 1300px';
		}

		if (props.width === 'mideum') {
			return 'width: 900px';
		}
	}}
`;
