"use client";

import { useState } from "react";

export default function RSVPButtons({
  token,
}: {
  token: string;
}) {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  async function submit(attending: boolean) {
    setLoading(true);

    const res = await fetch("/api/rsvp", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token,
        attending,
      }),
    });

    const data = await res.json();

    if (data.success) {
      setMessage(
        attending
          ? "✅ Thank you! Your attendance has been confirmed."
          : "❌ Your RSVP has been recorded."
      );
    } else {
      setMessage("Something went wrong.");
    }

    setLoading(false);
  }

  return (
    <div className="mt-10">

      <div className="flex gap-4">

        <button
          disabled={loading}
          onClick={() => submit(true)}
          className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700"
        >
          Accept
        </button>

        <button
          disabled={loading}
          onClick={() => submit(false)}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700"
        >
          Decline
        </button>

      </div>

      {message && (
        <p className="mt-5 text-lg">
          {message}
        </p>
      )}

    </div>
  );
}