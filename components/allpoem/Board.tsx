import styled from "@emotion/styled";
import { allpoemDocs } from "docs/allpoem/allpoemDocs";

export default function Board() {
  return (
    <Container>
      <Wrapper>
        <Title>
          <TitleName>제목</TitleName>
          <Text>
            <Writer>시인</Writer>
            <Date>날짜</Date>
            <Like>추천수</Like>
          </Text>
        </Title>
      </Wrapper>
      <Content>
        {allpoemDocs.map((info, i) => (
          <Info key={i}>
            <Name>{info.title}</Name>
            <Text>
              <Writer>{info.writer}</Writer>
              <Date>{info.date}</Date>
              <Like>{info.like}</Like>
            </Text>
          </Info>
        ))}
      </Content>
    </Container>
  );
}

const Container = styled.div`
  width: 66vw;
  margin-top: 70px;
  border: 1px solid #5b5b5b;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Info = styled.div`
  width: 100%;
  height: 62px;
  padding: 0 40px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #5b5b5b;
  & > p {
    width: 100%;
  }
`;

const Title = styled(Info)`
  height: 52px;
  color: #e64980;
  font-weight: 600;
`;

const TitleName = styled.p`
  width: 100%;
  text-align: center;
`;

const Text = styled.div`
  width: 330px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Name = styled.div`
  width: 100%;
`;

const TextType = styled.p`
  width: 100px;
  text-align: center;
`;

const Writer = styled(TextType)``;

const Date = styled(TextType)``;

const Like = styled(TextType)``;
