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
		<StyledSection color={color} width={width}>{children}</StyledSection>
	);
};

export default Section;

// STYLED COMPONENTS

const StyledSection = styled.div<SectionProps>`
	position: relative;

	display: flex;
	align-items: center;
	justify-content: center;

	padding: 4rem 0;
	margin: 0 auto 10rem auto;
	background-color: ${(props) => props.color};

	${(props) => {
		if (props.width === 'large') {
			return 'min-width: 144rem';
		}

		if (props.width === 'mideum') {
			return 'min-width: 900px';
		}
	}}
`;
