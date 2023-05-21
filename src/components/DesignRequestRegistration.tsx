import RegistrationHeader from '@/components/headers/RegistrationHeader';

import { getRegistrationResource, postDesignRegistration } from '@/api/designReq';
import { useEffect, useRef, useState } from 'react';
import Input from '@/components/ui/Input';
import styled from 'styled-components';
import Textarea from '@/components/ui/Textarea';
import { Image } from 'react-bootstrap';

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

interface FlexProps {
	gap?: number
}

const dataObj: Data = {
	sizeList: [],
	housingTypeList: [],
	colorList: [],
	roomTypeList: [],
	styleList: [],
};

class DesignRequest {
	constructor() {
		this.designRequestInfos = [];
		// TODO: userId 가져오는 로직 구현
		this.userId = 1;
		// TODO: styleId 배열로 변경
		this.styleId = 1;
	}
	userId: number | undefined;
	sizeId: number | undefined;
	housingTypeId: number | undefined;
	mainColor: string | undefined;
	subColor: string | undefined;
	maxPrice: number | undefined;
	dueDate: Date | undefined;
	styleId: number | undefined;
	designRequestInfos: DesignRequestInfo[] | undefined;
}

class DesignRequestInfo {
	constructor() {
		this.images = [];
	}
	images: File[] | undefined;
	roomTypeId: number | undefined;
	content: string | undefined;
}

// interface designRequest {
// 	userId: number | null;
// 	sizeId: number | null;
// 	housingTypeId: number | null;
// 	mainColor: string | null;
// 	subColor: string | null;
// 	maxPrice: number | null;
// 	dueDate: Date | null;
// 	designRequestInfo: designRequestInfo[] | null;
// }

/**
 * @description 디자인 요청 등록하는 페이지 컴포넌트
 */
const DesignRequestRegistration = () => {
	// state
	const [data, setData] = useState<Data>(dataObj);
	const [isLoading, setIsLoading] = useState<boolean>(false);
	const [error, setError] = useState<Error | null>();
	const [inputFiles, setInputFiles] = useState<File[]>([]);
	const inputFileRef = useRef<HTMLInputElement>(null);
	const [form, setForm] = useState<DesignRequestForm | null>(null);

	const [file, setFile] = useState<File>();
	const [imagePreviewUrl, setImagePreviewUrl] = useState<any>();

	const [designRequest, setDesignRequest] = useState<DesignRequest>(new DesignRequest());
	const [designRequestInfo, setDesignRequestInfo] = useState<DesignRequestInfo>(new DesignRequestInfo());

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

	useEffect(() => {
		console.log(designRequest);
		console.log("designRequestInfo", designRequestInfo)
		
	}, [designRequest]);

	// event
	const onInputButtonClick = () => {
		inputFileRef.current?.click();
	};

	// const onInputFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
	// 	// @see https://www.tutsmake.com/react-thumbnail-image-preview-before-upload-tutorial/
	// 	const reader = new FileReader();
	// 	const file = event.target.files![0];

	// 	reader.onloadend = () => {
	// 		setFile(file);
	// 		setImagePreviewUrl(reader.result);
	// 	}

	// 	reader.readAsDataURL(file);

	// 	if (event.target.files != null) {
	// 		setInputFiles((prevState) => [
	// 			...prevState!,
	// 			...Array.from(event.target.files!).map((file) => file),
	// 		]);
	// 	}
	// };

	const onChange = () => {};

	const onSizeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDesignRequest((prevState: DesignRequest) => {
			return { ...prevState, sizeId: parseInt(event.target.value)};
		});
	};

	const onHousingTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDesignRequest((prevState: DesignRequest) => {
			return { ...prevState, housingTypeId: parseInt(event.target.value)};
		});
	}

	const onMainColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDesignRequest((prevState: DesignRequest) => {
			return { ...prevState, mainColor: event.target.value };
		})
	}

	const onSubColorChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDesignRequest((prevState: DesignRequest) => {
			return { ...prevState, subColor: event.target.value };
		});
	}

	const onMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDesignRequest((prevState: DesignRequest) => {
			return { ...prevState, maxPrice: parseInt(event.target.value) };
		});
	}

	const onDuedateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setDesignRequest((prevState: DesignRequest) => {
			return { ...prevState, dueDate: new Date(event.target.value)}
		});
	}

	const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		// @see https://www.tutsmake.com/react-thumbnail-image-preview-before-upload-tutorial/
		const reader = new FileReader();
		const files = Array.from(event.target.files!);

		reader.onloadend = () => {
			files.map((file) => {
				setFile(file);
			})
			setImagePreviewUrl(reader.result);
		}
		files.map((file) => reader.readAsDataURL(file));
		
		setDesignRequestInfo((prevState: DesignRequestInfo) => {
			const newDesignRequestInfo = { ...prevState };
			Array.from(event.target.files!).map((file) => newDesignRequestInfo.images!.push(file));

			setDesignRequest((prevState: DesignRequest) => {
				const newDesignRequest = {...prevState};
				// TODO: 알맞은 인덱스 구현하는 로직 필요
				newDesignRequest.designRequestInfos![0] = newDesignRequestInfo;
				return newDesignRequest;
			}) ;
			return newDesignRequestInfo;
		})
	}

	const onRoomTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDesignRequestInfo((prevState: DesignRequestInfo) => {
			const newDesignRequestInfo = { ...prevState, roomTypeId: parseInt(event.target.value) };

			setDesignRequest((prevState: DesignRequest) => {
				const newDesignRequest = { ...prevState };
				// TODO: 알맞은 인덱스 구현하는 로직 필요
				newDesignRequest.designRequestInfos![0] = newDesignRequestInfo;
				return newDesignRequest;
			}) ;

			return newDesignRequestInfo;
		});
		
	}

	const onContentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
		setDesignRequestInfo((prevState: DesignRequestInfo) => {
			const newDesignRequestInfo = { ...prevState, content: event.target.value };

			setDesignRequest((prevState: DesignRequest) => {
				const newDesignRequest = { ...prevState };
				// TODO: 알맞은 인덱스 구현하는 로직 필요
				newDesignRequest.designRequestInfos![0] = newDesignRequestInfo;
				return newDesignRequest;
			});
			return newDesignRequestInfo;
		});

		
	}



	// 등록하기
	const onSubmit = async (isTempSave: boolean) => {
		if (isTempSave) {
			console.log('임시저장');
		} else {
			const data = await postDesignRegistration(designRequest);
			console.log(data);
		}
	};

	// view
	return (
		<>
			{isLoading && <p>로딩중....</p>}
			{!isLoading && (
				<>
					<RegistrationHeader onSubmit={onSubmit} />
					<hr />
					<Section>
						<Flex gap={25}>
							<Select onChange={onSizeChange}>
								<option value=''>평수</option>
								{data.sizeList.map((size) => (
									<option key={size.id} value={size.id}>
										{size.name}
									</option>
								))}
							</Select>
							<Select onChange={onHousingTypeChange}>
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
							<Select onChange={onMainColorChange}>
								<option value=''>메인 컬러</option>
								{data.colorList.map((color, index) => (
									<option key={index} value={color}>
										{color}
									</option>
								))}
							</Select>
							<Select onChange={onSubColorChange}>
								<option value=''>서브 컬러</option>
								{data.colorList.map((color, index) => (
									<option key={index} value={color}>
										{color}
									</option>
								))}
							</Select>
						</Flex>
						<Flex gap={40}>
							<div>
								<Label htmlFor=''>최대 가격</Label>
								<StyledInput onChange={onMaxPriceChange}></StyledInput>
							</div>
							<div>
								<Label htmlFor=''>마감 기한</Label>
								<StyledInput type={'date'} onChange={onDuedateChange}></StyledInput>
							</div>
						</Flex>
						<Grid>
							{data.styleList.map((style) => (
								<Button key={style.id}>
									{style.name}
								</Button>
							))}
						</Grid>
						<Flex gap={40}>
							{imagePreviewUrl && <ImageBox><Image src={imagePreviewUrl}/></ImageBox>}
							{!imagePreviewUrl && 
								<ImageBox onClick={onInputButtonClick}>
									<Input
										type={'file'}
										display={'none'}
										inputRef={inputFileRef}
										onChange={onImageChange}
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
							}
							<FlexColumn>
								<Select onChange={onRoomTypeChange}>
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
									onChange={onContentChange}
								/>
							</FlexColumn>
						</Flex>
						<AddButton>사진 추가</AddButton>
					</Section>
				</>
			)}
		</>
	);
};

export default DesignRequestRegistration;

// STYLED COMPONENTS
const Section = styled.section`
	width: 110rem;
	margin: 4rem auto;

	> button {
		float: right;
	}
`;

const Flex = styled.div<FlexProps>`
	display: flex;
	gap: ${(props) => props.gap}px;
	margin-bottom: 4rem;

	div {
		display: flex;
		align-items: center;

		label {
			margin-right: 2.5rem;
		}
	}

	div:first-child {
		position: relative;
		label::before {
			content: "(단위: 원)";
			left: 10px;
			bottom: -10px;
			position: absolute;
			font-size: 1.4rem;
			color: #96A6CC;
		}
	}
`;

const FlexColumn = styled.div`
	display: flex;
	flex-direction: column;
	row-gap: 20px;

	select { 
		width: 500px;
	}

	textarea {
		width: 500px;
		height: 100%;
	}
`;

const Select = styled.select`
	min-width: 25.65rem;
	height: 5rem;
	border-radius: 9px;
	font-size: 2rem;
	border-color: #96A6CC;
	color: #96A6CC;

	/* 기본 화살표를 제거하기 위한 코드 */
	-moz-appearance:none; /* Firefox */
    -webkit-appearance:none; /* Safari and Chrome */
    appearance:none;

	/* SVG 화살표 이미지를 설정하는 코드 */
	background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>');
	background-repeat: no-repeat;
	background-position: calc(100% - 1.5rem) center !important;
	background-size: 16px; /* 원하는 크기로 조정하세요 */

	option {
		text-align: center;
	}
`;

const Label = styled.label`
	font-size: 2.4rem;
`;

const StyledInput = styled.input`
	min-width: 24rem;
	height: 4rem;
	border-radius: 9px;
	border: 1px solid #000;
	text-align: center;
	font-size: 2rem;;
`;

const Grid = styled.div`
	display: grid;
	grid-template-columns: repeat(8, 1fr);
	row-gap: 1rem;
	column-gap: 1rem;
	width: 110rem;
	margin-bottom: 4rem;
`;

const ImageBox = styled.button`
	position: relative;

	border: none;
	border-radius: 9px;
	width: 600px;
	height: 500px;
	background-color: lightgray;
	cursor: pointer;
	:hover {
		background-color: #e2e2e2;

		svg,p {
			stroke: #949494;
			color: #949494;
		}
	}

	img {
		border-radius: 9px;
		width: 560px;	
		height: 500px;
		object-fit: cover;
  		object-position: center;
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

const Button = styled.button`
	border: none;
	border-radius: 9px;
	background-color: #CBD3E6;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	padding: 10px 12px;
	cursor: pointer;
`;

const AddButton = styled.button`
	border: none;
	border-radius: 9px;
	background-color: #495480;
	color: #fff;
	font-size: 18px;
	font-weight: 500;
	padding: 16px 48px;
	cursor: pointer;
`;