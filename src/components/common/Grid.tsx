import styled from 'styled-components';

interface GridProps {
	number: number;
	row?: boolean;
	column?: boolean;
	gridColumn?: string;
	children: React.ReactNode;
}

/**
 * @description Grid 컴포넌트
 */
const Grid = ({ number, row, column, gridColumn, children }: GridProps) => {
	return (
		<StyledGrid
			number={number}
			row={row}
			column={column}
			gridColumn={gridColumn}
		>
			{children}
		</StyledGrid>
	);
};

export default Grid;

// STYLED COMPONENTS
const StyledGrid = styled.div<GridProps>`
	margin-top: 15px;
	display: grid;
	row-gap: 2rem;

	// grid-template-columns
	${(props) =>
		props.column &&
		'grid-template-columns: repeat(' + props.number + ', 1fr);'}

	// grid-template-rows
	${(props) =>
		props.row && 'grid-template-rows: repeat(' + props.number + ', 1fr);'}

	// grid-column
	${(props) => props.gridColumn && 'grid-column: ' + props.gridColumn}
`;
