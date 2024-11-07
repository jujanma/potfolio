"use client";

import Image from "next/image";
import Link from "next/link";

interface PortfolioBoxProps {
  data: {
    id: number;
    title: string;
    image: string;
    urlDemo: string;
  };
}

const PortfolioBox = ({ data }: PortfolioBoxProps) => {
  const { title, image, urlDemo } = data;
  return (
    <div className="p-4 border border-teal-50 rounded-xl">
      <h3 className="mb-4 text-xl">{title}</h3>
      <Image
        src={image}
        alt="Image product"
        width={200}
        height={200}
        className="w-full md:w-[200px] md:h-[150px] rounded-2xl h-auto"
      />

      <div className="flex gap-5 mt-5 items-center justify-center">
        <Link
          href={urlDemo}
          target="_blank"
          className="p-2 transition duration-150 rounded-lg bg-secondary hover:bg-secondary/50 hover:shadow-xl hover:shadow-secondary/50 w-full text-center font-semibold text-[#2e2257]"
        >
          Demo
        </Link>
      </div>
    </div>
  );
};

export default PortfolioBox;
