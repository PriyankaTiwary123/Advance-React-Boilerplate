interface IconProps {
  color: string;
  width: string;
  height: string;
}
export const ClockIcon: React.FC<IconProps> = ({ color, width, height }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clipRule="evenodd"
        d="M12 0C18.6273 0 24 5.37267 24 12C24 18.6273 18.6273 24 12 24C5.37267 24 0 18.6273 0 12C0 5.37267 5.37267 0 12 0ZM12 2.66667C6.85333 2.66667 2.66667 6.85333 2.66667 12C2.66667 17.1467 6.85333 21.3333 12 21.3333C17.1467 21.3333 21.3333 17.1467 21.3333 12C21.3333 6.85333 17.1467 2.66667 12 2.66667ZM12 5.33333C12.736 5.33333 13.3333 5.93067 13.3333 6.66667L13.3332 10.6656L16 10.6667C16.736 10.6667 17.3333 11.264 17.3333 12C17.3333 12.736 16.736 13.3333 16 13.3333H12C11.264 13.3333 10.6667 12.736 10.6667 12V6.66667C10.6667 5.93067 11.264 5.33333 12 5.33333Z"
        fill={color}
      />
    </svg>
  );
};
