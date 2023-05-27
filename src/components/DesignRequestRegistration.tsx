import DesignReqRegistHeader from '@/components/headers/DesignReqRegistHeader';
import { postDesignReqRegist } from '@/api/designReq';
import DesignReqRegistBody from './DesignReqRegistBody';
import designRequestState from '@/global/designRequest/designRequestState';
import { useRecoilValue } from 'recoil';

/**
 * @description 디자인 요청 등록하는 페이지 컴포넌트
 */
const DesignRequestRegistration = () => {
	const designRequest = useRecoilValue(designRequestState);

	// 등록하기
	const onSubmit = async (isTempSave: boolean) => {
		if (isTempSave) {
			console.log('임시저장');
		}
		if (!isTempSave) {
			const data = await postDesignReqRegist(designRequest);
			console.log(data);
		}
	};

	// view
	return (
		<>
			<DesignReqRegistHeader onSubmit={onSubmit} />
			<DesignReqRegistBody />
		</>
	);
};

export default DesignRequestRegistration;
