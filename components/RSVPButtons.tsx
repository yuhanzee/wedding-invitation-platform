"use client";

import { useState } from "react";

export default function RSVPButtons({
  token,
  alreadyResponded,
  currentStatus,
}: {
  token: string;
  alreadyResponded: boolean;
  currentStatus: boolean | null;
}) {
  const [responded, setResponded] = useState(alreadyResponded);
  const [status, setStatus] = useState<boolean | null>(currentStatus);
  const [message, setMessage] = useState("");

  const handleRSVP = async (attending: boolean) => {
    const response = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ token, attending }),
    });

    const data = await response.json();

    if (data.success) {
      setResponded(true);
      setStatus(attending);
      setMessage("Thank you! Your response has been saved.");
    } else {
      setResponded(true);
      setStatus(data.attending ?? null);
      setMessage(data.message);
    }
  };

  if (responded) {
    return (
      <div className="mt-8 rounded-xl bg-white/10 p-5">
        <p className="text-lg font-semibold">
          You have already responded
        </p>

        <p className="mt-2">
          Status:{" "}
          <span className="font-bold">
            {status ? "Accepted" : "Declined"}
          </span>
        </p>

        {message && (
          <p className="mt-2 text-sm text-gray-300">
            {message}
          </p>
        )}
      </div>
    );
  }

  return (
    <div className="mt-8 flex gap-4 justify-center">
      <button
        onClick={() => handleRSVP(true)}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-xl"
      >
        Accept Invitation
      </button>

      <button
        onClick={() => handleRSVP(false)}
        className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-xl"
      >
        Decline Invitation
      </button>
    </div>
  );
}