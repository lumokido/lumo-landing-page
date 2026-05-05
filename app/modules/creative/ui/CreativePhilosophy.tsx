"use client";

import Image from "next/image";
import Lottie from "lottie-react";
import { useEffect, useState } from "react";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import type { CreativeCard } from "./creativeData";
import { philosophyCards } from "./creativeData";

const CardMedia = ({ media, title }: { media: string; title: string }) => {
  const isLottieJson = media.toLowerCase().endsWith(".json");
  const [animationData, setAnimationData] = useState<object | null>(null);

  useEffect(() => {
    if (!isLottieJson) {
      setAnimationData(null);
      return;
    }

    let isMounted = true;
    fetch(media)
      .then((response) => response.json())
      .then((json) => {
        if (isMounted) setAnimationData(json);
      })
      .catch(() => {
        if (isMounted) setAnimationData(null);
      });

    return () => {
      isMounted = false;
    };
  }, [isLottieJson, media]);

  if (isLottieJson) {
    if (!animationData) {
      return <div className="h-32 w-full bg-[#f4f4f8]" />;
    }

    return <Lottie animationData={animationData} loop={true} className="h-32 w-full object-cover" />;
  }

  return (
    <Image src={media} alt={`${title} preview`} width={340} height={220} className="h-32 w-full object-cover" />
  );
};

const PhilosophyDialogPanel = ({ card }: { card: CreativeCard }) => {
  const { dialog } = card;

  return (
    <DialogContent
      showCloseButton
      className="max-h-[min(90vh,640px)] overflow-y-auto border-2 border-[#17171e] bg-white p-0 text-[#17171e] shadow-[6px_6px_0px_#17171e] sm:max-w-lg"
    >
      {dialog.imageSrc ? (
        <div className="relative aspect-video w-full shrink-0 overflow-hidden rounded-t-[calc(var(--radius-xl)-2px)] border-b-2 border-[#17171e] bg-[#f4f4f8]">
          <Image
            src={dialog.imageSrc}
            alt={dialog.imageAlt ?? dialog.title}
            fill
            className="object-cover"
            sizes="(min-width: 640px) 32rem, 100vw"
            priority={false}
          />
        </div>
      ) : null}
      <div className="grid gap-4 p-5 sm:p-6">
        <DialogHeader className="gap-2 text-left">
          <DialogTitle className="font-sans text-lg font-black tracking-tight text-[#17171e]">{dialog.title}</DialogTitle>
          <DialogDescription className="text-sm font-medium leading-relaxed text-[#5a5a68]">{dialog.summary}</DialogDescription>
        </DialogHeader>
        <ul className="list-disc space-y-2 pl-5 text-sm font-medium leading-relaxed text-[#17171e]/90">
          {dialog.points.map((point) => (
            <li key={point}>{point}</li>
          ))}
        </ul>
      </div>
    </DialogContent>
  );
};

const CreativePhilosophy = () => {
  return (
    <section className="mt-14">
      <h2 className="text-center text-3xl font-black tracking-tight">Learn by thinking</h2>
      <p className="mt-2 text-center text-sm font-medium text-[#5a5a68]">
        We replace passive watching with active building through these core learning pillars.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {philosophyCards.map((card) => (
          <article key={card.title} className={`rounded-2xl border-2 bg-white p-4 shadow-[4px_4px_0px_#17171e] ${card.accent}`}>
            <div className="grid gap-4 sm:grid-cols-[1fr_170px] sm:items-center">
              <div>
                <h3 className="text-xl font-black tracking-tight">{card.title}</h3>
                <p className="mt-2 text-sm font-medium leading-relaxed text-current/80">{card.description}</p>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      type="button"
                      className={`mt-3 cursor-pointer rounded-lg border-2 px-3 py-1.5 text-xs font-black shadow-[3px_3px_0px_#17171e] transition hover:translate-y-px hover:shadow-none ${card.buttonClass}`}
                    >
                      {card.cta}
                    </button>
                  </DialogTrigger>
                  <PhilosophyDialogPanel card={card} />
                </Dialog>
              </div>
              <div className="overflow-hidden rounded-xl border border-[#cfcfe0] bg-white/70">
                <CardMedia media={card.media} title={card.title} />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CreativePhilosophy;
