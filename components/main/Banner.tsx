import styled from "@emotion/styled";

export default function Banner() {
  return (
    <Container>
      <Image src="/img/main/Banner.png"></Image>
      <Title>
        <p>가장 위대한 문자 예술</p>
        <h2>마음을 기록하고</h2>
        <h2>마음을 읽습니다</h2>
      </Title>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Image = styled.img`
  width: 90%;
`;

const Title = styled.div`
  position: absolute;
  top: 160px;
  left: 240px;
  color: #fff;
  & > p {
    margin: 0 0 10px 0;
    font-size: 24px;
    font-weight: 600;
  }
  & > h2 {
    margin: 0;
    font-size: 54px;
    line-height: 76px;
  }
`;
