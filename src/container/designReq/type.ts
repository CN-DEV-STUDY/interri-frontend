export interface DesignReqDetail {
    id: number; // 요청 id
    userId: string; // 요청 등록자
    styleNm: string; // 스타일
    sizeNm: string; // 평수
    housingTypeNm: string; // 주거 형태
    mainColor: string; // 메인 컬러
    subColor: string; // 서브 컬러
    maxPrice: number; // 최대 가격
    dueDate: string; // 만기일
    viewCnt: number;
    scrabCnt: number;
    reqInfoDetailResources: ReqInfoDetailResources[]; // 디자인 요청 정보
    reqDetailResResources: ReqDetailResResources[]; // 디자인 요청에 대한 응답
}

export interface ReqInfoDetailResources {
    infoId: number; // 개별 요청 내용 id
    roomTypeNm: string; // 공간
    content: string; // 요청 내용
    imgPathList: string[]; // 이미지 경로
}

export interface ReqDetailResResources {
    id: number; // 응답 id
    nickname: string; // 응답 등록자 닉네임
    profileImgPath: string; // 프로필 이미지 경로
    profileImgNm: string; // 프로필 이미지 파일 이름
    adoptionCnt: number; // 채택수
    viewCnt: number; // 조회수
    price: number; // 제시 가격
    repImgPath: string; // 대표 응답 이미지 경로
}
