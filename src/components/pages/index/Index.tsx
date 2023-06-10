import MainHeader from '@/components/headers/MainHeader';
import HeroSection from '@/components/section/HeroSection';
import MainFooter from '@/components/footers/MainFooter';
import TrendSection from '@/components/section/TrendSection';
import { getIndexRequest } from '@/api/index';
import { useQuery } from '@tanstack/react-query';
import { DataType } from './types';

/**
 * @description index 페이지 컴포넌트
 */
const Index = () => {
    // react query
    const { isLoading, error, data } = useQuery<DataType>({
        queryKey: ['index'],
        queryFn: () => getIndexRequest(),
    });

    console.log('INDEX', data);

    // loading
    if (isLoading) return <>${'Loading'}</>;

    // error
    if (error) return <>${'ERROR'}</>;

    return (
        <>
            <MainHeader />
            <main>
                <HeroSection heroSection={data!.heroSection!} />
                <TrendSection
                    interiorTrendsSection={data!.interiorTrendsSection}
                />
            </main>
            <MainFooter />
        </>
    );
};

export default Index;
