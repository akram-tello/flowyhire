import { StyledImage } from "./ImageElement";
export const Image = ({ src, width, height }) => (
  <StyledImage src={`/img/${src}`} alt={src} width={width} height={height} />
);