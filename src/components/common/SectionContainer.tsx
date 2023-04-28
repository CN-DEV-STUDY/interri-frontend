import styled from 'styled-components';

interface SectionContainerProps {
	children: React.ReactNode;
}

const SectionContainer = ({ children }: SectionContainerProps) => {
	return <StyledSectionContainer>{children}</StyledSectionContainer>;
};

export default SectionContainer;

const StyledSectionContainer = styled.div`
	width: 1300px;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-around;
`;
