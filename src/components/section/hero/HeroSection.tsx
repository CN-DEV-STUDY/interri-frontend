import styled from 'styled-components';
import Section from '@/components/common/Section';
import Image from '@/components/ui/Image';
import Grid from '@/components/common/Grid';

/**
 * @description HeroSection 컴포넌트
 */
const HeroSection = () => {
	return (
		<Section width={'large'} color={'#474044'}>
			<Grid repeat={2} column>
				<HeroTextBox>
					<StyledHeading>지금 디자인하세요</StyledHeading>
				</HeroTextBox>
				<Image
					path={process.env.PUBLIC_URL + '/images/hero-image.jpg'}
					height={70}
				/>
			</Grid>
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
