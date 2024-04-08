import styled from 'styled-components';
import Header from '../../components/Header/Header';

const BannerContainer = styled.div`
  width: 100%;
  height: 27vw;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Home = () => {
  return (
    <>
      <Header />
    </>
  );
};

export default Home;
