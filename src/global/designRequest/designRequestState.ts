import { atom } from 'recoil';
import { DesignRequest } from '@/components/pages/design/request/types';

const designRequestState = atom<DesignRequest>({
    key: 'designRequestState',
    // default: {
    //     userId: 0,
    //     sizeId: 0,
    //     housingTypeId: 0,
    //     mainColor: '',
    //     subColor: '',
    //     maxPrice: 0,
    //     dueDate: new Date(),
    //     styleId: 0,
    //     designRequestInfos: [{ images: [], roomTypeId: 0, content: '' }],
    // },
    default: {} as DesignRequest,
});

export default designRequestState;
