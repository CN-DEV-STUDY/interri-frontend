import DesignCard from '@/components/common/card/DesignCard';
import DesignCardList from '@/components/common/card/DesignCardList';
import styled from 'styled-components';

interface TextProps {
    size?: number;
    weight?: number | string;
    decoration?: string;
}

interface ImgProps {
    url: string;
}

interface ReqDetailResResources {
    id: number; // 응답 id
    nickname: string; // 응답 등록자 닉네임
    profileImgPath: string; // 프로필 이미지 경로
    profileImgNm: string; // 프로필 이미지 파일 이름
    adoptionCnt: number; // 채택수
    price: number; // 제시 가격
    repImgPath: string; // 대표 응답 이미지 경로
}

interface Props {
    res?: ReqDetailResResources[];
}

function DesignReqResList({ res }: Props) {
    return (
        <Wrap>
            <ContentWrap>
                <Text size={36} weight={'bold'}>
                    제안 요청
                </Text>
                <SortType>
                    <Text size={24} decoration={'underline'}>
                        최신순
                    </Text>
                    <Text size={24}>|</Text>
                    <Text size={24} decoration={'underline'}>
                        가격순
                    </Text>
                </SortType>
            </ContentWrap>

            <Grid>
                {res?.map((res) => (
                    <ResCardItem>
                        <ResProfileWrap>
                            <ProfileImg url={'/images/suji.png'} />
                            <Text size={24}>{res.nickname}</Text>
                        </ResProfileWrap>
                        <DesignCard userId={''} />
                    </ResCardItem>
                ))}
            </Grid>
        </Wrap>
    );
}

export default DesignReqResList;

const Wrap = styled.div`
    margin-top: 150px;
    padding-top: 50px;
    border-top: 1px solid #bfbfbf;

    display: flex;
    flex-direction: column;
    gap: 50px;
`;

const ContentWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SortType = styled.div`
    display: flex;
    gap: 5px;
`;

const Text = styled.div<TextProps>`
    font-size: ${(props) => props.size}px;
    font-weight: ${(props) => props.weight};
    text-decoration: ${(props) => props.decoration};
`;

const Grid = styled.div`
    display: grid;
    grid-template-columns: 310px 310px 310px 310px 310px 310px;
    gap: 30px;
`;

const ResCardItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`;

const ResProfileWrap = styled.div`
    display: flex;
    gap: 15px;
    align-items: center;
    justify-content: center;
`;

const ProfileImg = styled.div<ImgProps>`
    border-radius: 50%;
    width: 50px;
    height: 50px;
    background-image: url(${(props) => props.url});
    background-size: cover;
    box-shadow: 0px 0px 2px #5b5b5b;
`;
