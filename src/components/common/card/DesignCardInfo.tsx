import styled from 'styled-components';
import Grid from '../Grid';

interface DesignCardInfoProps {
	userId: string;
	viewCount: number;
}

/**
 * @description 디자인 카드 정보 컴포넌트
 */
const DesignCardInfo = ({ userId, viewCount }: DesignCardInfoProps) => {
	// view
	return (
		<Grid column number={2}>
			<UserId>{userId}</UserId>
			<ViewCount>조회수: {viewCount}</ViewCount>
			<div>좋아요 / 채택 금액</div>
		</Grid>
	);
};

export default DesignCardInfo;

// STYLED COMPONENTS
const UserId = styled.div`
	font-size: 20px;
	font-weight: 600;
`;

const ViewCount = styled.div`
	justify-self: end;
	font-size: 15px;
`;
