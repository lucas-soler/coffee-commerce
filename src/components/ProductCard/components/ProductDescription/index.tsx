import { memo } from "react";
import { ProductDescriptionContainer } from "./styles";

interface ProductDescriptionProps {
  kind: string;
  description: string;
}

export const ProductDescription = memo(
  ({ kind, description }: ProductDescriptionProps) => {
    return (
      <ProductDescriptionContainer>
        <p className="kind">{kind}</p>
        <p className="description">{description}</p>
      </ProductDescriptionContainer>
    );
  }
);
