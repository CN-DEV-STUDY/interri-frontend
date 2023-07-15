export interface SelectListType {
    sizeList: SizeList[];
    housingTypeList: HousingTypeList[];
    colorList: string[];
    roomTypeList: RoomTypeList[];
    styleList: StyleList[];
}

// 평수
type SizeList = {
    id: string;
    name: string;
};

// 주거 형태
type HousingTypeList = {
    id: string;
    name: string;
};

// 공간
type RoomTypeList = {
    id: string;
    name: string;
};

// 스타일
type StyleList = {
    id: string;
    name: string;
};

export type DesignRequest = {
    userId: string;
    sizeId: string;
    housingTypeId: string;
    mainColor: string;
    subColor: string;
    maxPrice: number;
    dueDate: Date;
    styleId: string[];
    tempYn: string;
    designRequestInfos: DesignRequestInfo[];
};

export type DesignRequestInfo = {
    images: File[];
    roomTypeId: number;
    content: string;
};
