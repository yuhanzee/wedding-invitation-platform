type IconProps = {
  className?: string;
};

export default function NextIcon({
  className,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="18" y1="5" x2="18" y2="19" />
      <polygon points="6 5 16 12 6 19 6 5" />
    </svg>
  );
}