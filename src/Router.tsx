import { BrowserRouter, Route, Routes } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/:coinId/*" element={<Coin />} />
        <Route path="/" element={<Coins />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;

// React Query, React Router 설치
// npm i react-router-dom@5.3.0 react-query
// npm i --save-dev @types/react-router-dom
// (2022.02기준 React Router 6버전으로 진행시 @types/react-router-dom를 설치하지 않아도 타입을 불러옵니다.)

// react-router-dom@5.3.0이 아닌 그냥 react-router-dom으로 설치하게 되면 현재 기준으로 6버전이 설치되고, 바뀐 6버전 문법으로 진행해야한다.
// ex) < Route path="/" element={< Coins / >} />

// React Router 5 -> 6에서 바뀐 점
// Switch컴포넌트 -> Routes컴포넌트로 변경
// exact삭제
// useHistory -> useNavigate
// useRoutes 등