import React from "react";
import Image from "material-ui-image";
import styled from "styled-components";
import TextTruncated from "./TextTruncated";

const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  max-width: 100;
  max-height: 200;
  padding: 5px;
  margin-top: 8px;
`;

const ImageContainer = styled.div`
  width: 100px;
  height: 100px;
`;

const Title = styled.h5`
  font-size: 0.8em;
  font-weight: bold;
  display: block;
  width: 90px;
`;

const SubTitle = styled.p`
  font-size: 0.75em;
  line-height: 0.5em;
`;

const ProductItemRenderer = ({ name, abv, src }) => {
  return (
    <ItemContainer>
      <ImageContainer>
        <Image
          src={src}
          alt={`image of ${name} beer`}
          imageStyle={{ width: 50, height: 100 }}
        />
      </ImageContainer>
      <div>
        <TextTruncated text={name} />
      </div>
      <div>
        <SubTitle>{`ABV ${abv}`}</SubTitle>
      </div>
    </ItemContainer>
  );
};

export default ProductItemRenderer;
