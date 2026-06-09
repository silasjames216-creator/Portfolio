'use client';

import { useState } from 'react';

interface ImageModalProps {
  isOpen: boolean;
  imageSrc: string;
  imageAlt: string;
  onClose: () => void;
}

export default function ImageModal({ isOpen, imageSrc, imageAlt, onClose }: ImageModalProps) {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white text-2xl font-bold hover:text-gray-300"
        >
          ✕
        </button>
        <img
          src={imageSrc}
          alt={imageAlt}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
}
