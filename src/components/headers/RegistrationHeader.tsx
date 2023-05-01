import Header from '@/components/headers/Header';
import Logo from '@/components/navbar/Logo';
import Button from '@/components/ui/Button';
import styled from 'styled-components';

/**
 * @description 디자인 요청 등록 페이지 헤더
 */
const RegistrationHeader = () => {
	// view
	return (
		<Header>
			<Logo />
			<ButtonWrapper>
				<Button>임시 저장</Button>
				<Button>등록하기</Button>
			</ButtonWrapper>
		</Header>
	);
};

export default RegistrationHeader;

// STYLED COMPONENTS
const ButtonWrapper = styled.div`
	display: flex;
	gap: 20px;
`;
