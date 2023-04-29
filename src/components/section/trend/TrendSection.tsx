import Section from '@/components/common/Section';
import SectionContainer from '@/components/common/SectionContainer';
import SecondaryHeading from '@/components/ui/SecondaryHeading';
import TrendBox from './TrendBox';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

/**
 * @description 트렌드 섹션 컴포넌트
 *
 */
const TrendSection = () => {
	// view
	return (
		<Section>
			<SectionContainer>
				<SecondaryHeading>인테리어 트렌드</SecondaryHeading>
				<MoreLink to=''>더보기</MoreLink>

				<TrendBox title={'모던'} />
				<TrendBox title={'클래식'} />
			</SectionContainer>
		</Section>
	);
};

export default TrendSection;

// STYLED COMPONENTS
const MoreLink = styled(Link)`
	font-size: 14px;
	justify-self: end;
`;
