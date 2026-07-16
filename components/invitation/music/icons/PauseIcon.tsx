type IconProps = {
  className?: string;
};

export default function PauseIcon({
  className,
}: IconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
    >
      <rect x="7" y="5" width="3" height="14" rx="1.5" />
      <rect x="14" y="5" width="3" height="14" rx="1.5" />
    </svg>
  );
}