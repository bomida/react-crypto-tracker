import Router from './Router';
import { createGlobalStyle } from 'styled-components';
import { ReactQueryDevtools } from 'react-query/devtools';
import { HelmetProvider } from 'react-helmet-async';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, menu, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  main, menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  article, aside, details, figcaption, figure,
  footer, header, hgroup, main, menu, nav, section {
    display: block;
  }
  *[hidden] {
      display: none;
  }
  body {
    line-height: 1;
  }
  menu, ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box;
  }
  body {
    font-family: 'Source Sans Pro', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor}
  }
  a {
    color: inherit;
    text-decoration: none;
  }
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <HelmetProvider>
        <Router />
      </HelmetProvider>
      <ReactQueryDevtools initialIsOpen={true} />
    </>
  );
}

export default App;

// 작업 순서
// `npm i react-router-dom react-query` 리액트 라우터와 리액트 쿼리 설치
// movie-service-app과 같은 방식으로 화면 구성을 해준다
// / -> <Home />모든 코인을 보여준다.
// /:id -> <Detail />코인 상세정보를 보여준다
// * Nested Router : 한 스크린 내에 또다른 라우터를 가질 수 있는 것.
// ex) detail/information, detail/chart ...


// Reset CSS
// https://github.com/zacanger/styled-reset/blob/master/src/index.ts

// Google Fonts
// https://fonts.google.com

// Source Sans Pro 폰트
// @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:wght@300;400&display=swap');
// font-family: 'Source Sans Pro', sans-serif;

// Flat UI Color
// https://flatuicolors.com/palette/gb

// createGlobalStyle (전역 스타일을 처리함)
// 전역 스타일을 처리하는 특수 Styled Component를 생성하는 helper 함수입니다. 
// https://styled-components.com/docs/api#createglobalstyle