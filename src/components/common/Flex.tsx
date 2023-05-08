import styled from 'styled-components';

interface FlexProps {
	gridColumn?: string;
	column?: boolean; // flex-direction
	gap?: number;
	space?: string;
	mb?: number; // margin-bottom
	children: React.ReactNode;
}

/**
 * @description Flex 컴포넌트
 */
const Flex = ({ gridColumn, column, gap, space, mb, children }: FlexProps) => {
	// view
	return (
		<StyledFlex
			gridColumn={gridColumn}
			column={column}
			space={space}
			mb={mb}
			gap={gap}
		>
			{children}
		</StyledFlex>
	);
};

export default Flex;

// STYLED COMPONENTS
const StyledFlex = styled.div<FlexProps>`
	display: flex;
	${(props) => props.column && `flex-direction: column;`}
	align-items: center;

	// gap
	${(props) => 'gap:' + props.gap + 'px;'}

	// space
	${(props) => {
		if (props.space === 'between') {
			return 'justify-content: space-between;';
		} else if (props.space === 'around') {
			return 'justify-content: space-around;';
		}
	}}

	// margin
	${(props) => `margin-bottom: ${props.mb}px;`}

	${(props) => props.gridColumn === 'endToEnd' && 'grid-column: 1 / -1;'}
`;
