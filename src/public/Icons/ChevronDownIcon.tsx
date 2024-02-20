interface IconProps {
  color: string;
}
export const ChevronDown: React.FC<IconProps> = ({ color = "#111111" }) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.02042 9.43236L0.407001 4.81894C-0.904182 3.5199 1.25684 1.24961 2.59231 2.59721L5.99167 5.99657L9.46387 2.59721C10.86 1.20105 12.8025 3.65344 11.6492 4.8068L7.03576 9.42022C6.42873 9.9544 5.54247 9.9544 5.02042 9.42022L5.02042 9.43236Z"
        fill={color}
      />
    </svg>
  );
};
