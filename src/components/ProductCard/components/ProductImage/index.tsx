import { ProductImageContainer } from "./styles";

interface ProductImageProps {
  src: string;

}

export function ProductImage({src} : ProductImageProps){
  return <ProductImageContainer src={src} />
}

