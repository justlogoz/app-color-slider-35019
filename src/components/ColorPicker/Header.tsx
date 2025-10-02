import React from 'react';
export const Header: React.FC = () => {
  return <nav className="flex w-[335px] max-w-full flex-col items-center text-base text-white font-semibold whitespace-nowrap text-center">
      <div className="flex w-full max-w-[335px] items-center">
        
        <div className="self-stretch flex w-[110px] shrink h-3 flex-1 basis-[0%] my-auto" />
        <div className="self-stretch flex items-center gap-1.5 my-auto">
          <h1 className="text-white self-stretch my-auto">
            Colors
          </h1>
        </div>
        <div className="self-stretch flex w-[111px] shrink h-3 flex-1 basis-[0%] my-auto" />
        
      </div>
      <div className="flex min-h-2 w-2" />
    </nav>;
};