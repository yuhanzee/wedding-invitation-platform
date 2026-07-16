type IconProps = {
  className?: string;
};

export default function PlayIcon({
  className,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <path d="M8 5.5L19 12L8 18.5V5.5Z" />
    </svg>
  );
}