import styled from 'styled-components';

interface FlexProps {
	children: React.ReactNode;
	gridColumn?: string;
}

/**
 * @description Flex 컴포넌트
 */
const Flex = ({ gridColumn, children }: FlexProps) => {
	return <StyledFlex gridColumn={gridColumn}>{children}</StyledFlex>;
};

export default Flex;

// STYLED COMPONENTS
const StyledFlex = styled.div<FlexProps>`
	display: flex;
	flex-direction: row;
	justify-content: space-between;

	${(props) => props.gridColumn === 'endToEnd' && 'grid-column: 1 / -1'}
`;
