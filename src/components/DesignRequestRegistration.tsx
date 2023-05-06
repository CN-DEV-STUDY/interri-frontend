import RegistrationHeader from '@/components/headers/RegistrationHeader';
import Section from '@/components/common/Section';
import Select from '@/components/ui/Select';
import Flex from '@/components/common/Flex';

import { registrationResource } from '@/api/designReq';
import { useEffect, useState } from 'react';

interface Data {
	sizeList: SizeList[];
	housingTypeList: HousingTypeList[];
	colorList: string[];
	roomTypeList: RoomTypeList[];
	styleList: styleList[];
}

interface SizeList {
	id: number;
	name: string;
}

interface HousingTypeList {
	id: number;
	name: string;
}

interface RoomTypeList {
	id: number;
	name: string;
}

interface styleList {
	id: number;
	name: string;
}

/**
 * @description 디자인 요청 등록하는 페이지 컴포넌트
 */
const DesignRequestRegistration = () => {
	const dataObj: Data = {
		sizeList: [],
		housingTypeList: [],
		colorList: [],
		roomTypeList: [],
		styleList: [],
	};

	// state
	const [data, setData] = useState<Data>(dataObj);
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>();

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(null);
				setData(dataObj);
				setLoading(true);

				const response = await registrationResource();
				setData(response.data);
			} catch (error) {
				error instanceof Error && setError(error);
			} finally {
				setLoading(false);
			}
		};

		fetchData();
	}, []);

	console.log('@@@@@@@@@@@@@@@@data', data.sizeList);

	// view
	return (
		<>
			<RegistrationHeader />
			<Section width={'mideum'}>
				<Flex>
					<Select>
						{data.sizeList.map((size) => (
							<option key={size.id} value={size.id}>
								{size.name}
							</option>
						))}
					</Select>
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
