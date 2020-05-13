import React from "react";
import styled from "styled-components";

const Title = styled.h5`
  font-size: 0.8em;
  font-weight: bold;
  display: block;
  width: 90px;
`;

const TextTruncated = ({ text, charNumber = 20 }) => {
  let truncated =
    text.length > charNumber ? `${text.substring(0, charNumber)} . . . ` : text;
  return (
    <div>
      <Title>{truncated}</Title>
    </div>
  );
};

export default TextTruncated;
