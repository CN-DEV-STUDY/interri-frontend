import styled from 'styled-components';
import Flex from '../Flex';

interface DesignCardListProps {
	children: React.ReactNode;
}

/**
 * @description 디자인 카드 리스트 컴포넌트
 */
const DesignCardList = ({ children }: DesignCardListProps) => {
	// view
	return (
		<Container>{children}</Container>
	);
};

export default DesignCardList;

// STYLED COMPONENTS
const Container = styled.div`
	display: flex;
	gap: 3rem;
	overflow-y: scroll;
	margin-bottom: 4rem;
	
	> div:last-child {
		margin-right: 10px;
	}	

	::-webkit-scrollbar{
        display: none;
    }
`;