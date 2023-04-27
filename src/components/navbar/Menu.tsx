import styled from 'styled-components';
import Link from '@/components/ui/Link';

/**
 * @description 메뉴 컴포넌트
 */
const Menu = () => {
	// view
	return (
		<Wrapper>
			<Link to='#'>디자인 요청</Link>
			<Link to='#'>인테리어 트렌트</Link>
			<Link to='#'>주간 랭킹</Link>
		</Wrapper>
	);
};

export default Menu;

// STYLED COMPONENTS
const Wrapper = styled.div`
	display: flex;
	gap: 2rem;

	font-size: 2.4rem;
	font-weight: 600;

	:link,
	:visited {
	}

	:hover,
	:active {
	}
`;