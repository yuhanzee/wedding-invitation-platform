type DateDetailsCardProps = {
  dateText?: string;
};

export default function DateDetailsCard({ dateText }: DateDetailsCardProps) {
  return (
    <div className="w-[135px] h-[135px] bg-[#FAF2E9] border border-[#E9DFD3] rounded-full shadow-md flex flex-col items-center justify-center p-3 text-center select-none pointer-events-none">
      {/* 
        TODO: Paste your Figma Date Details Card component code here.
        We pass down the 'dateText' prop if you want to render the date dynamically.
      */}
      <div className="text-[9px] text-neutral-400 uppercase tracking-wider font-semibold mb-1">
        Date Details Card
      </div>
      {dateText && (
        <div className="text-[7px] text-neutral-500 font-mono whitespace-pre-line">
          {dateText}
        </div>
      )}
    </div>
  );
}
