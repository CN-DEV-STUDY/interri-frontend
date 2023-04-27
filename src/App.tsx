import GlobalStyles from './GlobalStyes';
import MainHeader from '@/components/headers/MainHeader';
import HeroSection from '@/components/HeroSection';
import MainFooter from '@/components/footers/MainFooter';

function App() {
	return (
		<>
			<GlobalStyles />
			<MainHeader />
			<main>
				<HeroSection />
			</main>
			<MainFooter />
		</>
	);
}

export default App;
