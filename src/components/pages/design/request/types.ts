export interface SelectListType {
    sizeList: SizeList[];
    housingTypeList: HousingTypeList[];
    colorList: string[];
    roomTypeList: RoomTypeList[];
    styleList: StyleList[];
}

// 평수
type SizeList = {
    id: number;
    name: string;
};

// 주거 형태
type HousingTypeList = {
    id: number;
    name: string;
};

// 공간
type RoomTypeList = {
    id: number;
    name: string;
};

// 스타일
type StyleList = {
    id: string;
    name: string;
};

export type DesignRequest = {
    userId: number;
    sizeId: number;
    housingTypeId: number;
    mainColor: string;
    subColor: string;
    maxPrice: number;
    dueDate: Date;
    styleId: number[];
    designRequestInfos: DesignRequestInfo[];
};

export type DesignRequestInfo = {
    images: File[];
    roomTypeId: number;
    content: string;
};
