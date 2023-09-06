import { memo } from "react";
import { ProductImageContainer } from "./styles";

interface ProductImageProps {
  src: string;
}

export const ProductImage = memo(({ src }: ProductImageProps) => {
  return <ProductImageContainer src={src} />;
});
