import React, { useState, useEffect, useRef } from 'react';
import Input from '@/components/ui/Input';
import styled from 'styled-components';
import Textarea from '@/components/ui/Textarea';
import { Image } from 'react-bootstrap';
import { getRegistResource } from '@/api/designReq';
import designRequestState from '@/global/designRequest/designRequestState';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { useQuery } from '@tanstack/react-query';
import SelectList from './SelectList';
import { DesignRequest, DesignRequestInfo, SelectListType } from './types';
import MaxPrice from './MaxPrice';
import DueDate from './DueDate';
import CameraIcon from '@/components/icons/CameraIcon';

type DesignRequestForm = {
    styleId: number;
    housingTypeId: number;
    sizeId: number;
    mainColor: string;
    subColor: string;
    maxPrice: number;
    dueDate: Date;
    tempYn: string;
};

type FlexProps = {
    gap?: number;
};

const DesignReqRegistBody = () => {
    const inputFileRef = useRef<HTMLInputElement>(null);
    const [file, setFile] = useState<File>();
    const [imagePreviewUrl, setImagePreviewUrl] = useState<any>();

    const setDesignRequest = useSetRecoilState(designRequestState);
    const [designRequestInfo, setDesignRequestInfo] = useState<
        DesignRequestInfo[]
    >([
        {
            images: [],
            roomTypeId: 0,
            content: '',
        },
    ]);

    useEffect(() => {
        setDesignRequest((prevState: DesignRequest) => {
            const newDesignRequest = { ...prevState };
            // TODO: 알맞은 인덱스 구현하는 로직 필요
            newDesignRequest.designRequestInfos = designRequestInfo;
            return newDesignRequest;
        });
    }, [designRequestInfo]);

    // react query
    const { isLoading, error, data } = useQuery<SelectListType>({
        queryKey: ['registResource'],
        queryFn: () => getRegistResource(),
    });

    // event
    const onInputButtonClick = () => {
        inputFileRef.current?.click();
    };

    const onMaxPriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDesignRequest((prevState: DesignRequest) => {
            return { ...prevState, maxPrice: parseInt(event.target.value) };
        });
    };

    const onDuedateChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDesignRequest((prevState: DesignRequest) => {
            return { ...prevState, dueDate: new Date(event.target.value) };
        });
    };

    const onImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // @see https://www.tutsmake.com/react-thumbnail-image-preview-before-upload-tutorial/
        const reader = new FileReader();
        const files = Array.from(event.target.files!);

        reader.onloadend = () => {
            files.map((file) => {
                setFile(file);
            });
            setImagePreviewUrl(reader.result);
        };
        files.forEach((file) => reader.readAsDataURL(file));

        setDesignRequestInfo((prevState: DesignRequestInfo[]) => {
            const newDesignRequestInfo = [...prevState];

            // TODO: 알맞은 인덱스 구현하는 로직 필요
            newDesignRequestInfo[0] = {
                ...newDesignRequestInfo[0],
                images: Array.from(event.target.files!),
            };

            return newDesignRequestInfo;
        });
    };

    const onRoomTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDesignRequestInfo((prevState: DesignRequestInfo[]) => {
            const newDesignRequestInfo = [...prevState];

            // 특정 인덱스에 새로운 designRequestInfo 객체를 할당
            newDesignRequestInfo[0] = {
                ...newDesignRequestInfo[0], // 이전 객체의 속성 복사
                roomTypeId: parseInt(event.target.value), // roomTypeId 속성 업데이트
            };
            return newDesignRequestInfo;
        });
    };

    const onContentChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setDesignRequestInfo((prevState: DesignRequestInfo[]) => {
            const newDesignRequestInfo = [...prevState];

            // 특정 인덱스에 새로운 designRequestInfo 객체를 할당
            newDesignRequestInfo[0] = {
                ...newDesignRequestInfo[0],
                content: event.target.value,
            };

            return newDesignRequestInfo;
        });
    };

    // view
    return (
        <Container>
            <SelectList setDesignRequest={setDesignRequest} data={data} />
            <Flex gap={40}>
                <MaxPrice onChange={onMaxPriceChange} />
                <DueDate onChange={onDuedateChange} />
            </Flex>
            <Grid>
                {data?.styleList.map((style) => (
                    <Button key={style.id}>{style.name}</Button>
                ))}
            </Grid>
            <Descriptions>
                {imagePreviewUrl && (
                    <ImageBox>
                        <Image src={imagePreviewUrl} />
                    </ImageBox>
                )}
                {!imagePreviewUrl && (
                    <ImageBox onClick={onInputButtonClick}>
                        <Input
                            type={'file'}
                            display={'none'}
                            ref={inputFileRef}
                            onChange={onImageChange}
                        />
                        <ImageContainer>
                            <CameraIcon />
                            <p>사진 올리기</p>
                            <p>* 최대 10장까지</p>
                        </ImageContainer>
                    </ImageBox>
                )}
                <FlexColumn>
                    <Select onChange={onRoomTypeChange}>
                        <option value=''>공간</option>
                        {data?.roomTypeList.map((roomType) => (
                            <option key={roomType.id} value={roomType.id}>
                                {roomType.name}
                            </option>
                        ))}
                    </Select>
                    <Textarea
                        placeholder={'사진에 대해서 설명해주세요.'}
                        onChange={onContentChange}
                    />
                </FlexColumn>
            </Descriptions>
            <AddButton>사진 추가</AddButton>
        </Container>
    );
};

export default DesignReqRegistBody;

// style
const Container = styled.section`
    width: 110rem;
    margin: 4rem auto;

    display: flex;
    flex-direction: column;
    gap: 20px;
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
            content: '(단위: 원)';
            left: 10px;
            bottom: -10px;
            position: absolute;
            font-size: 1.4rem;
            color: #96a6cc;
        }
    }
`;

const Descriptions = styled.div`
    display: flex;
    gap: 40px;
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
    border-color: #96a6cc;
    color: #96a6cc;

    /* 기본 화살표를 제거하기 위한 코드 */
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;

    /* SVG 화살표 이미지를 설정하는 코드 */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>');
    background-repeat: no-repeat;
    background-position: calc(100% - 1.5rem) center !important;
    background-size: 16px; /* 원하는 크기로 조정하세요 */

    option {
        text-align: center;
    }
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    row-gap: 1rem;
    column-gap: 1rem;
    width: 110rem;
    margin-bottom: 2rem;
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

        svg,
        p {
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

const Button = styled.button`
    border: none;
    border-radius: 9px;
    background-color: #cbd3e6;
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
