import { atom } from 'recoil';
import designRequest from './designRequestType';

const designRequestState = atom<designRequest>({
	key: 'designRequestState',
	default: {
		userId: 0,
		sizeId: 0,
		housingTypeId: 0,
		mainColor: '',
		subColor: '',
		maxPrice: 0,
		dueDate: new Date(),
		styleId: 0,
		designRequestInfos: [{ images: [], roomTypeId: 0, content: '' }],
	},
});

export default designRequestState;
