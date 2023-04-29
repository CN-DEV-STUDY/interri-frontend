import styled from 'styled-components';

/**
 * @description ChevronRight 컴포넌트(오른쪽 화살표)
 */
const ChevronRight = () => {
	// view
	return (
		<Svg
			xmlns='http://www.w3.org/2000/svg'
			fill='none'
			viewBox='0 0 24 24'
			strokeWidth={1.5}
			stroke='currentColor'
			className='w-6 h-6'
		>
			<path
				strokeLinecap='round'
				strokeLinejoin='round'
				d='M8.25 4.5l7.5 7.5-7.5 7.5'
			/>
		</Svg>
	);
};

export default ChevronRight;

// STYLED COMPONENTS
const Svg = styled.svg`
	width: 24px;
	height: 24px;
`;
