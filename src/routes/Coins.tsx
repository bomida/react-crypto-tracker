import { Helmet } from "react-helmet-async";
import { useQuery } from "react-query";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { fetchCoins } from "../api";

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
  background-color: white;
  margin-bottom: 10px;
  border-radius: 15px;
  color: ${props => props.theme.bgColor};
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
  const { isLoading, data } = useQuery<ICoin[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Helmet>
        <title>Coin</title>
      </Helmet>
      <Header>
        <Title>Coin</Title>
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