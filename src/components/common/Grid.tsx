import styled from 'styled-components';

interface GridProps {
	repeat: number;
	row?: boolean;
	column?: boolean;
	gridColumn?: string;
	children: React.ReactNode;
}

/**
 * @description Grid 컴포넌트
 */
const Grid = ({ repeat, row, column, gridColumn, children }: GridProps) => {
	return (
		<StyledGrid
			repeat={repeat}
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
	align-items: center;
	justify-content: space-around;
	row-gap: 2rem;

	// grid-template-columns
	${(props) =>
		props.column &&
		'grid-template-columns: repeat(' + props.repeat + ', 1fr);'}

	// grid-template-rows
	${(props) =>
		props.row && 'grid-template-rows: repeat(' + props.repeat + ', 1fr);'}

	// grid-column
	${(props) => props.gridColumn && 'grid-column: ' + props.gridColumn}
`;
