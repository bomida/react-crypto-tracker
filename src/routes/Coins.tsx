import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import { useSetRecoilState } from "recoil";
import styled from "styled-components";
import { fetchCoins } from "../api";
import { isDarkAtom } from "./atoms";

const Container = styled.div`
  max-width: 480px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Header = styled.header`
  height: 10vh;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
`;

const CoinsList = styled.ul``;

const Coin = styled.li`
  margin-bottom: 10px;
  border: 1px solid ${props => props.theme.borderColor};
  box-shadow: 3px 3px 5px 2px rgba(0,0,0,0.1);;
  border-radius: 15px;
  color: ${props => props.theme.textColor};
  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: color .2s ease-in;
  }
  &:hover {
    a {
      color: ${props => props.theme.accentColor};
    }
  }
`;

const Title = styled.h1`
  font-size: 50px;
  color: ${props => props.theme.accentColor};
`;

const Loader = styled.span`
  display: block;
  font-size: 18px;
  text-align: center;
`;

const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;


interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const setterFn = useSetRecoilState(isDarkAtom);
  const toggleAtom = () => setterFn(prev => !prev);
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);

  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title>Coin</Title>
        <button onClick={toggleAtom}>Toggle Theme</button>
      </Header>
      {isLoading ? <Loader>loading...</Loader> :
        <CoinsList>
          {data?.slice(0, 100).map((coin) =>
            <Coin key={coin.id}>
              <Link
                to={`/${coin.id}`}
                state={{ name: coin.name, rank: coin.rank }}
              >
                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} alt={coin.name} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          )}
        </CoinsList>}
    </Container >
  );
}

export default Coins;