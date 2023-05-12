import SecondaryHeading from '@/components/ui/SecondaryHeading';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import CustomLink from '../ui/CustomLink';
import TrendBox from './TrendBox';

/**
 * @description 트렌드 섹션 컴포넌트
 */
const TrendSection = () => {
	// view
	return (
		<Section>
			<Flex>
				<SecondaryHeading>인테리어 트렌드</SecondaryHeading>
				<MoreLink to=''>더보기</MoreLink>
			</Flex>
			<Flex>
				<TrendBox title={'모던'} />
			</Flex>
			<Flex>
				<TrendBox title={'클래식'} />
			</Flex>

			{/* <Grid repeat={2} column>
				
				

				
			</Grid> */}
		</Section>
	);
};

export default TrendSection;

// STYLED COMPONENTS
const Section = styled.div`
	padding: 0 4rem;
	margin: 100px auto;

`;

const Flex = styled.div`
	display: flex;
	align-items: end;
	justify-content: space-between;
	min-width: inherit;	

`;

const MoreLink = styled(Link)`
	font-size: 14px;
	color: #1D2133;
`;


