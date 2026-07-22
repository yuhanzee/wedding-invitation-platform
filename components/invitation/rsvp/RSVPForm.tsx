// // // // // "use client";

// // // // // import { motion, AnimatePresence } from "motion/react";
// // // // // import { useState } from "react";

// // // // // type RSVPFormProps = {
// // // // //   guestName?: string;
// // // // //   familyCount?: number;
// // // // // };

// // // // // export default function RSVPForm({
// // // // //   guestName = "Dear Guest",
// // // // //   familyCount = 2,
// // // // // }: RSVPFormProps) {
// // // // //   const [attending, setAttending] = useState<boolean | null>(null);
// // // // //   const [message, setMessage] = useState("");
// // // // //   const [submitted, setSubmitted] = useState(false);

// // // // //   return (
// // // // //     <AnimatePresence mode="wait">
// // // // //       {!submitted ? (
// // // // //         <motion.div
// // // // //           key="form"
// // // // //           initial={{ opacity: 0, y: 18 }}
// // // // //           animate={{ opacity: 1, y: 0 }}
// // // // //           exit={{ opacity: 0, scale: 0.96 }}
// // // // //           transition={{ duration: 0.6 }}
// // // // //           className="flex h-full flex-col"
// // // // //         >
// // // // //           <div className="text-center">
// // // // //             <h2 className="font-serif text-[22px] text-[#062D59] tracking-[0.25em]">
// // // // //               RSVP
// // // // //             </h2>

// // // // //             <div className="mx-auto mt-2 h-px w-16 bg-[#B8915F]" />

// // // // //           </div>

// // // // //           <div className="mt-4">
// // // // //             <p className="text-[12px] uppercase tracking-[0.18em] text-[#888]">
// // // // //               Dear Guest
// // // // //             </p>

// // // // //             <div className="mt-2 rounded-full border border-[#DCC7A7] bg-white px-4 py-2 text-center text-[14px] font-medium text-[#062D59]">
// // // // //              {guestName}
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="mt-6">
// // // // //             <p className="text-[12px] uppercase tracking-[0.18em] text-[#888]">
// // // // //               Seats Reserved
// // // // //             </p>

// // // // //             <div className="mt-2 rounded-full border border-[#DCC7A7] bg-white py-2 text-center text-lg font-semibold text-[#062D59]">
// // // // //               {familyCount}
// // // // //             </div>
// // // // //           </div>

// // // // //           <div className="mt-6">
// // // // //             <p className="mb-3 text-center text-[13px] text-[#666]">
// // // // //               Will you attend?
// // // // //             </p>

// // // // //             <button
// // // // //               onClick={() => setAttending(true)}
// // // // //               className={`mb-3 w-full rounded-full border py-3 text-sm font-medium transition-all ${
// // // // //                 attending === true
// // // // //                   ? "border-[#062D59] bg-[#062D59] text-white"
// // // // //                   : "border-[#062D59] bg-white text-[#062D59]"
// // // // //               }`}
// // // // //             >
// // // // //               Joyfully Accept
// // // // //             </button>

// // // // //             <button
// // // // //               onClick={() => setAttending(false)}
// // // // //               className={`w-full rounded-full border py-3 text-sm font-medium transition-all ${
// // // // //                 attending === false
// // // // //                   ? "border-[#B75B74] bg-[#B75B74] text-white"
// // // // //                   : "border-[#B75B74] bg-white text-[#B75B74]"
// // // // //               }`}
// // // // //             >
// // // // //               Regretfully Decline
// // // // //             </button>
// // // // //           </div>

// // // // //           <div className="mt-6">
// // // // //             <label className="mb-2 block text-center text-[12px] uppercase tracking-[0.18em] text-[#888]">
// // // // //               Message
// // // // //             </label>

// // // // //             <textarea
// // // // //               value={message}
// // // // //               onChange={(e) => setMessage(e.target.value)}
// // // // //               rows={3}
// // // // //               placeholder="Leave a lovely message..."
// // // // //               className="w-full resize-none rounded-2xl border border-[#DCC7A7] bg-white p-3 text-sm text-[#062D59] outline-none"
// // // // //             />
// // // // //           </div>

// // // // //           <button
// // // // //             onClick={() => setSubmitted(true)}
// // // // //             className="mt-7 rounded-full border-2 border-[#062D59] py-3 text-sm font-semibold uppercase tracking-[0.2em] text-[#062D59] transition-all hover:bg-[#062D59] hover:text-white"
// // // // //           >
// // // // //             Confirm RSVP
// // // // //           </button>
// // // // //         </motion.div>
// // // // //       ) : (
// // // // //         <motion.div
// // // // //           key="success"
// // // // //           initial={{ opacity: 0, scale: 0.85 }}
// // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //           className="flex h-full flex-col items-center justify-center text-center"
// // // // //         >
// // // // //           <motion.div
// // // // //             animate={{
// // // // //               scale: [1, 1.15, 1],
// // // // //             }}
// // // // //             transition={{
// // // // //               repeat: Infinity,
// // // // //               duration: 1.8,
// // // // //             }}
// // // // //             className="text-5xl"
// // // // //           >
// // // // //             🤍
// // // // //           </motion.div>

// // // // //           <h2 className="mt-5 font-serif text-3xl text-[#062D59]">
// // // // //             Thank You
// // // // //           </h2>

// // // // //           <p className="mt-5 text-sm leading-7 text-[#666]">
// // // // //             Your RSVP has been
// // // // //             <br />
// // // // //             received successfully.
// // // // //             <br />
// // // // //             <br />
// // // // //             We can't wait to
// // // // //             <br />
// // // // //             celebrate together.
// // // // //           </p>
// // // // //         </motion.div>
// // // // //       )}
// // // // //     </AnimatePresence>
// // // // //   );
// // // // // }

// // // // "use client";

// // // // import { motion, AnimatePresence } from "motion/react";
// // // // import { useState } from "react";

// // // // type RSVPFormProps = {
// // // //   guestName?: string;
// // // //   familyCount?: number;
// // // // };

// // // // export default function RSVPForm({
// // // //   guestName = "Dear Guest",
// // // //   familyCount = 2,
// // // // }: RSVPFormProps) {
// // // //   const [attending, setAttending] = useState<boolean | null>(null);
// // // //   const [message, setMessage] = useState("");
// // // //   const [submitted, setSubmitted] = useState(false);

// // // //   return (
// // // //     <AnimatePresence mode="wait">
// // // //       {!submitted ? (
// // // //         <motion.div
// // // //           key="form"
// // // //           initial={{ opacity: 0, y: 15 }}
// // // //           animate={{ opacity: 1, y: 0 }}
// // // //           exit={{ opacity: 0 }}
// // // //           transition={{ duration: 0.6 }}
// // // //           className="flex h-full flex-col"
// // // //         >
// // // //           <h2 className="text-center font-serif text-[24px] tracking-[0.35em] text-[#062D59]">
// // // //             RSVP
// // // //           </h2>

// // // //           <p className="mt-2 text-center text-[11px] leading-5 text-[#8B7A63]">
// // // //             We'd be honoured
// // // //             <br />
// // // //             by your presence
// // // //           </p>

// // // //           <div className="my-4 flex items-center">
// // // //             <div className="h-px flex-1 bg-[#C8A46A]" />
// // // //             <span className="px-3 text-[#C8A46A] text-sm">❦</span>
// // // //             <div className="h-px flex-1 bg-[#C8A46A]" />
// // // //           </div>

// // // //           <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#9B8A75]">
// // // //             Dear
// // // //           </p>

// // // //           <h3 className="mt-1 text-center font-serif text-[18px] text-[#062D59]">
// // // //             {guestName}
// // // //           </h3>

// // // //           <div className="my-4 flex items-center">
// // // //             <div className="h-px flex-1 bg-[#C8A46A]" />
// // // //             <span className="px-3 text-[#C8A46A] text-sm">❦</span>
// // // //             <div className="h-px flex-1 bg-[#C8A46A]" />
// // // //           </div>

// // // //           <p className="text-center text-[10px] uppercase tracking-[0.3em] text-[#9B8A75]">
// // // //             Reserved For
// // // //           </p>

// // // //           <h3 className="mt-1 text-center font-serif text-[18px] text-[#062D59]">
// // // //             {familyCount} Guest{familyCount > 1 ? "s" : ""}
// // // //           </h3>

// // // //           <p className="mt-5 text-center text-[12px] text-[#666]">
// // // //             Will you celebrate with us?
// // // //           </p>

// // // //           <button
// // // //             onClick={() => setAttending(true)}
// // // //             className={`mt-3 rounded-full border py-2.5 text-[13px] transition-all ${
// // // //               attending === true
// // // //                 ? "bg-[#062D59] border-[#062D59] text-white"
// // // //                 : "border-[#062D59] text-[#062D59]"
// // // //             }`}
// // // //           >
// // // //             ✓ Joyfully Accept
// // // //           </button>

// // // //           <button
// // // //             onClick={() => setAttending(false)}
// // // //             className={`mt-2 rounded-full border py-2.5 text-[13px] transition-all ${
// // // //               attending === false
// // // //                 ? "bg-[#B86A82] border-[#B86A82] text-white"
// // // //                 : "border-[#B86A82] text-[#B86A82]"
// // // //             }`}
// // // //           >
// // // //             Regretfully Decline
// // // //           </button>

// // // //           <div className="my-4 flex items-center">
// // // //             <div className="h-px flex-1 bg-[#C8A46A]" />
// // // //             <span className="px-3 text-[#C8A46A] text-sm">❦</span>
// // // //             <div className="h-px flex-1 bg-[#C8A46A]" />
// // // //           </div>

// // // //           <p className="text-center text-[11px] italic text-[#8B7A63]">
// // // //             Leave your wishes...
// // // //           </p>

// // // //           <textarea
// // // //             rows={3}
// // // //             value={message}
// // // //             onChange={(e) => setMessage(e.target.value)}
// // // //             placeholder="Your blessings..."
// // // //             className="mt-3 resize-none border-0 border-b border-[#D5C2A3] bg-transparent text-center text-sm outline-none"
// // // //           />

// // // //           <button
// // // //             onClick={() => setSubmitted(true)}
// // // //             className="mt-auto rounded-full border-2 border-[#062D59] py-3 text-[12px] uppercase tracking-[0.3em] text-[#062D59] transition-all hover:bg-[#062D59] hover:text-white"
// // // //           >
// // // //             Confirm RSVP
// // // //           </button>
// // // //         </motion.div>
// // // //       ) : (
// // // //         <motion.div
// // // //           key="success"
// // // //           initial={{ opacity: 0, scale: 0.8 }}
// // // //           animate={{ opacity: 1, scale: 1 }}
// // // //           className="flex h-full flex-col items-center justify-center text-center"
// // // //         >
// // // //           <div className="text-5xl">🤍</div>

// // // //           <h2 className="mt-4 font-serif text-3xl text-[#062D59]">
// // // //             Thank You
// // // //           </h2>

// // // //           <p className="mt-5 text-sm leading-7 text-[#7B6C58]">
// // // //             Your RSVP has been received.
// // // //             <br />
// // // //             We look forward to celebrating
// // // //             <br />
// // // //             this beautiful day together.
// // // //           </p>
// // // //         </motion.div>
// // // //       )}
// // // //     </AnimatePresence>
// // // //   );
// // // // }

// // // "use client";

// // // import { FormEvent, useState } from "react";
// // // import { AnimatePresence, motion } from "motion/react";

// // // type RSVPFormProps = {
// // //   guestName?: string;
// // //   familyCount?: number;
// // // };

// // // export default function RSVPForm({
// // //   guestName = "Dilmith Ranasinghe",
// // //   familyCount = 2,
// // // }: RSVPFormProps) {
// // //   const [attending, setAttending] = useState<boolean | null>(null);
// // //   const [message, setMessage] = useState("");
// // //   const [submitted, setSubmitted] = useState(false);

// // //   function handleSubmit(event: FormEvent<HTMLFormElement>) {
// // //     event.preventDefault();

// // //     if (attending === null) {
// // //       return;
// // //     }

// // //     setSubmitted(true);
// // //   }

// // //   return (
// // //     <AnimatePresence mode="wait">
// // //       {!submitted ? (
// // //         <motion.form
// // //           key="rsvp-form"
// // //           onSubmit={handleSubmit}
// // //           initial={{ opacity: 0, y: 18 }}
// // //           animate={{ opacity: 1, y: 0 }}
// // //           exit={{ opacity: 0, y: -12 }}
// // //           transition={{
// // //             duration: 0.7,
// // //             delay: 0.7,
// // //             ease: [0.22, 1, 0.36, 1],
// // //           }}
// // //           className="flex h-full w-full flex-col items-center text-center"
// // //         >
// // //           <h2 className="font-serif text-[24px] tracking-[0.32em] text-[#063365]">
// // //             RSVP
// // //           </h2>

// // //           <p className="mt-1 text-[10px] leading-[16px] text-[#8d716c]">
// // //             We&apos;d be honoured by your presence
// // //           </p>

// // //           <Divider />

// // //           <p className="text-[8px] uppercase tracking-[0.28em] text-[#9d7d77]">
// // //             Dear
// // //           </p>

// // //           <p className="mt-1 max-w-[185px] truncate font-serif text-[16px] text-[#063365]">
// // //             {guestName}
// // //           </p>

// // //           <Divider />

// // //           <p className="text-[8px] uppercase tracking-[0.28em] text-[#9d7d77]">
// // //             Reserved for
// // //           </p>

// // //           <p className="mt-1 font-serif text-[15px] text-[#063365]">
// // //             {familyCount} Guest{familyCount === 1 ? "" : "s"}
// // //           </p>

// // //           <Divider />

// // //           <p className="text-[10px] text-[#685d5a]">
// // //             Will you celebrate with us?
// // //           </p>

// // //           <div className="mt-2 grid w-full gap-2">
// // //             <button
// // //               type="button"
// // //               onClick={() => setAttending(true)}
// // //               className={`h-8 w-full rounded-full border text-[10px] transition-all duration-300 ${
// // //                 attending === true
// // //                   ? "border-[#063365] bg-[#063365] text-white"
// // //                   : "border-[#063365] bg-white/70 text-[#063365]"
// // //               }`}
// // //             >
// // //               Joyfully Accept
// // //             </button>

// // //             <button
// // //               type="button"
// // //               onClick={() => setAttending(false)}
// // //               className={`h-8 w-full rounded-full border text-[10px] transition-all duration-300 ${
// // //                 attending === false
// // //                   ? "border-[#c98a9b] bg-[#c98a9b] text-white"
// // //                   : "border-[#c98a9b] bg-white/70 text-[#a76679]"
// // //               }`}
// // //             >
// // //               Regretfully Decline
// // //             </button>
// // //           </div>

// // //           <div className="mt-3 w-full">
// // //             <label
// // //               htmlFor="rsvp-message"
// // //               className="text-[8px] uppercase tracking-[0.22em] text-[#9d7d77]"
// // //             >
// // //               Leave your wishes
// // //             </label>

// // //             <textarea
// // //               id="rsvp-message"
// // //               value={message}
// // //               onChange={(event) => setMessage(event.target.value)}
// // //               rows={2}
// // //               maxLength={250}
// // //               placeholder="Write a lovely message..."
// // //               className="mt-1 h-[45px] w-full resize-none border-0 border-b border-[#d3aeb4] bg-transparent px-1 py-1 text-center text-[10px] leading-4 text-[#063365] outline-none placeholder:text-[#b6a09d]"
// // //             />
// // //           </div>

// // //           <button
// // //             type="submit"
// // //             disabled={attending === null}
// // //             className="mt-3 h-9 w-full rounded-full border border-[#063365] bg-transparent text-[9px] uppercase tracking-[0.2em] text-[#063365] transition-all duration-300 hover:bg-[#063365] hover:text-white disabled:cursor-not-allowed disabled:opacity-40"
// // //           >
// // //             Confirm RSVP
// // //           </button>
// // //         </motion.form>
// // //       ) : (
// // //         <motion.div
// // //           key="rsvp-success"
// // //           initial={{ opacity: 0, scale: 0.88 }}
// // //           animate={{ opacity: 1, scale: 1 }}
// // //           transition={{
// // //             duration: 0.8,
// // //             ease: [0.22, 1, 0.36, 1],
// // //           }}
// // //           className="flex h-full w-full flex-col items-center justify-center px-3 text-center"
// // //         >
// // //           <motion.div
// // //             animate={{
// // //               scale: [1, 1.12, 1],
// // //             }}
// // //             transition={{
// // //               duration: 1.8,
// // //               repeat: Infinity,
// // //               ease: "easeInOut",
// // //             }}
// // //             className="text-[28px] text-[#c98a9b]"
// // //           >
// // //             ♥
// // //           </motion.div>

// // //           <h2 className="mt-3 font-serif text-[25px] tracking-[0.08em] text-[#063365]">
// // //             Thank You
// // //           </h2>

// // //           <div className="my-4 flex w-full items-center gap-2">
// // //             <span className="h-px flex-1 bg-[#d4aa77]" />
// // //             <span className="text-[11px] text-[#d4aa77]">❦</span>
// // //             <span className="h-px flex-1 bg-[#d4aa77]" />
// // //           </div>

// // //           <p className="text-[11px] leading-5 text-[#796965]">
// // //             Your RSVP has been received.
// // //             <br />
// // //             We look forward to celebrating
// // //             <br />
// // //             this beautiful day with you.
// // //           </p>
// // //         </motion.div>
// // //       )}
// // //     </AnimatePresence>
// // //   );
// // // }

// // // function Divider() {
// // //   return (
// // //     <div className="my-3 flex w-full items-center gap-2">
// // //       <span className="h-px flex-1 bg-[#d4aa77]" />
// // //       <span className="text-[9px] text-[#d4aa77]">❦</span>
// // //       <span className="h-px flex-1 bg-[#d4aa77]" />
// // //     </div>
// // //   );
// // // }

// // "use client";

// // import { useState } from "react";
// // import { AnimatePresence, motion } from "motion/react";

// // type RSVPFormProps = {
// //   guestName?: string;
// //   familyCount?: number;
// // };

// // export default function RSVPForm({
// //   guestName = "Guest",
// //   familyCount = 1,
// // }: RSVPFormProps) {
// //   const [attending, setAttending] = useState<boolean | null>(null);
// //   const [message, setMessage] = useState("");
// //   const [submitted, setSubmitted] = useState(false);

// //   if (submitted) {
// //     return (
// //       <motion.div
// //         initial={{ opacity: 0, scale: .9 }}
// //         animate={{ opacity: 1, scale: 1 }}
// //         className="flex h-full flex-col items-center justify-center text-center"
// //       >
// //         <motion.div
// //           animate={{
// //             scale: [1, 1.1, 1],
// //           }}
// //           transition={{
// //             repeat: Infinity,
// //             duration: 1.8,
// //           }}
// //           className="text-[42px]"
// //         >
// //           🤍
// //         </motion.div>

// //         <h2 className="mt-4 font-serif text-[30px] text-[#063365]">
// //           Thank You
// //         </h2>

// //         <div className="my-5 flex w-full items-center">
// //           <div className="h-px flex-1 bg-[#D7B37A]" />
// //           <span className="px-3 text-[#D7B37A]">
// //             ❦
// //           </span>
// //           <div className="h-px flex-1 bg-[#D7B37A]" />
// //         </div>

// //         <p className="text-[13px] leading-7 text-[#6D625C]">
// //           Your RSVP has been received.
// //           <br />
// //           We cannot wait to celebrate
// //           <br />
// //           this beautiful day with you.
// //         </p>
// //       </motion.div>
// //     );
// //   }

// //   return (
// //     <AnimatePresence mode="wait">
// //       <motion.div
// //         initial={{
// //           opacity: 0,
// //           y: 20,
// //         }}
// //         animate={{
// //           opacity: 1,
// //           y: 0,
// //         }}
// //         transition={{
// //           delay: .8,
// //           duration: .8,
// //         }}
// //         className="flex h-full flex-col"
// //       >
// //         <h2 className="text-center font-serif text-[28px] tracking-[.35em] text-[#063365]">
// //           RSVP
// //         </h2>

// //         <p className="mt-2 text-center text-[11px] leading-5 text-[#8D756A]">
// //           We'd be honoured
// //           <br />
// //           by your presence
// //         </p>

// //         <Divider />

// //         <Label>Dear</Label>

// //         <Value>{guestName}</Value>

// //         <Divider />

// //         <Label>Reserved For</Label>

// //         <Value>
// //           {familyCount} Guest{familyCount > 1 && "s"}
// //         </Value>

// //         <Divider />

// //         <p className="text-center text-[12px] text-[#6B625C]">
// //           Will you celebrate with us?
// //         </p>

// //         <div className="mt-3 space-y-3">
// //           <RSVPButton
// //             active={attending === true}
// //             color="blue"
// //             onClick={() => setAttending(true)}
// //           >
// //             Joyfully Accept
// //           </RSVPButton>

// //           <RSVPButton
// //             active={attending === false}
// //             color="pink"
// //             onClick={() => setAttending(false)}
// //           >
// //             Regretfully Decline
// //           </RSVPButton>
// //         </div>

// //         <Divider />

// //         <Label>Leave Your Wishes</Label>

// //         <textarea
// //           rows={4}
// //           value={message}
// //           onChange={(e) => setMessage(e.target.value)}
// //           placeholder="Write a lovely message..."
// //           className="
// //             mt-3
// //             resize-none
// //             bg-transparent
// //             text-center
// //             text-[12px]
// //             leading-6
// //             text-[#063365]
// //             outline-none
// //             border-none
// //           "
// //         />

// //         <button
// //           disabled={attending === null}
// //           onClick={() => setSubmitted(true)}
// //           className="
// //             mt-auto
// //             h-11
// //             rounded-full
// //             border-2
// //             border-[#063365]
// //             text-[11px]
// //             tracking-[.25em]
// //             uppercase
// //             text-[#063365]
// //             transition
// //             hover:bg-[#063365]
// //             hover:text-white
// //             disabled:opacity-40
// //           "
// //         >
// //           Confirm RSVP
// //         </button>
// //       </motion.div>
// //     </AnimatePresence>
// //   );
// // }

// // function Divider() {
// //   return (
// //     <div className="my-5 flex items-center">
// //       <div className="h-px flex-1 bg-[#D7B37A]" />
// //       <span className="px-3 text-[#D7B37A] text-[11px]">
// //         ❦
// //       </span>
// //       <div className="h-px flex-1 bg-[#D7B37A]" />
// //     </div>
// //   );
// // }

// // function Label({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <p className="text-center text-[9px] uppercase tracking-[.35em] text-[#9B8477]">
// //       {children}
// //     </p>
// //   );
// // }

// // function Value({
// //   children,
// // }: {
// //   children: React.ReactNode;
// // }) {
// //   return (
// //     <h3 className="mt-1 text-center font-serif text-[19px] text-[#063365]">
// //       {children}
// //     </h3>
// //   );
// // }

// // function RSVPButton({
// //   children,
// //   active,
// //   color,
// //   onClick,
// // }: {
// //   children: React.ReactNode;
// //   active: boolean;
// //   color: "blue" | "pink";
// //   onClick: () => void;
// // }) {
// //   const activeClass =
// //     color === "blue"
// //       ? "bg-[#063365] border-[#063365] text-white"
// //       : "bg-[#D08AA0] border-[#D08AA0] text-white";

// //   const inactiveClass =
// //     color === "blue"
// //       ? "border-[#063365] text-[#063365]"
// //       : "border-[#D08AA0] text-[#B86A82]";

// //   return (
// //     <button
// //       type="button"
// //       onClick={onClick}
// //       className={`
// //         h-10
// //         w-full
// //         rounded-full
// //         border
// //         text-[12px]
// //         transition-all
// //         duration-300
// //         ${
// //           active
// //             ? activeClass
// //             : inactiveClass
// //         }
// //       `}
// //     >
// //       {children}
// //     </button>
// //   );
// // }

// "use client";

// import { useState } from "react";
// import { motion } from "motion/react";

// type RSVPFormProps = {
//   guestName?: string;
//   familyCount?: number;
// };

// export default function RSVPForm({
//   guestName = "Guest",
//   familyCount = 1,
// }: RSVPFormProps) {
//   const [attending, setAttending] = useState<"yes" | "no">("yes");
//   const [message, setMessage] = useState("");

//   return (
//     <motion.form
//       initial={{
//         opacity: 0,
//         y: 15,
//       }}
//       animate={{
//         opacity: 1,
//         y: 0,
//       }}
//       transition={{
//         duration: 0.8,
//         delay: 0.4,
//       }}
//       className="flex h-full flex-col"
//     >
//       {/* Heading */}

//       <h2 className="text-center font-serif text-[26px] tracking-[0.25em] text-[#063365]">
//         RSVP
//       </h2>

//       {/* Guest */}

//       <h3 className="mt-5 text-center font-serif text-[20px] text-[#063365]">
//         {guestName}
//       </h3>

//       {/* Divider */}

//       <Divider />

//       {/* Reserved */}

//       <p className="text-center text-[10px] uppercase tracking-[0.35em] text-[#9D8576]">
//         Reserved For
//       </p>

//       <h3 className="mt-1 text-center font-serif text-[18px] text-[#063365]">
//         {familyCount} Guest{familyCount > 1 ? "s" : ""}
//       </h3>

//       {/* Divider */}

//       <Divider />

//       {/* Attendance */}

//       <p className="text-center text-[11px] text-[#6D635C]">
//         Will you attend?
//       </p>

//       <div className="mt-4 space-y-3">
//         <label className="flex cursor-pointer items-center gap-3">
//           <input
//             type="radio"
//             name="attendance"
//             checked={attending === "yes"}
//             onChange={() => setAttending("yes")}
//             className="h-4 w-4 accent-[#063365]"
//           />

//           <span className="text-[13px] text-[#063365]">
//             Joyfully Accept
//           </span>
//         </label>

//         <label className="flex cursor-pointer items-center gap-3">
//           <input
//             type="radio"
//             name="attendance"
//             checked={attending === "no"}
//             onChange={() => setAttending("no")}
//             className="h-4 w-4 accent-[#C18493]"
//           />

//           <span className="text-[13px] text-[#7C6A67]">
//             Regretfully Decline
//           </span>
//         </label>
//       </div>

//       {/* Divider */}

//       <Divider />

//       {/* Message */}

//       <p className="text-center text-[10px] uppercase tracking-[0.28em] text-[#9D8576]">
//         Message for the Couple
//       </p>

//       <textarea
//         rows={2}
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         placeholder="Share your wishes..."
//         className="
//           mt-3
//           w-full
//           resize-none
//           rounded-lg
//           border
//           border-[#E7D6C5]
//           bg-white/70
//           px-3
//           py-2
//           text-[12px]
//           text-[#063365]
//           outline-none
//           placeholder:text-[#B8AAA2]
//           focus:border-[#063365]
//         "
//       />

//       {/* Divider */}

//       <Divider />

//       {/* Button */}

//       <button
//         type="submit"
//         className="
//           h-10
//           rounded-full
//           border
//           border-[#063365]
//           bg-transparent
//           text-[11px]
//           font-medium
//           uppercase
//           tracking-[0.25em]
//           text-[#063365]
//           transition-all
//           duration-300
//           hover:bg-[#063365]
//           hover:text-white
//         "
//       >
//         Confirm RSVP
//       </button>
//     </motion.form>
//   );
// }

// function Divider() {
//   return (
//     <div className="my-5 flex items-center gap-3">
//       <div className="h-px flex-1 bg-[#D8B57C]" />
//       <span className="text-[#D8B57C] text-[11px]">❦</span>
//       <div className="h-px flex-1 bg-[#D8B57C]" />
//     </div>
//   );
// }

"use client";

import { useState } from "react";

type RSVPFormProps = {
  guestName?: string;
  familyCount?: number;
};

export default function RSVPForm({
  guestName = "Guest",
  familyCount = 1,
}: RSVPFormProps) {
  const [attendance, setAttendance] = useState<"accept" | "decline">("accept");
  const [message, setMessage] = useState("");

  return (
    <form className="flex h-full flex-col">

      {/* Guest */}

      <div className="mt-2">

        <p className="text-[12px] italic text-[#6E5C55]">
          Guest
        </p>

        <h3 className="mt-1 font-serif text-[19px] text-[#062D59]">
          {guestName}
        </h3>

      </div>
      

      {/* Reserved */}

      <div className="mt-7">

        <p className="text-[12px] italic text-[#6E5C55]">
          Reserved for
        </p>

        <h3 className="mt-1 font-serif text-[18px] text-[#062D59]">
          {familyCount} Guest{familyCount > 1 ? "s" : ""}
        </h3>

      </div>

      {/* Divider */}

      <div className="my-5 h-px bg-[#D9B26C]" />

      {/* Attendance */}

      <div className="grid grid-cols-2 gap-3">

        <label className="flex cursor-pointer items-center gap-2">

          <input
            type="radio"
            checked={attendance === "accept"}
            onChange={() => setAttendance("accept")}
            className="accent-[#062D59]"
          />

          <span className="text-[12px] text-[#4F433F]">
            Joyfully Accepts
          </span>

        </label>

        <label className="flex cursor-pointer items-center gap-2">

          <input
            type="radio"
            checked={attendance === "decline"}
            onChange={() => setAttendance("decline")}
            className="accent-[#D08A99]"
          />

          <span className="text-[12px] text-[#4F433F]">
            Regretfully Declines
          </span>

        </label>

      </div>

      {/* Divider */}

      <div className="my-5 h-px bg-[#D9B26C]" />

      {/* Message */}

      <div className="mt-1 flex flex-col gap-1.5">
        <p className="text-[12px] italic text-[#6E5C55]">
          Message for the couple
        </p>

        <textarea
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Share your wishes..."
          className="
            mt-0
            resize-none
            rounded-md
            border
            border-[#B8A79A]
            bg-white/70
            px-3
            py-2
            text-[13px]
            outline-none
          "
        />
      </div>

      {/* Button

      <button
        type="submit"
        className="
          mt-auto
          h-10
          rounded-sm
          border
          border-[#E0B54D]
          bg-[#FFF8E8]
          text-[12px]
          text-[#B78920]
          transition
          hover:bg-[#E0B54D]
          hover:text-white
        "
      >
        Send RSVP
      </button> */}

    </form>
  );
}