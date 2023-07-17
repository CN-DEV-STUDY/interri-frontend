import DesignReqRegistHeader from '@/components/headers/DesignReqRegistHeader';
import { postDesignReqRegist } from '@/api/designReq';
import DesignReqRegistBody from './DesignReqRegistBody';
import designRequestState from '@/global/designRequest/designRequestState';
import { useRecoilValue } from 'recoil';
import ConfirmPopup from '../../../common/popup/ConfirmPopup';
import { useState } from 'react';

/**
 * @description 디자인 요청 등록하는 페이지 컴포넌트
 */
const DesignReqRegist = () => {
    const designRequest = useRecoilValue(designRequestState);
    const [confirmPopup, setConfirmPopup] = useState<boolean>(false);

    // 등록하기
    const onSubmit = (isTempSave: boolean) => {
        if (isTempSave) {
            console.log('임시저장');
        }
        if (!isTempSave) {
            setConfirmPopup(true);
        }
    };

    const submitDesignReq = async () => {
        console.log(designRequest);
        
        const data = await postDesignReqRegist(designRequest);
    };

    // view
    return (
        <>
            {confirmPopup && (
                <ConfirmPopup
                    title='등록하시겠습니까?'
                    onClose={setConfirmPopup}
                    onSubmit={submitDesignReq}
                />
            )}
            <DesignReqRegistHeader onSubmit={onSubmit} />
            <DesignReqRegistBody />
        </>
    );
};

export default DesignReqRegist;
