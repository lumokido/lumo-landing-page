"use client";

import { useMemo, useState } from "react";

type UniversalModuleCTAProps = {
  title?: string;
  subtitle?: string;
  placeholder?: string;
  buttonLabel?: string;
  footnote?: string;
  onSubmit?: () => void;
};

const UniversalModuleCTA = ({
  title = "Ready to bring Lumo to your school?",
  subtitle = "Join the education revolution and start your journey today.",
  placeholder = "Your School Email",
  buttonLabel = "Request a Demo",
  footnote = "No credit card required. Setup takes less than 15 minutes.",
  onSubmit,
}: UniversalModuleCTAProps) => {
  const [email, setEmail] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const bookingBaseUrl = process.env.NEXT_PUBLIC_CTO_CALENDLY_URL || "https://calendly.com/vaishnavirudraraju-lumokido/30min";
  const bookingUrl = useMemo(() => {
    const url = new URL(bookingBaseUrl);
    if (email) {
      url.searchParams.set("email", email);
    }
    return url.toString();
  }, [bookingBaseUrl, email]);

  const handleOpenDialog = () => {
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
  };

  const handleContinueBooking = () => {
    if (typeof window !== "undefined") {
      window.open(bookingUrl, "_blank", "noopener,noreferrer");
    }
    onSubmit?.();
    setIsDialogOpen(false);
  };

  return (
    <section className="px-4 pb-14 sm:px-6 lg:px-8 lg:pb-20">
      <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.2rem] border-2 border-[#17171e] bg-linear-to-b from-[#6f00c7] via-[#6500b7] to-[#5a00a5] px-6 py-14 shadow-[8px_8px_0px_#e3b700] sm:px-10 sm:py-16">
        <div className="pointer-events-none absolute -left-16 -top-16 h-48 w-48 rounded-full border-26 border-white/15 bg-white/5" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full border-28 border-white/15 bg-white/5" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-black leading-tight tracking-tight text-white sm:text-5xl">{title}</h3>
          <p className="mt-4 text-base font-medium text-white/85 sm:text-xl">{subtitle}</p>

          <div className="mx-auto mt-8 flex max-w-2xl flex-col items-center gap-3 sm:flex-row sm:items-stretch">
            <input
              type="email"
              placeholder={placeholder}
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className="h-14 w-full rounded-2xl border-2 border-[#17171e] bg-white px-5 text-base font-semibold text-[#17171e] outline-none ring-0 placeholder:text-[#7a7a8c] focus:border-[#321064]"
            />
            <button
              type="button"
              onClick={handleOpenDialog}
              className="inline-flex h-14 shrink-0 items-center justify-center rounded-2xl border-2 border-[#17171e] bg-[#19191f] px-8 text-center text-sm font-black uppercase tracking-wide text-white transition hover:bg-[#0f0f14] sm:min-w-56"
            >
              {buttonLabel}
            </button>
          </div>

          <p className="mt-6 text-sm font-semibold text-white/75">
            {footnote} Need help? Reach us at vaishnavi@lumokido.in.
          </p>
        </div>
      </div>

      {isDialogOpen && (
        <div className="fixed inset-0 z-100 flex items-center justify-center bg-black/50 px-4">
          <div className="w-full max-w-md rounded-2xl border-2 border-[#17171e] bg-white p-6 shadow-[8px_8px_0px_#17171e]">
            <h4 className="text-xl font-black tracking-tight text-[#17171e]">Continue to booking</h4>
            <p className="mt-3 text-sm font-medium text-[#4a4a57]">
              You will be redirected to Calendly to schedule your meeting.
            </p>
            {email && (
              <p className="mt-2 text-sm font-semibold text-[#17171e]">
                Booking email: {email}
              </p>
            )}
            <div className="mt-5 flex justify-end gap-3">
              <button
                type="button"
                onClick={handleCloseDialog}
                className="rounded-xl border-2 border-[#17171e] px-4 py-2 text-sm font-bold text-[#17171e] transition hover:bg-[#f4f4f7]"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleContinueBooking}
                className="rounded-xl border-2 border-[#17171e] bg-[#17171e] px-4 py-2 text-sm font-bold text-white transition hover:bg-[#0f0f14]"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default UniversalModuleCTA;
