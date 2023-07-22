import styled from 'styled-components';
import Input from '../ui/Input';
import {
    useState,
    ChangeEvent,
    MouseEventHandler,
    useEffect,
    useRef,
} from 'react';
import { getEmailCertStatus, postCertEmail } from '@/api/desginReply';

interface ContentProps {
    size?: number;
    color?: string;
    mb?: number;
    mt?: number;
    weight?: string | number;
}

interface WrapProps {
    bb?: string;
    sort?: string;
}

interface UserSignUpRequest {
    email: string;
    nickname: string;
    password: string;
}

function SignUpForm() {
    // global

    // state
    const [userSignUpRequest, setUserSignUpRequest] =
        useState<UserSignUpRequest>({
            email: '',
            nickname: '',
            password: '',
        });
    const [selectedEmail, setSelectedEmail] = useState<string>('');
    const [isEmailVerified, setIsEmailVerified] = useState<boolean | null>(
        null,
    );

    // event
    const onChangeEmail = (e: ChangeEvent<HTMLInputElement>) => {
        setUserSignUpRequest((prevState) => ({
            ...prevState,
            email: e.target.value.concat(selectedEmail),
        }));
    };

    const onChangeSelectBox = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedEmail(e.target.value);
        setUserSignUpRequest((prevState) => ({
            ...prevState,
            email: prevState.email.split('@')[0].concat(e.target.value),
        }));
    };

    const onClickCertEmail = async () => {
        if (userSignUpRequest.email !== '' && selectedEmail !== '') {
            await postCertEmail(userSignUpRequest.email);
            setIsEmailVerified(false);
        }
    };

    const onClickSignUP = () => {
        console.log('회원가입 정보:', userSignUpRequest);
    };

    // ref
    const intervalRef = useRef<NodeJS.Timeout | null>(null);

    // watch
    useEffect(() => {
        if (isEmailVerified === false) {
            const fetchEmailCertStatus = async () => {
                const emailCertStatus = await getEmailCertStatus(
                    userSignUpRequest.email,
                );
                if (emailCertStatus === true) {
                    // 이메일이 인증된 상태면
                    setIsEmailVerified(true); // true를 담아준다.
                    clearInterval(intervalRef.current!); // interval을 해제하여 더 이상 호출하지 않음
                }
            };

            // 5초마다 주기적으로 호출
            console.log('이메일 인증 상태 체크!!');
            intervalRef.current = setInterval(fetchEmailCertStatus, 5000);

            // 컴포넌트가 unmount될 때 interval 해제
            return () => clearInterval(intervalRef.current!);
        }
    }, [isEmailVerified]);

    console.log('userRequestDto : ', userSignUpRequest);
    console.log('email_full : ', userSignUpRequest.email);
    console.log('email : ', userSignUpRequest.email.split('@')[0]);

    return (
        <>
            <Title size={24} mt={30}>
                이메일
            </Title>

            <ContentWrap>
                <EmailWrap>
                    <Input
                        type='text'
                        value={userSignUpRequest.email.split('@')[0]}
                        onChange={onChangeEmail}
                        width={130}
                        placeholder={'이메일'}
                    />
                    <p>@</p>
                    <Select value={selectedEmail} onChange={onChangeSelectBox}>
                        <option value=''>선택하세요</option>
                        <option value='@naver.com'>naver.com</option>
                        <option value='@gmail.com'>gmail.com</option>
                    </Select>
                </EmailWrap>
            </ContentWrap>
            {isEmailVerified ? (
                <Button disabled={true}>이메일 인증완료</Button>
            ) : (
                <Button onClick={onClickCertEmail}>이메일 인증하기</Button>
            )}

            <Title size={24}>비밀번호</Title>
            <SubTitle>영문, 숫자를 포함한 8자 이상 입력해주세요.</SubTitle>
            <ContentWrap>
                <Input placeholder={'비밀번호'} />
            </ContentWrap>

            <Title size={24}>비밀번호 확인</Title>
            <ContentWrap>
                <Input placeholder={'비밀번호 확인'} />
            </ContentWrap>

            <Title size={24}>닉네임</Title>
            <SubTitle>다른 사용자와 겹치지 않도록 입력해주세요.</SubTitle>
            <ContentWrap>
                <Input placeholder={'별명 (2~15자)'} />
            </ContentWrap>

            <ContentWrap>
                <Button onClick={onClickSignUP}>회원가입</Button>
            </ContentWrap>
        </>
    );
}

export default SignUpForm;

const ContentWrap = styled.div<WrapProps>`
    display: flex;
    flex-direction: column;
    align-items: ${(props) => (props.sort ? 'center' : 'start')};
    gap: 20px;

    input,
    select,
    p {
        margin-bottom: 20px;
    }

    p {
        font-size: 20px;
        color: #727171;
    }
`;

const Title = styled.div<ContentProps>`
    display: flex;
    justify-content: start;
    font-size: ${(props) => props.size}px;
    color: ${(props) => (props.color ? props.color : '#1D2133 ')};
    margin-bottom: ${(props) => (props.mb ? props.mb : 10)}px;
    margin-top: ${(props) => props.mt}px;
    font-weight: bold;
`;

const SubTitle = styled.div`
    display: flex;
    justify-content: start;
    font-size: 14px;
    color: #b8b6b6;
    margin-bottom: 10px;
`;

const Button = styled.button`
    border: none;
    border-radius: 9px;
    background-color: #b8b6b6;
    color: #fff;
    font-size: 18px;
    font-weight: 500;
    padding: 10px 45px;
    width: 300px;
    height: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    margin-bottom: 30px;

    cursor: pointer;

    :hover {
        background-color: #1d2133;
    }
`;

const EmailWrap = styled.div`
    display: flex;

    align-items: center;
    gap: 7px;
`;

const Select = styled.select`
    width: 130px;
    height: 5rem;
    border-radius: 9px;
    font-size: 14px;
    border-color: #96a6cc;
    /* color: #96a6cc; */
    padding-left: 18px;

    /* 기본 화살표를 제거하기 위한 코드 */
    -moz-appearance: none; /* Firefox */
    -webkit-appearance: none; /* Safari and Chrome */
    appearance: none;

    /* SVG 화살표 이미지를 설정하는 코드 */
    background-image: url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" /></svg>');
    background-repeat: no-repeat;
    background-position: calc(100% - 1.5rem) center !important;
    background-size: 16px; /* 원하는 크기로 조정하세요 */
`;
