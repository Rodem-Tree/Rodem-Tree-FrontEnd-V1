import styled from "@emotion/styled";

export default function Header() {
  return (
    <Container>
      <Wrapper>
        <Image src="/img/logo/logo.png" />
        <Nav>
          <p>메인페이지</p>
          <p>명예의 전당</p>
          <p>전체보기</p>
          <p>시 작성하기</p>
        </Nav>
        <MyButton>마이페이지</MyButton>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
`;

const Image = styled.img`
  width: 12%;
`;

const Nav = styled.div`
  gap: 50px;
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const MyButton = styled.div`
  width: 130px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  border: 1px solid #000;
  background-color: #fff;
`;
