import styled from "@emotion/styled";
import Header from "components/common/Header";
import Contents from "components/writePoem/Contents";
import Description from "components/writePoem/Description";

export default function WritePoem() {
  return (
    <Container>
      <Header />
      <Description />
      <Contents />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
