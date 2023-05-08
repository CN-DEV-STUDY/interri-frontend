import styled from 'styled-components';
import Image from '@/components/ui/Image';
import DesignCardInfo from '@/components/common/card/DesignCardInfo';

interface DesignCardProps {
	userId: string;
	viewCount: number;
}

interface CardImageProps {
	url: string;
}

/**
 * @description DesignCard 컴포넌트
 */
const DesignCard = ({ userId, viewCount }: DesignCardProps) => {
	// view
	return (
		<CardContainer>
			<CardImage
				url={process.env.PUBLIC_URL + '/images/design-req1.jpg'}
			/>
			<DesignCardInfo userId={userId} viewCount={viewCount} />
		</CardContainer>
	);
};

export default DesignCard;

// STYLED COMPONENTS
const CardContainer = styled.div`
	width: 25rem;
`;

const CardImage = styled.div<CardImageProps>`
	background-image: url(${(props) => props.url});
	background-size: cover;
	height: 20rem;
	border-radius: 9px;
`;
