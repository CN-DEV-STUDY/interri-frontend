# INTERRI-FRONTEND
REACT, TYPESCRIPT, REACT_ROUTER_DOM, REACT QUERY, RECOIL, REACT HOOK FORM, COOKIE JS
STYLED COMPONENTS

## React 개발 컨벤션

1. 모든 type 정의는 `interface`로 한다.
2. 컴포넌트는 화살표 함수로 만든다.
3. 컴포넌트 생성 후 항상 `js doc`을 작성한다. ex) @description 컴포넌트 설명
4. 다음과 같은 순서로 코드 관리를 한다.

```
1. global state
2. state
3. reference (useRef)
4. router-info (useNavigation, useLocation)
5. read-only (구조 분해 할당 한 data)
6. event (onSubmit, onChange) --> event와 관련된 함수에는 on을 붙이도록 정함
7. watch (useEffect)
8. method (그냥 내부에서 사용하는 method)
9. view (return 부분)
```
