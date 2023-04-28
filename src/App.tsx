import GlobalStyles from './GlobalStyes';
import MainHeader from '@/components/headers/MainHeader';
import HeroSection from '@/components/section/HeroSection';
import MainFooter from '@/components/footers/MainFooter';
import TrendSection from '@/components/section/TrendSection';

function App() {
	return (
		<>
			<GlobalStyles />
			<MainHeader />
			<main>
				<HeroSection />
				<TrendSection />
			</main>
			<MainFooter />
		</>
	);
}

export default App;
