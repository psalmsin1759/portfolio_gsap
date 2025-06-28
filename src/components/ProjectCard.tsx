import { Product } from "@/utils/project";
import React from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductProps {
  product: Product;
}

export default function ProjectCard({ product }: ProductProps) {
  return (
    <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-primary transition-all duration-300 flex flex-col">
      {/* Image */}
      <div className="relative w-full aspect-[4/3] overflow-hidden">
        <Image
          src={product.image}
          alt={product.title}
          fill
          className="object-cover hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, 400px"
        />
      </div>

      {/* Content */}
      <div className="p-6 flex flex-col gap-3">
        {/* Title */}
        <h2 className="text-white text-xl md:text-2xl font-bold hover:text-primary transition-colors duration-300">
          <Link href={product.url} target="_blank" rel="noopener noreferrer">
            {product.title}
          </Link>
        </h2>

        {/* Category Tag */}
        <span className="text-primary text-sm font-medium bg-primary/10 rounded-full px-3 py-1 w-fit">
          {product.category}
        </span>

        {/* Description */}
        <p className="text-gray-300 text-base leading-relaxed">
          {product.description}
        </p>

        {/* Stack */}
        <p className="text-gray-400 text-sm">
          <span className="text-gray-500">Tech Stack:</span> {product.stack}
        </p>
      </div>
    </div>
  );
}
