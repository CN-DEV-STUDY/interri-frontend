import styled from 'styled-components';

interface SectionContainerProps {
	children: React.ReactNode;
}

/**
 * @description SectionContainer 컴포넌트
 */
const SectionContainer = ({ children }: SectionContainerProps) => {
	// view
	return <StyledSectionContainer>{children}</StyledSectionContainer>;
};

export default SectionContainer;

// STYLED COMPONENTS
const StyledSectionContainer = styled.div`
	width: 1300px;
	margin: 0 auto;

	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	justify-content: space-around;

	row-gap: 2rem;
`;
