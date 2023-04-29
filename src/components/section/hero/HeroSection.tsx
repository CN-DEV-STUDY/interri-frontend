import Section from '@/components/common/Section';
import styled from 'styled-components';
import Image from '@/components/ui/Image';
import SectionContainer from '@/components/common/SectionContainer';

/**
 * @description HeroSection 컴포넌트
 */
const HeroSection = () => {
	return (
		<Section color={'#474044'}>
			<SectionContainer>
				<HeroTextBox>
					<StyledHeading>지금 디자인하세요</StyledHeading>
				</HeroTextBox>
				<Image
					path={process.env.PUBLIC_URL + '/images/hero-image.jpg'}
					height={70}
				/>
			</SectionContainer>
		</Section>
	);
};

export default HeroSection;

// STYLED COMPONENTS
const HeroTextBox = styled.div``;

const StyledHeading = styled.h1`
	font-size: 6.2rem;
	font-weight: 700;
	color: #fff;
`;
