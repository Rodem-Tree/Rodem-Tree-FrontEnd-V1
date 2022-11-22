import styled from "@emotion/styled";

export default function Title() {
  return (
    <Container>
      <h3>시 전체보기🔍</h3>
      <Warning>
        <p>
          타인의 시를 무단으로 도용하거나 허락없이 2차 배포할 시에는 처벌의
          대상이 될 수 있습니다.
        </p>
      </Warning>
    </Container>
  );
}

const Container = styled.div`
  width: 66vw;
  margin-top: 50px;
  h3 {
    font-size: 28px;
  }
`;

const Warning = styled.div`
  width: 100%;
  height: 80px;
  padding-left: 20px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: #5b5b5b;
  border-left: 5px solid #e64980;
  background-color: #f5f5f5;
`;
