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
		<Flex space={'between'} gridColumn={'endToEnd'}>
			{children}
		</Flex>
	);
};

export default DesignCardList;
