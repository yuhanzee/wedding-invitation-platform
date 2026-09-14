// // 

// type PhoneFrameProps = {
//   children: React.ReactNode;
// };

// export default function PhoneFrame({
//   children,
// }: PhoneFrameProps) {
//   return (
//     <div
//       className="
//         flex
//         w-full
//         justify-center
//         bg-[#F7F3EA]
//       "
//     >
//       <div
//         className="
//           relative
//           w-full
//           max-w-[430px]
//           min-h-svh
//           overflow-x-hidden
//           bg-[#FAF8F6]

//           sm:max-w-[430px]

//           md:max-w-[520px]

//           lg:max-w-[600px]

//           xl:max-w-[680px]

//           2xl:max-w-[720px]
//         "
//       >
//         {children}
//       </div>
//     </div>
//   );
// }


type PhoneFrameProps = {
  children: React.ReactNode;
};

export default function PhoneFrame({
  children,
}: PhoneFrameProps) {
  return (
    <div className="flex w-full justify-center bg-[#F7F3EA]">
      <div
        className="
          relative
          w-full
          min-h-svh
          overflow-x-hidden
          bg-[#F7F3EA]

          max-w-[430px]

          sm:max-w-[480px]
          md:max-w-[560px]
          lg:max-w-[620px]
          xl:max-w-[680px]
          2xl:max-w-[720px]
        "
      >
        {children}
      </div>
    </div>
  );
}
