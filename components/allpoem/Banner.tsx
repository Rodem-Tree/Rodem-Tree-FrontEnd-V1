import styled from "@emotion/styled";

export default function Banner() {
  return (
    <Container>
      <Image src="/img/allpoem/banner.png"></Image>
      <Text>
        <p>전체보기 페이지</p>
        <h2>로뎀 시인들의 시를</h2>
        <h2>구경해보세요</h2>
      </Text>
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

const Text = styled.div`
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
