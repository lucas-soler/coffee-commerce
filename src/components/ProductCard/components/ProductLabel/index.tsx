import { memo } from "react";
import { ProductLabelContainer } from "./styles";

interface ProductLabelProps {
  children: React.ReactNode;
}

export const ProductLabel = memo(({ children }: ProductLabelProps) => {
  return <ProductLabelContainer>{children}</ProductLabelContainer>;
});
