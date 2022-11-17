import styled from "@emotion/styled";
import { poetryDocs } from "docs/poetryDocs";
import { useState } from "react";

export default function Poetry() {
  return (
    <>
      {poetryDocs.map((poem, i) => (
        <Container key={i}>
          <h2>{poem.title}</h2>
          <Wrapper>
            <Title>
              <Option>
                <p>{poem.writer}</p>
                <Like>
                  <img src="/img/detailpoem/likeOff.svg" alt="" />
                  <p>{poem.like}</p>
                </Like>
              </Option>
              <p>{poem.date}</p>
            </Title>
            <PoemContent>{poem.content}</PoemContent>
          </Wrapper>
        </Container>
      ))}
    </>
  );
}

const Container = styled.div`
  width: 66vw;
  margin: 50px 0;
  & > h2 {
    padding: 0 30px;
  }
`;

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-bottom: 1px solid #808080;
`;

const PoemContent = styled.div`
  width: 100%;
  padding: 60px 30px;
  white-space: pre-wrap;
  text-align: start;
`;

const Title = styled.div`
  width: 100%;
  height: 60px;
  padding: 0 30px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #808080;
  border-bottom: 1px solid #808080;
  background-color: #f5f5f5;
`;

const Option = styled.div`
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Like = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  & > img {
    width: 48%;
    padding-right: 4px;
  }
`;
