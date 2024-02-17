interface IconProps {
  width: number;
  height: number;
  color: string;
}
export const ArrowRighIcon: React.FC<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill={color}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 12H20"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M13 5L20 12L13 19"
        stroke={color}
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
