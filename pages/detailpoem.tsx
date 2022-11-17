import styled from "@emotion/styled";
import Header from "components/common/Header";
import Poetry from "components/detailpoem/Poetry";

export default function detailpoem() {
  return (
    <Container>
      <Header />
      <Poetry />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
