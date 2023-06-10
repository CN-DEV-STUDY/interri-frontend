export interface DataType {
    heroSection: HeroType;
    interiorTrendsSection: InteriorTrendsSectionType[];
}

export interface HeroType {
    numberOfDesigners: number;
}

export interface InteriorTrendsSectionType {
    styleId: number;
    styleName: string;
    styleInfos: StyleInfo[];
}

export interface StyleInfo {
    designReqId: number;
    filePath: string;
    maxPrice: number;
    nickname: string;
    scrabCnt: number;
    viewCnt: number;
}

export type DotsProps = {
    currentPageNumber: number;
};
