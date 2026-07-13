type PhoneFrameProps = {
  children: React.ReactNode;
};

export default function PhoneFrame({
  children,
}: PhoneFrameProps) {
  return (
    <div className="min-h-screen bg-neutral-900 flex justify-center items-center">

      <div
        className="
          relative
          w-full
          max-w-[430px]
          h-screen
          bg-[#FAF8F6]
          overflow-hidden
          md:h-[874px]
          md:max-h-[90vh]
          md:rounded-[30px]
          md:shadow-2xl
        "
      >
        {children}
      </div>

    </div>
  );
}