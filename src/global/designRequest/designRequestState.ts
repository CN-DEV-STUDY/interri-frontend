import { atom } from 'recoil';
import { DesignRequest } from '@/components/pages/design/request/types';

const designRequestState = atom<DesignRequest>({
    key: 'designRequestState',
    default: {
        sizeId: '',
        housingTypeId: '',
        mainColor: '',
        subColor: '',
        maxPrice: 0,
        dueDate: new Date(),
        styleId: [],
        tempYn: 'N',
        designRequestInfos: [{ image: {} as File, roomTypeId: '', content: '' }],
    },
    // default: {} as DesignRequest,
});

export default designRequestState;
