import styled from "@emotion/styled";

export default function Footer() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <h2>로뎀나무</h2>
          <p>시는 가장 행복하고 가장 선한 마음의,</p>
          <p>가장 선하고 가장 행복한 순간의 기록이다.</p>
          <p>-M.W 셸리-</p>
        </Title>
        <Social>
          <div>
            <img src="/img/footer/facebook.svg" alt="" />
          </div>
          <div>
            <img src="/img/footer/insta.svg" alt="" />
          </div>
          <div>
            <img src="/img/footer/github.svg" alt="" />
          </div>
        </Social>
      </Wrapper>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background-color: #808080;
`;

const Wrapper = styled.div`
  width: 80vw;
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const Title = styled.div`
  & > h2 {
    margin: 0 0 16px 0;
    font-size: 30px;
  }
  & > p {
    margin: 0;
    font-size: 18px;
    line-height: 38px;
  }
`;

const Social = styled.div`
  gap: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  & > div {
    width: 50px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 25px;
    background-color: #fff;
    & > img {
      width: 70%;
    }
  }
`;
