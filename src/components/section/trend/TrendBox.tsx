import DesignCard from '@/components/common/card/DesignCard';
import DesignCardList from '@/components/common/card/DesignCardList';
import ChevronRight from '@/components/icons/ChevronRight';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface TrendBoxProps {
	title?: string;
}

/**
 * @description TrendBox 컴포넌트
 */
const TrendBox = ({ title }: TrendBoxProps) => {
	const array = [
		{
			userId: 'chaesumon',
			viewCount: 1250,
		},
		{
			userId: 'chaesumon',
			viewCount: 52,
		},
		{
			userId: 'chaesumon',
			viewCount: 32,
		},
		{
			userId: 'chaesumon',
			viewCount: 32,
		},
		{
			userId: 'chaesumon',
			viewCount: 32,
		},
	];

	// view
	return (
		<>
			<TrendLink to=''>
				{title}
				<ChevronRight />
			</TrendLink>
			<DesignCardList>
				{array.map((item) => (
					<DesignCard
						userId={item.userId}
						viewCount={item.viewCount}
					/>
				))}
			</DesignCardList>
		</>
	);
};

export default TrendBox;

// STYLED COMPONENTS
const TrendLink = styled(Link)`
	display: flex;
	align-items: center;
	font-size: 18px;

	grid-column: 1 / -1;
	text-decoration: none;
`;
