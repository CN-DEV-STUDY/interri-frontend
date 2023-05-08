import RegistrationHeader from '@/components/headers/RegistrationHeader';
import Section from '@/components/common/Section';
import Select from '@/components/ui/Select';
import Flex from '@/components/common/Flex';

import { getRegistrationResource } from '@/api/designReq';
import { useEffect, useRef, useState } from 'react';
import Input from '@/components/ui/Input';
import styled from 'styled-components';
import Textarea from '@/components/ui/Textarea';
import Grid from './common/Grid';
import Button from './ui/Button';

interface Data {
	sizeList: SizeList[];
	housingTypeList: HousingTypeList[];
	colorList: string[];
	roomTypeList: RoomTypeList[];
	styleList: StyleList[];
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

interface StyleList {
	id: number;
	name: string;
}

interface DesignRequestForm {
	styleId: number;
	housingTypeId: number;
	sizeId: number;
	mainColor: string;
	subColor: string;
	maxPrice: number;
	dueDate: Date;
	tempYn: string;
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
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>();
	const [inputFiles, setInputFiles] = useState<File[]>([]);
	const inputFileRef = useRef<HTMLInputElement>(null);
	const [form, setForm] = useState<DesignRequestForm | null>(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				setError(null);
				setData(dataObj);
				setIsLoading(true);

				const data = await getRegistrationResource();
				setData(data);
			} catch (error) {
				error instanceof Error && setError(error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchData();
	}, []);

	// event
	const onInputButtonClick = () => {
		inputFileRef.current?.click();
		console.log('inputFileRef.current: ', inputFileRef.current);
	};

	const onInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		if (event.target.files != null) {
			setInputFiles((prevState) => [
				...prevState!,
				...Array.from(event.target.files!).map((file) => file),
			]);
		}
	};

	const onChange = () => {};

	// 등록하기
	const onSaveHanlder = (isTempSave: boolean) => {
		if (isTempSave) {
			console.log('임시저장');
		} else {
			console.log('등록하기');
		}
	};

	// view
	return (
		<>
			{isLoading && <p>로딩중....</p>}
			{!isLoading && (
				<>
					<RegistrationHeader onSave={onSaveHanlder} />
					<Section width={'mideum'}>
						<Flex gap={20} mb={30}>
							<Select onChange={onChange}>
								<option value=''>평수</option>
								{data.sizeList.map((size) => (
									<option key={size.id} value={size.id}>
										{size.name}
									</option>
								))}
							</Select>
							<Select onChange={onChange}>
								<option value=''>주거 형태</option>
								{data.housingTypeList.map((housingType) => (
									<option
										key={housingType.id}
										value={housingType.id}
									>
										{housingType.name}
									</option>
								))}
							</Select>
							<Select onChange={onChange}>
								<option value=''>메인 컬러</option>
								{data.colorList.map((color, index) => (
									<option key={index} value={color}>
										{color}
									</option>
								))}
							</Select>
							<Select onChange={onChange}>
								<option value=''>서브 컬러</option>
								{data.colorList.map((color, index) => (
									<option key={index} value={color}>
										{color}
									</option>
								))}
							</Select>
						</Flex>
						<Flex gap={15} mb={30}>
							<Label htmlFor=''>최대 가격</Label>
							<Input onChange={onChange}></Input>

							<Label htmlFor=''>마감 기한</Label>
							<Input type={'date'} onChange={onChange}></Input>
						</Flex>
						<Flex mb={30}>
							<Grid repeat={5} column gap={15}>
								{data.styleList.map((style) => (
									<Button key={style.id} sm>
										{style.name}
									</Button>
								))}
							</Grid>
						</Flex>
						<Flex gap={30}>
							<ImageBox onClick={onInputButtonClick}>
								<Input
									type={'file'}
									display={'none'}
									inputRef={inputFileRef}
									onChange={onInputFileChange}
								/>
								<ImageContainer>
									<Svg
										xmlns='http://www.w3.org/2000/svg'
										fill='none'
										viewBox='0 0 24 24'
										strokeWidth='1.5'
										stroke='currentColor'
									>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z'
										/>
										<path
											strokeLinecap='round'
											strokeLinejoin='round'
											d='M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z'
										/>
									</Svg>

									<p>사진 올리기</p>
									<p>* 최대 10장까지</p>
								</ImageContainer>
							</ImageBox>
							<Flex column>
								<Select onChange={onChange}>
									<option value=''>공간</option>
									{data.roomTypeList.map((roomType) => (
										<option
											key={roomType.id}
											value={roomType.id}
										>
											{roomType.name}
										</option>
									))}
								</Select>
								<Textarea
									placeholder={'사진에 대해서 설명해주세요.'}
									onChange={onChange}
								/>
							</Flex>
						</Flex>
					</Section>
				</>
			)}
		</>
	);
};

export default DesignRequestRegistration;

const Label = styled.label`
	font-size: 2.2rem;
`;

const ImageBox = styled.button`
	position: relative;

	border: none;
	width: 400px;
	height: 250px;
	background-color: lightgray;
	cursor: pointer;
	:hover {
		background-color: #e2e2e2;

		div svg,
		p {
			color: #949494;
		}
	}
`;

const ImageContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 10px;

	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
`;

const Svg = styled.svg`
	width: 58px;
	height: 58px;
`;
