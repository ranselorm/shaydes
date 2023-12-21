"use client";
import React, { useState } from "react";
import { useParams } from "next/navigation";
import { bridalItems } from "../../../data";

// const imagePaths = [
//   "/c1.jpg",
//   "/c2.jpg",
//   "/c2.jpg",
//   "/c2.jpg",
//   "/c2.jpg",
//   "/c2.jpg",
// ];

const ImageGallery = () => {
  const { id } = useParams();

  const foundItem = bridalItems.find((item) => item.id === id);
  console.log(foundItem);
  const imagePaths = foundItem.images;

  const [lightbox, setLightbox] = useState({ isOpen: false, imgIndex: 0 });

  const openLightbox = (index) => {
    setLightbox({ isOpen: true, imgIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ ...lightbox, isOpen: false });
  };

  const showNext = () => {
    setLightbox({
      ...lightbox,
      imgIndex: (lightbox.imgIndex + 1) % imagePaths.length,
    });
  };

  const showPrev = () => {
    setLightbox({
      ...lightbox,
      imgIndex: (lightbox.imgIndex - 1 + imagePaths.length) % imagePaths.length,
    });
  };

  return (
    <div>
      <h3 className="ml-[100px] font-bold text-[22px] mb-[20px]">
        {foundItem.name}
      </h3>
      <div className="flex flex-wrap justify-center gap-4 px-0 lg:px-[50px]">
        {imagePaths.map((src, index) => (
          <div
            key={src}
            onClick={() => openLightbox(index)}
            className="h-[250px] w-full md:w-[250px] overflow-hidden rounded-lg"
          >
            <img
              src={src}
              alt={`Image ${index}`}
              className="cursor-pointer object-cover w-full h-full"
            />
          </div>
        ))}
      </div>

      {lightbox.isOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex items-center justify-center z-50 p-4">
          <div className="relative max-w-[600px] max-h-full">
            <img
              src={imagePaths[lightbox.imgIndex]}
              alt={`Image ${lightbox.imgIndex}`}
              className="max-h-full max-w-full"
            />
            <button
              className="absolute top-4 right-4 text-white text-2xl"
              onClick={closeLightbox}
            >
              &times;
            </button>
            <button
              className="absolute left-4 text-white text-2xl"
              onClick={showPrev}
            >
              &#10094;
            </button>
            <button
              className="absolute right-4 text-white text-2xl"
              onClick={showNext}
            >
              &#10095;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
