import React from 'react';

export const StatusBar: React.FC = () => {
  return (
    <header className="flex w-full items-stretch gap-[40px_100px] pl-6 pr-2.5 py-3">
      <div className="flex items-stretch gap-[5px] text-[15px] text-white font-semibold whitespace-nowrap text-center tracking-[-0.24px] leading-none flex-1">
        <time className="text-white grow">
          12:22
        </time>
        <img
          src="https://api.builder.io/api/v1/image/assets/8ad22055348e4e28971a6c4c9dd9c726/6b12547c789c4cf208de69e30b2d92187d4ffba1?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-3.5 shrink-0 my-auto"
          alt="Signal indicator"
        />
      </div>
      <div className="flex items-stretch gap-0.5 flex-1 my-auto">
        <img
          src="https://api.builder.io/api/v1/image/assets/8ad22055348e4e28971a6c4c9dd9c726/0458928aac01d34bc7ec8a7ff23398fb69f852b2?placeholderIfAbsent=true"
          className="aspect-[1.5] object-contain w-[21px] shrink-0"
          alt="Network signal"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/8ad22055348e4e28971a6c4c9dd9c726/add6557b29342665edd7d565864b375460e5f086?placeholderIfAbsent=true"
          className="aspect-[1.07] object-contain w-[15px] shrink-0"
          alt="WiFi signal"
        />
        <img
          src="https://api.builder.io/api/v1/image/assets/8ad22055348e4e28971a6c4c9dd9c726/7e70d413e0c96088b35663d6787915a1eca37aac?placeholderIfAbsent=true"
          className="aspect-[2.28] object-contain w-8 shrink-0"
          alt="Battery indicator"
        />
      </div>
    </header>
  );
};
