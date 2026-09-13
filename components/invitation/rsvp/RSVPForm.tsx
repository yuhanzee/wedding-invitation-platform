// "use client";

// import {
//   FormEvent,
//   useState,
// } from "react";

// import {
//   AnimatePresence,
//   motion,
// } from "motion/react";

// import { cormorantGaramond } from "@/lib/fonts";

// type RSVPFormProps = {
//   guestName?: string;
//   familyCount?: number;
//   onSubmitted?: () => void;
// };

// type Attendance =
//   | "accepted"
//   | "declined"
//   | null;

// export default function RSVPForm({
//   guestName = "Guest",
//   familyCount = 1,
//   onSubmitted,
// }: RSVPFormProps) {
//   const [attendance, setAttendance] =
//     useState<Attendance>(null);

//   const [message, setMessage] =
//     useState("");

//   const [error, setError] =
//     useState("");

//   const [submitting, setSubmitting] =
//     useState(false);

//   const [submitted, setSubmitted] =
//     useState(false);

//   /* ==========================================
//      SUBMIT
//   ========================================== */

//   async function handleSubmit(
//     event: FormEvent<HTMLFormElement>
//   ) {
//     event.preventDefault();

//     if (!attendance) {
//       setError(
//         "Please select your attendance."
//       );

//       return;
//     }

//     setError("");
//     setSubmitting(true);

//     try {
//       /*
//        * TEMPORARY FRONTEND TEST.
//        *
//        * We will replace this with the MongoDB
//        * API request once the design is correct.
//        */

//       await new Promise((resolve) =>
//         setTimeout(resolve, 700)
//       );

//       console.log({
//         guestName,
//         familyCount,
//         attendance,
//         message,
//       });

//       setSubmitted(true);
// onSubmitted?.();
//     } catch (err) {
//       console.error(err);

//       setError(
//         "Something went wrong. Please try again."
//       );
//     } finally {
//       setSubmitting(false);
//     }
//   }

//   return (
//     <AnimatePresence mode="wait">
//       {!submitted ? (
//         /* ======================================
//            RSVP FORM
//         ======================================= */

//         <motion.form
//   id="rsvp-form"
//   key="rsvp-form"
//   initial={{
//     opacity: 1,
//   }}
//   exit={{
//     opacity: 0,
//     y: -8,
//   }}
//   transition={{
//     duration: 0.3,
//   }}
//   onSubmit={handleSubmit}
//   className="
//     flex
//     h-[405px]
//     flex-col
//   "
// >
//           {/* ==================================
//               GUEST NAME
//           =================================== */}

//           <div>
//             <p
//               className={`
//                 ${cormorantGaramond.className}
//                 text-[10px]
//                 italic
//                 text-[#756158]
//               `}
//             >
//               Guest
//             </p>

//             <h3
//               className={`
//                 ${cormorantGaramond.className}
//                 mt-[2px]
//                 text-[18px]
//                 font-semibold
//                 leading-none
//                 text-[#062D59]
//               `}
//             >
//               {guestName}
//             </h3>
//           </div>

//           {/* ==================================
//               RESERVED FOR
//           =================================== */}

//           <div className="mt-4">
//             <p
//               className={`
//                 ${cormorantGaramond.className}
//                 text-[10px]
//                 italic
//                 text-[#756158]
//               `}
//             >
//               Reserved for
//             </p>

//             <p
//               className={`
//                 ${cormorantGaramond.className}
//                 mt-[2px]
//                 text-[15px]
//                 font-semibold
//                 text-[#062D59]
//               `}
//             >
//               {familyCount}{" "}
//               {familyCount === 1
//                 ? "Guest"
//                 : "Guests"}
//             </p>
//           </div>

//           {/* Divider */}

//           <div
//             className="
//               my-3
//               h-px
//               w-full
//               bg-[#D7B778]/55
//             "
//           />

//           {/* ==================================
//               ATTENDANCE
//           =================================== */}

//           <p
//             className={`
//               ${cormorantGaramond.className}
//               mb-2
//               text-[10px]
//               italic
//               text-[#756158]
//             `}
//           >
//             Will you be joining us?
//           </p>

//           <div className="grid grid-cols-2 gap-2">
//             {/* ACCEPT */}

//             <button
//               type="button"
//               onClick={() => {
//                 setAttendance("accepted");
//                 setError("");
//               }}
//               aria-pressed={
//                 attendance === "accepted"
//               }
//               className={`
//                 min-h-[58px]
//                 border
//                 px-2
//                 py-2
//                 transition-all
//                 duration-300

//                 ${
//                   attendance === "accepted"
//                     ? `
//                       border-[#B88B49]
//                       bg-[#F8EFE1]
//                       shadow-[0_3px_8px_rgba(100,70,35,.06)]
//                     `
//                     : `
//                       border-[#DDD0BE]
//                       bg-[#FFFDF9]
//                       hover:border-[#BFA06D]
//                     `
//                 }
//               `}
//             >
//               <span
//                 className="
//                   flex
//                   items-center
//                   justify-center
//                   gap-[5px]
//                 "
//               >
//                 {/* Circle */}

//                 <span
//                   className={`
//                     flex
//                     h-[14px]
//                     w-[14px]
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     border

//                     ${
//                       attendance === "accepted"
//                         ? `
//                           border-[#B88B49]
//                           bg-[#B88B49]
//                         `
//                         : `
//                           border-[#9B9188]
//                         `
//                     }
//                   `}
//                 >
//                   {attendance ===
//                     "accepted" && (
//                     <span className="text-[8px] text-white">
//                       ✓
//                     </span>
//                   )}
//                 </span>

//                 <span
//                   className={`
//                     ${cormorantGaramond.className}
//                     text-[10px]
//                     leading-[1.05]
//                     text-[#4C403A]
//                   `}
//                 >
//                   Joyfully
//                   <br />
//                   Accepts
//                 </span>
//               </span>
//             </button>

//             {/* DECLINE */}

//             <button
//               type="button"
//               onClick={() => {
//                 setAttendance("declined");
//                 setError("");
//               }}
//               aria-pressed={
//                 attendance === "declined"
//               }
//               className={`
//                 min-h-[58px]
//                 border
//                 px-2
//                 py-2
//                 transition-all
//                 duration-300

//                 ${
//                   attendance === "declined"
//                     ? `
//                       border-[#B88B49]
//                       bg-[#F8EFE1]
//                       shadow-[0_3px_8px_rgba(100,70,35,.06)]
//                     `
//                     : `
//                       border-[#DDD0BE]
//                       bg-[#FFFDF9]
//                       hover:border-[#BFA06D]
//                     `
//                 }
//               `}
//             >
//               <span
//                 className="
//                   flex
//                   items-center
//                   justify-center
//                   gap-[5px]
//                 "
//               >
//                 <span
//                   className={`
//                     flex
//                     h-[14px]
//                     w-[14px]
//                     shrink-0
//                     items-center
//                     justify-center
//                     rounded-full
//                     border

//                     ${
//                       attendance === "declined"
//                         ? `
//                           border-[#B88B49]
//                           bg-[#B88B49]
//                         `
//                         : `
//                           border-[#9B9188]
//                         `
//                     }
//                   `}
//                 >
//                   {attendance ===
//                     "declined" && (
//                     <span className="text-[8px] text-white">
//                       ✓
//                     </span>
//                   )}
//                 </span>

//                 <span
//                   className={`
//                     ${cormorantGaramond.className}
//                     text-[10px]
//                     leading-[1.05]
//                     text-[#4C403A]
//                   `}
//                 >
//                   Regretfully
//                   <br />
//                   Declines
//                 </span>
//               </span>
//             </button>
//           </div>

//           {/* ==================================
//               ERROR
//           =================================== */}

//           <div className="min-h-[20px]">
//             {error && (
//               <motion.p
//                 initial={{
//                   opacity: 0,
//                   y: -3,
//                 }}
//                 animate={{
//                   opacity: 1,
//                   y: 0,
//                 }}
//                 className={`
//                   ${cormorantGaramond.className}
//                   mt-[4px]
//                   text-center
//                   text-[9px]
//                   text-[#A04F48]
//                 `}
//               >
//                 {error}
//               </motion.p>
//             )}
//           </div>

//           {/* ==================================
//               MESSAGE
//           =================================== */}

//           <div>
//             <label
//               htmlFor="rsvp-message"
//               className={`
//                 ${cormorantGaramond.className}
//                 text-[10px]
//                 italic
//                 text-[#756158]
//               `}
//             >
//               Message for the couple
//             </label>

//             <textarea
//               id="rsvp-message"
//               value={message}
//               onChange={(event) =>
//                 setMessage(
//                   event.target.value
//                 )
//               }
//               maxLength={300}
//               placeholder="Share your wishes..."
//               className={`
//                 ${cormorantGaramond.className}
//                 mt-[5px]
//                 h-[70px]
//                 w-full
//                 resize-none
//                 rounded-[3px]
//                 border
//                 border-[#D9C9BC]
//                 bg-white/80
//                 px-3
//                 py-2
//                 text-[11px]
//                 leading-[1.35]
//                 text-[#493B35]
//                 outline-none
//                 transition-all
//                 duration-300

//                 placeholder:text-[#B8ACA4]

//                 focus:border-[#B88B49]
//                 focus:bg-white
//                 focus:shadow-[0_0_0_2px_rgba(184,139,73,0.08)]
//               `}
//             />

//             <p
//               className="
//                 mt-[2px]
//                 text-right
//                 text-[7px]
//                 text-[#B2A49A]
//               "
//             >
//               {message.length}/300
//             </p>
//           </div>

// </motion.form>
//       ) : (
//         /* ======================================
//            SUCCESS STATE
//         ======================================= */

//         <motion.div
//           key="success"
//           initial={{
//             opacity: 0,
//             y: 10,
//             scale: 0.96,
//           }}
//           animate={{
//             opacity: 1,
//             y: 0,
//             scale: 1,
//           }}
//           transition={{
//             duration: 0.6,
//             ease: [0.22, 1, 0.36, 1],
//           }}
//           className="
//             flex
//             h-[405px]
//             flex-col
//             items-center
//             justify-center
//             -translate-y-[32px]
//             text-center
//           "
//         >
//           {/* Heart */}

//           <motion.div
//             initial={{
//               scale: 0,
//             }}
//             animate={{
//               scale: 1,
//             }}
//             transition={{
//               delay: 0.15,
//               type: "spring",
//               stiffness: 170,
//               damping: 14,
//             }}
//             className="
//               flex
//               h-[52px]
//               w-[52px]
//               items-center
//               justify-center
//               rounded-full
//               border
//               border-[#B88B49]
//               text-[22px]
//               text-[#B88B49]
//             "
//           >
//             ♡
//           </motion.div>

//           <p
//             className={`
//               ${cormorantGaramond.className}
//               mt-5
//               text-[8px]
//               uppercase
//               tracking-[0.3em]
//               text-[#9B795B]
//             `}
//           >
//             RSVP Received
//           </p>

//           <h3
//             className={`
//               ${cormorantGaramond.className}
//               mt-3
//               text-[23px]
//               font-medium
//               leading-tight
//               text-[#062D59]
//             `}
//           >
//             Thank you,
//             <br />
//             {guestName}
//           </h3>

//           {/* Divider */}

//           <div
//             className="
//               my-4
//               flex
//               w-[85px]
//               items-center
//               gap-2
//             "
//           >
//             <span className="h-px flex-1 bg-[#C8A365]/50" />

//             <span className="text-[6px] text-[#B78C47]">
//               ◆
//             </span>

//             <span className="h-px flex-1 bg-[#C8A365]/50" />
//           </div>

//           {/* Message */}

//           <p
//             className={`
//               ${cormorantGaramond.className}
//               max-w-[175px]
//               text-[12px]
//               italic
//               leading-[1.5]
//               text-[#69574E]
//             `}
//           >
//             {attendance === "accepted"
//               ? "We can't wait to celebrate our special day with you."
//               : "Thank you for letting us know. You'll be in our hearts on our special day."}
//           </p>

//           {/* Confirmation badge */}

//           <div
//             className="
//               mt-5
//               border
//               border-[#D5BA81]
//               bg-[#FBF4E7]
//               px-4
//               py-[7px]
//             "
//           >
//             <span
//               className={`
//                 ${cormorantGaramond.className}
//                 text-[9px]
//                 uppercase
//                 tracking-[0.16em]
//                 text-[#816942]
//               `}
//             >
//               ✓ Response Confirmed
//             </span>
//           </div>
//         </motion.div>
//       )}
//     </AnimatePresence>
//   );
// }

"use client";

import { FormEvent, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { cormorantGaramond } from "@/lib/fonts";

type RSVPFormProps = {
  guestName?: string;
  familyCount?: number;

  token: string;

  hasResponded?: boolean;
  existingAttendance?: boolean | null;
  existingMessage?: string;

  onSubmitted?: () => void;
};

type Attendance =
  | "accepted"
  | "declined"
  | null;

export default function RSVPForm({
  guestName = "Guest",
  familyCount = 1,
  token,
  hasResponded = false,
  existingAttendance = null,
  existingMessage = "",
  onSubmitted,
}: RSVPFormProps) {
  /* ==========================================
     INITIAL RSVP STATE

     Existing MongoDB response is converted
     into the UI attendance value.
  ========================================== */

  const [attendance, setAttendance] =
    useState<Attendance>(
      existingAttendance === true
        ? "accepted"
        : existingAttendance === false
          ? "declined"
          : null
    );

  const [message, setMessage] =
    useState(existingMessage);

  const [error, setError] =
    useState("");

  const [submitting, setSubmitting] =
    useState(false);

  /*
   * IMPORTANT:
   *
   * If MongoDB says this guest already
   * responded, immediately show the
   * confirmation state.
   */
  const [submitted, setSubmitted] =
    useState(hasResponded);

  /* ==========================================
     SUBMIT RSVP
  ========================================== */

  async function handleSubmit(
    event: FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    /* Already responded */

    if (submitted) {
      return;
    }

    /* Attendance required */

    if (!attendance) {
      setError(
        "Please select your attendance."
      );

      return;
    }

    setError("");
    setSubmitting(true);

    try {
      /* ======================================
         SEND RSVP TO API
      ======================================= */

      const response = await fetch(
        "/api/rsvp",
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            token,

            attending:
              attendance === "accepted",

            message: message.trim(),
          }),
        }
      );

      const data = await response.json();

      /* ======================================
         ALREADY RESPONDED

         API returns 409 if MongoDB already
         contains respondedAt.
      ======================================= */

      if (
        response.status === 409 &&
        data.alreadyResponded
      ) {
        if (
          typeof data.attending ===
          "boolean"
        ) {
          setAttendance(
            data.attending
              ? "accepted"
              : "declined"
          );
        }

        if (
          typeof data.message === "string"
        ) {
          setMessage(data.message);
        }

        setSubmitted(true);

        onSubmitted?.();

        return;
      }

      /* ======================================
         OTHER API ERROR
      ======================================= */

      if (!response.ok) {
        throw new Error(
          data.error ||
            "Unable to submit RSVP."
        );
      }

      /* ======================================
         SUCCESS
      ======================================= */

      setSubmitted(true);

      onSubmitted?.();
    } catch (err) {
      console.error(
        "RSVP submission error:",
        err
      );

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        /* ======================================
           RSVP FORM
        ======================================= */

        <motion.form
          id="rsvp-form"
          key="rsvp-form"
          initial={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
            y: -8,
          }}
          transition={{
            duration: 0.3,
          }}
          onSubmit={handleSubmit}
          className="
            flex
            h-[405px]
            flex-col
          "
        >
          {/* ==================================
              GUEST NAME
          =================================== */}

          <div>
            <p
              className={`
                ${cormorantGaramond.className}
                text-[10px]
                italic
                text-[#756158]
              `}
            >
              Guest
            </p>

            <h3
              className={`
                ${cormorantGaramond.className}
                mt-[2px]
                text-[18px]
                font-semibold
                leading-none
                text-[#062D59]
              `}
            >
              {guestName}
            </h3>
          </div>

          {/* ==================================
              RESERVED FOR
          =================================== */}

          <div className="mt-4">
            <p
              className={`
                ${cormorantGaramond.className}
                text-[10px]
                italic
                text-[#756158]
              `}
            >
              Reserved for
            </p>

            <p
              className={`
                ${cormorantGaramond.className}
                mt-[2px]
                text-[15px]
                font-semibold
                text-[#062D59]
              `}
            >
              {familyCount}{" "}
              {familyCount === 1
                ? "Guest"
                : "Guests"}
            </p>
          </div>

          {/* Divider */}

          <div
            className="
              my-3
              h-px
              w-full
              bg-[#D7B778]/55
            "
          />

          {/* ==================================
              ATTENDANCE
          =================================== */}

          <p
            className={`
              ${cormorantGaramond.className}
              mb-2
              text-[10px]
              italic
              text-[#756158]
            `}
          >
            Will you be joining us?
          </p>

          <div className="grid grid-cols-2 gap-2">
            {/* ACCEPT */}

            <button
              type="button"
              disabled={submitting}
              onClick={() => {
                setAttendance("accepted");
                setError("");
              }}
              aria-pressed={
                attendance === "accepted"
              }
              className={`
                min-h-[58px]
                border
                px-2
                py-2
                transition-all
                duration-300

                ${
                  attendance === "accepted"
                    ? `
                        border-[#B88B49]
                        bg-[#F8EFE1]
                        shadow-[0_3px_8px_rgba(100,70,35,.06)]
                      `
                    : `
                        border-[#DDD0BE]
                        bg-[#FFFDF9]
                        hover:border-[#BFA06D]
                      `
                }

                disabled:cursor-not-allowed
                disabled:opacity-60
              `}
            >
              <span
                className="
                  flex
                  items-center
                  justify-center
                  gap-[5px]
                "
              >
                <span
                  className={`
                    flex
                    h-[14px]
                    w-[14px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border

                    ${
                      attendance === "accepted"
                        ? `
                            border-[#B88B49]
                            bg-[#B88B49]
                          `
                        : `
                            border-[#9B9188]
                          `
                    }
                  `}
                >
                  {attendance ===
                    "accepted" && (
                    <span className="text-[8px] text-white">
                      ✓
                    </span>
                  )}
                </span>

                <span
                  className={`
                    ${cormorantGaramond.className}
                    text-[10px]
                    leading-[1.05]
                    text-[#4C403A]
                  `}
                >
                  Joyfully
                  <br />
                  Accepts
                </span>
              </span>
            </button>

            {/* DECLINE */}

            <button
              type="button"
              disabled={submitting}
              onClick={() => {
                setAttendance("declined");
                setError("");
              }}
              aria-pressed={
                attendance === "declined"
              }
              className={`
                min-h-[58px]
                border
                px-2
                py-2
                transition-all
                duration-300

                ${
                  attendance === "declined"
                    ? `
                        border-[#B88B49]
                        bg-[#F8EFE1]
                        shadow-[0_3px_8px_rgba(100,70,35,.06)]
                      `
                    : `
                        border-[#DDD0BE]
                        bg-[#FFFDF9]
                        hover:border-[#BFA06D]
                      `
                }

                disabled:cursor-not-allowed
                disabled:opacity-60
              `}
            >
              <span
                className="
                  flex
                  items-center
                  justify-center
                  gap-[5px]
                "
              >
                <span
                  className={`
                    flex
                    h-[14px]
                    w-[14px]
                    shrink-0
                    items-center
                    justify-center
                    rounded-full
                    border

                    ${
                      attendance === "declined"
                        ? `
                            border-[#B88B49]
                            bg-[#B88B49]
                          `
                        : `
                            border-[#9B9188]
                          `
                    }
                  `}
                >
                  {attendance ===
                    "declined" && (
                    <span className="text-[8px] text-white">
                      ✓
                    </span>
                  )}
                </span>

                <span
                  className={`
                    ${cormorantGaramond.className}
                    text-[10px]
                    leading-[1.05]
                    text-[#4C403A]
                  `}
                >
                  Regretfully
                  <br />
                  Declines
                </span>
              </span>
            </button>
          </div>

          {/* ==================================
              ERROR
          =================================== */}

          <div className="min-h-[20px]">
            {error && (
              <motion.p
                initial={{
                  opacity: 0,
                  y: -3,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                className={`
                  ${cormorantGaramond.className}
                  mt-[4px]
                  text-center
                  text-[9px]
                  text-[#A04F48]
                `}
              >
                {error}
              </motion.p>
            )}
          </div>

          {/* ==================================
              MESSAGE
          =================================== */}

          <div>
            <label
              htmlFor="rsvp-message"
              className={`
                ${cormorantGaramond.className}
                text-[10px]
                italic
                text-[#756158]
              `}
            >
              Message for the couple
            </label>

            <textarea
              id="rsvp-message"
              value={message}
              disabled={submitting}
              onChange={(event) =>
                setMessage(
                  event.target.value
                )
              }
              maxLength={300}
              placeholder="Share your wishes..."
              className={`
                ${cormorantGaramond.className}
                mt-[5px]
                h-[70px]
                w-full
                resize-none
                rounded-[3px]
                border
                border-[#D9C9BC]
                bg-white/80
                px-3
                py-2
                text-[11px]
                leading-[1.35]
                text-[#493B35]
                outline-none
                transition-all
                duration-300

                placeholder:text-[#B8ACA4]

                focus:border-[#B88B49]
                focus:bg-white
                focus:shadow-[0_0_0_2px_rgba(184,139,73,0.08)]

                disabled:cursor-not-allowed
                disabled:opacity-60
              `}
            />

            <p
              className="
                mt-[2px]
                text-right
                text-[7px]
                text-[#B2A49A]
              "
            >
              {message.length}/300
            </p>
          </div>

          {/* Submission status */}

          {submitting && (
            <p
              className={`
                ${cormorantGaramond.className}
                mt-[4px]
                text-center
                text-[9px]
                italic
                text-[#98735E]
              `}
            >
              Confirming your RSVP...
            </p>
          )}
        </motion.form>
      ) : (
        /* ======================================
           SUCCESS / ALREADY RESPONDED
        ======================================= */

        <motion.div
          key="success"
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="
            flex
            h-[405px]
            -translate-y-[32px]
            flex-col
            items-center
            justify-center
            text-center
          "
        >
          {/* Heart */}

          <motion.div
            initial={{
              scale: 0,
            }}
            animate={{
              scale: 1,
            }}
            transition={{
              delay: 0.15,
              type: "spring",
              stiffness: 170,
              damping: 14,
            }}
            className="
              flex
              h-[52px]
              w-[52px]
              items-center
              justify-center
              rounded-full
              border
              border-[#B88B49]
              text-[22px]
              text-[#B88B49]
            "
          >
            ♡
          </motion.div>

          <p
            className={`
              ${cormorantGaramond.className}
              mt-5
              text-[8px]
              uppercase
              tracking-[0.3em]
              text-[#9B795B]
            `}
          >
            RSVP Received
          </p>

          <h3
            className={`
              ${cormorantGaramond.className}
              mt-3
              text-[23px]
              font-medium
              leading-tight
              text-[#062D59]
            `}
          >
            Thank you,
            <br />
            {guestName}
          </h3>

          {/* Divider */}

          <div
            className="
              my-4
              flex
              w-[85px]
              items-center
              gap-2
            "
          >
            <span className="h-px flex-1 bg-[#C8A365]/50" />

            <span className="text-[6px] text-[#B78C47]">
              ◆
            </span>

            <span className="h-px flex-1 bg-[#C8A365]/50" />
          </div>

          {/* Response message */}

          <p
            className={`
              ${cormorantGaramond.className}
              max-w-[175px]
              text-[12px]
              italic
              leading-[1.5]
              text-[#69574E]
            `}
          >
            {attendance === "accepted"
              ? "We can't wait to celebrate our special day with you."
              : "Thank you for letting us know. You'll be in our hearts on our special day."}
          </p>

          {/* Attendance badge */}

          <div
            className="
              mt-4
              border
              border-[#D5BA81]
              bg-[#FBF4E7]
              px-4
              py-[7px]
            "
          >
            <span
              className={`
                ${cormorantGaramond.className}
                text-[9px]
                uppercase
                tracking-[0.14em]
                text-[#816942]
              `}
            >
              {attendance === "accepted"
                ? "✓ Joyfully Accepted"
                : "✓ Response Confirmed"}
            </span>
          </div>

          {/* Returning guest notice */}

          {hasResponded && (
            <p
              className={`
                ${cormorantGaramond.className}
                mt-3
                max-w-[170px]
                text-[8px]
                italic
                leading-[1.4]
                text-[#9A806A]
              `}
            >
              Your response has already been
              confirmed.
            </p>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}