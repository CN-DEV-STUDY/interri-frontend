import SecondaryHeading from '@/components/ui/SecondaryHeading';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import DesignCardList from '../common/card/DesignCardList';
import DesignCard from '../common/card/DesignCard';
import { ROUTES_DESIGN_REQUEST_DETAILS } from '@/routes/routes';
import { InteriorTrendsSectionType } from '../pages/index/types';
import React from 'react';

type Props = {
    interiorTrendsSection: InteriorTrendsSectionType[];
};

/**
 * @description 트렌드 섹션 컴포넌트
 */
const TrendSection = ({ interiorTrendsSection: trends }: Props) => {
    console.log('trends', trends);

    // view
    return (
        <Section>
            <Flex>
                <SecondaryHeading>인테리어 트렌드</SecondaryHeading>
                <MoreLink to=''>
                    <span>더보기</span>
                    <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M8.25 4.5l7.5 7.5-7.5 7.5'
                        />
                    </svg>
                </MoreLink>
            </Flex>
            {/* {trends.map((trend) => (
                <React.Fragment key={trend.styleId}>
                    <CustomLink to={''}>{trend.styleName}</CustomLink>
                    <DesignCardList>
                        {trend.styleInfos.map((styleInfo) => (
                            <Link
                                key={styleInfo.designReqId}
                                to={ROUTES_DESIGN_REQUEST_DETAILS}
                                state={{ designReqId: styleInfo.designReqId }}
                            >
                                <DesignCard
                                    userId={styleInfo.nickname}
                                    viewCount={styleInfo.viewCnt}
                                />
                            </Link>
                        ))}
                    </DesignCardList>
                </React.Fragment>
            ))} */}
        </Section>
    );
};

export default TrendSection;

// style
const Section = styled.div`
    position: relative;
    margin: 0 48px 10rem 48px;
`;

const Flex = styled.div`
    display: flex;
    align-items: end;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 3.5rem;
`;

const MoreLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;

    font-size: 14px;
    color: #1d2133;

    span {
        width: 52px;
        font-size: 2rem;
    }

    svg {
        width: 24px;
        height: 24px;
    }
`;

const CustomLink = styled(Link)`
    font-size: 2rem;
    border: 2px solid #495480;
    color: #495480;
    border-radius: 1000px;
    padding: 8px 40px;
    display: inline-block;
    margin-bottom: 30px;

    :link,
    :visited {
        text-decoration: none;
    }

    :hover,
    :active {
        background-color: #495480;
        color: #fff;
    }
`;
