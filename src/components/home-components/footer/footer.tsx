"use client";

import { GitHub, LinkedIn } from "@mui/icons-material";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className=" bg-black flex w-full shrink-0 px-10 py-3 flex-col md:flex-row items-center justify-between border-t">
      <Link
        href="/"
        className="text-white order-1 md:order-none w-1/3"
        prefetch={false}
      >
        +Nest
      </Link>
      <div className="flex justify-center items-center mx-auto">
        <p className="text-gray-200 text-sm font-normal">
          برای استفاده از مطالب، داشتن «هدف غیرتجاری» و ذکر «منبع» کافیست.
        </p>
      </div>

      <div className="order-2 md:order-none flex w-full max-w-xs items-center justify-end gap-4">
        <Link
          href="https://www.linkedin.com/in/arashmoghadamsalimi/"
          className="inline-flex  justify-center items-center rounded-full border shadow-sm hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">LinkedIn</span>
          <LinkedIn fontSize="medium" className=" bg-white rounded-full" />
        </Link>
        <Link
          href="https://github.com/arashms1994"
          className="inline-flex  justify-center items-center rounded-full border shadow-sm  hover:scale-125 hover:rotate-12 transition-transform p-2"
          prefetch={false}
        >
          <span className="sr-only">GitHub</span>
          <GitHub fontSize="medium" className="bg-white rounded-full" />
        </Link>
      </div>
    </footer>
  );
}
