import Section from '@/components/common/Section';
import SecondaryHeading from '@/components/ui/SecondaryHeading';
import TrendBox from '@/components/section/trend/TrendBox';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Grid from '@/components/common/Grid';

/**
 * @description 트렌드 섹션 컴포넌트
 */
const TrendSection = () => {
	// view
	return (
		<Section width={'large'}>
			<Grid repeat={2} column>
				<SecondaryHeading>인테리어 트렌드</SecondaryHeading>
				<MoreLink to=''>더보기</MoreLink>

				<TrendBox title={'모던'} />
				<TrendBox title={'클래식'} />
			</Grid>
		</Section>
	);
};

export default TrendSection;

// STYLED COMPONENTS
const MoreLink = styled(Link)`
	font-size: 14px;
	justify-self: end;
`;
