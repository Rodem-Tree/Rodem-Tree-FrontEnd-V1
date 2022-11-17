import styled from "@emotion/styled";
import Footer from "components/common/Footer";
import Header from "components/common/Header";
import Banner from "components/main/Banner";
import Introduction from "components/main/Introduction";
import MentalFood from "components/main/MentalFood";

export default function Main() {
  return (
    <Container>
      <Header />
      <Banner />
      <Introduction />
      <MentalFood />
      <Footer />
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
