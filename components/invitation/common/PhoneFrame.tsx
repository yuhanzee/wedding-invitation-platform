type PhoneFrameProps = {
  children: React.ReactNode;
};

export default function PhoneFrame({
  children,
}: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-neutral-900 flex items-center justify-center p-6">

      <div
        className="
          relative
          w-full
          max-w-[430px]
          h-screen
          md:h-[874px]
          md:max-h-[90vh]
          overflow-hidden
          rounded-[30px]
          bg-[#FAF8F6]
          shadow-2xl
        "
      >
        {children}
      </div>

    </div>
  );
}