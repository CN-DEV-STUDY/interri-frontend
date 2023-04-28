import Section from '@/components/common/Section';
import SectionContainer from '@/components/common/SectionContainer';
import ChevronRight from '@/components/icons/ChevronRight';
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
				<div>
					<h2>인테리어 트렌드</h2>
					<Link to=''>더보기</Link>
				</div>
				<Link to=''>
					모던
					<ChevronRight />
				</Link>
			</SectionContainer>
		</Section>
	);
};

export default TrendSection;
