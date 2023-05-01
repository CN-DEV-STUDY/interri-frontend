import RegistrationHeader from '@/components/headers/RegistrationHeader';
import Section from '@/components/common/Section';
import Select from '@/components/ui/Select';
import Flex from '@/components/common/Flex';

import { registrationResource } from '@/api/designReq';
import { useEffect } from 'react';

/**
 * @description 디자인 요청 등록하는 페이지 컴포넌트
 */
const DesignRequestRegistration = () => {
	useEffect(() => {
		const data = registrationResource();
		console.log(data);
	}, []);

	// view
	return (
		<>
			<RegistrationHeader />
			<Section width={'mideum'}>
				<Flex>
					<Select></Select>
					<Select></Select>
					<Select></Select>
					<Select></Select>
				</Flex>
				<div
					style={{
						backgroundColor: 'black',
						width: '100px',
						height: '100px',
					}}
				></div>
			</Section>
		</>
	);
};

export default DesignRequestRegistration;
