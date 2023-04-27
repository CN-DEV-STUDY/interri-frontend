import Section from '@/components/common/Section';
import styled from 'styled-components';
import Image from '@/components/ui/Image';

const HeroSection = () => {
	return (
		<Section>
			<Hero>
				<HeroTextBox>
					<StyledHeading>지금 디자인하세요</StyledHeading>
				</HeroTextBox>
				<Image
					path={process.env.PUBLIC_URL + '/images/hero-image.jpg'}
					height={50}
				/>
			</Hero>
		</Section>
	);
};

export default HeroSection;

// STYLED COMPONENTS
const Hero = styled.div`
	max-width: 130rem;
	margin: 0 auto;

	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const HeroTextBox = styled.div``;

const StyledHeading = styled.h1`
	font-size: 6.2rem;
	font-weight: 700;
`;
