type IconProps = {
  className?: string;
};

export default function PreviousIcon({
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
      <line x1="6" y1="5" x2="6" y2="19" />
      <polygon points="18 5 8 12 18 19 18 5" />
    </svg>
  );
}