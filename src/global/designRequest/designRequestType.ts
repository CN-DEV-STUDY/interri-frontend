import designRequestInfo from './designRequetInfoType';

type designRequest = {
	userId: number;
	sizeId: number;
	housingTypeId: number;
	mainColor: string;
	subColor: string;
	maxPrice: number;
	dueDate: Date;
	styleId: number;
	designRequestInfos: designRequestInfo[];
};

export default designRequest;
