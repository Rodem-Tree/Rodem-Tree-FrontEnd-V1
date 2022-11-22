import styled from "@emotion/styled";
import Banner from "components/allpoem/Banner";
import Board from "components/allpoem/Board";
import Pagination from "components/allpoem/Pagination";
import Title from "components/allpoem/Title";
import Header from "components/common/Header";

export default function allpoem() {
  return (
    <Container>
      <Header />
      <Banner />
      <Title />
      <Board />
      <Pagination />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
