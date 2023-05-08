import MainHeader from '@/components/headers/MainHeader';
import HeroSection from '@/components/section/hero/HeroSection';
import MainFooter from '@/components/footers/MainFooter';
import TrendSection from '@/components/section/trend/TrendSection';

/**
 * @description App 컴포넌트
 */
function App() {
	// view
	return (
		<>
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
