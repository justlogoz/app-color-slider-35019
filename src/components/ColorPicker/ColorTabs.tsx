import React from 'react';

interface ColorTabsProps {
  activeTab: 'colors' | 'sliders';
  onTabChange: (tab: 'colors' | 'sliders') => void;
}

export const ColorTabs: React.FC<ColorTabsProps> = ({ activeTab, onTabChange }) => {
  return (
    <div className="self-stretch flex w-full gap-3 px-5">
      <div className="rounded bg-[rgba(227,228,232,1)] flex gap-1 text-sm font-normal whitespace-nowrap leading-6 flex-1 shrink basis-[0%] p-1">
        <button
          className={`justify-center items-center flex min-h-[33px] flex-1 shrink basis-[0%] px-1.5 py-[5px] rounded-lg transition-all ${
            activeTab === 'colors'
              ? 'shadow-[2px_4px_8px_0_rgba(0,0,0,0.05)] text-white bg-[#237BC0]'
              : 'text-[#61666B]'
          }`}
          onClick={() => onTabChange('colors')}
          aria-pressed={activeTab === 'colors'}
        >
          <div className="self-stretch flex my-auto">
            <div className="flex items-center">
              <div className="self-stretch flex w-2 shrink-0 h-2 my-auto" />
              <span className="self-stretch my-auto">
                Colors
              </span>
              <div className="self-stretch flex w-2 shrink-0 h-2 my-auto" />
            </div>
          </div>
        </button>
        <button
          className={`rounded flex min-h-[33px] items-center justify-center flex-1 shrink basis-[0%] px-1.5 py-[5px] transition-all ${
            activeTab === 'sliders'
              ? 'shadow-[2px_4px_8px_0_rgba(0,0,0,0.05)] text-white bg-[#237BC0]'
              : 'text-[#61666B]'
          }`}
          onClick={() => onTabChange('sliders')}
          aria-pressed={activeTab === 'sliders'}
        >
          <div className="self-stretch flex my-auto">
            <div className="flex items-center">
              <div className="self-stretch flex w-2 shrink-0 h-2 my-auto" />
              <span className="self-stretch my-auto">
                Sliders
              </span>
              <div className="self-stretch flex w-2 shrink-0 h-2 my-auto" />
            </div>
          </div>
        </button>
      </div>
      <button className="justify-center items-center rounded border flex min-h-[41px] gap-2.5 w-[41px] h-[41px] bg-white px-[5px] border-solid border-[#EFF0F0]">
        <img
          src="https://api.builder.io/api/v1/image/assets/8ad22055348e4e28971a6c4c9dd9c726/1c47c9a95c76a78260849480e969e82e75f01a67?placeholderIfAbsent=true"
          className="aspect-[1] object-contain w-6 self-stretch my-auto"
          alt="Color picker tool"
        />
      </button>
      <div 
        className="rounded border bg-[#9000FF] flex w-[41px] shrink-0 h-[41px] border-solid border-[#EFF0F0]"
        role="img"
        aria-label="Selected color preview"
      />
    </div>
  );
};
