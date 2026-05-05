'use client';

import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FloatingIcons() {
  const { scrollY } = useScroll();

  const rocketY = useTransform(scrollY, [0, 500], [0, 80]);
  const rocketRotate = useTransform(scrollY, [0, 500], [0, 25]);
  const rocketX = useTransform(scrollY, [0, 500], [0, 20]);

  const bagY = useTransform(scrollY, [0, 500], [0, -100]);
  const bagRotate = useTransform(scrollY, [0, 500], [0, -25]);
  const bagX = useTransform(scrollY, [0, 500], [0, -20]);

  return (
    <>
      <motion.div
        style={{ y: rocketY, rotate: rocketRotate, x: rocketX }}
        className="pointer-events-none fixed left-8 top-40 z-40 hidden rounded-full border-2 border-[#17171e] bg-[#ffe066] p-4 lg:block"
      >
        <Image
          src="/rocket-svgrepo-com.svg"
          alt="Rocket"
          width={34}
          height={34}
        />
      </motion.div>

      <motion.div
        style={{ y: bagY, rotate: bagRotate, x: bagX }}
        className="pointer-events-none fixed right-10 top-36 z-40 hidden h-16 w-16 items-center justify-center rounded-full border-2 border-[#17171e] bg-[#ffe066] lg:flex"
      >
        <Image src="/bag.svg" alt="Bag" width={50} height={56} />
      </motion.div>
    </>
  );
}
