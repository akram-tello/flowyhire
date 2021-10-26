export const Image = ({ src, width, height }) => (
  <img src={`/img/${src}`} alt={src} width={width} height={height} />
);