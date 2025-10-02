import React from 'react';

interface ColorSliderProps {
  label: string;
  value: number;
  max: number;
  color: string;
  textColor?: string;
  icon?: string;
  onChange: (value: number) => void;
}

export const ColorSlider: React.FC<ColorSliderProps> = ({
  label,
  value,
  max,
  color,
  textColor = 'white',
  icon,
  onChange
}) => {
  // Map logical values (0-max) to physical positions (8-(max+8))
  // This ensures minimum 8% fill is always visible
  const OFFSET = 8;
  const percentage = ((value + OFFSET) / (max + OFFSET)) * 100;
  
  // Calculate luminance to determine if background is light or dark
  const getContrastColor = (bgColor: string): string => {
    // Parse rgba or rgb color
    const rgbaMatch = bgColor.match(/rgba?\((\d+),\s*(\d+),\s*(\d+)/);
    if (rgbaMatch) {
      const r = parseInt(rgbaMatch[1]);
      const g = parseInt(rgbaMatch[2]);
      const b = parseInt(rgbaMatch[3]);
      
      // Calculate relative luminance
      const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
      
      // Return dark text for light backgrounds, light text for dark backgrounds
      return luminance > 0.5 ? '#61666B' : 'white';
    }
    return textColor;
  };

  const dynamicTextColor = getContrastColor(color);
  const handleColor = dynamicTextColor === 'white' ? 'white' : '#AFB2B6';
  
  // Background color: white for all except Brightness
  const sliderBgColor = label === 'Brightness' ? '#D8D9DA' : 'white';
  
  // For Brightness and Warm White, use fixed color. For others, use split-color effect.
  const useFixedColor = label === 'Brightness' || label === 'Warm White';

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(Number(e.target.value));
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = Math.min(Math.max(0, Number(e.target.value)), max);
    onChange(newValue);
  };

  return (
    <div className="self-stretch w-full font-normal whitespace-nowrap px-5">
      <div className="flex w-full items-center gap-3">
        <div 
          className="border self-stretch flex min-w-60 flex-col overflow-hidden text-[13px] flex-1 shrink basis-[0%] my-auto rounded-md border-solid border-[#EFF0F0] relative h-8"
          style={{ backgroundColor: sliderBgColor }}
        >
          {/* Transparent native range input on top for interaction */}
          <input
            type="range"
            min="0"
            max={max}
            value={value}
            onChange={handleSliderChange}
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20"
            aria-label={`${label} slider`}
          />

          {/* Visual track layers */}
          <div className="absolute inset-0">
            {/* Filled portion of the track */}
            <div
              className="absolute inset-y-0 left-0 rounded-[0px_6px_6px_0px]"
              style={{ backgroundColor: color, width: `${percentage}%` }}
            />

            {/* Handle aligned to the end of the fill */}
            <div
              className="absolute top-1/2 -translate-y-1/2 h-5 w-[4px] rounded-[40px]"
              style={{
                backgroundColor: handleColor,
                left: `max(0px, calc(${percentage}% - 8px))`
              }}
            />

            {/* Label overlay with split-color effect */}
            {useFixedColor ? (
              // Fixed color for Brightness and Warm White
              <div className="absolute inset-y-0 left-0 flex items-center pl-4 pr-3 pointer-events-none">
                <div className="flex items-stretch gap-1.5 min-w-0">
                  {icon && (
                    <img
                      src={icon}
                      className="aspect-[1] object-contain w-4 shrink-0"
                      alt=""
                    />
                  )}
                  <span style={{ color: dynamicTextColor }} className="truncate">
                    {label}
                  </span>
                </div>
              </div>
            ) : (
              // Split-color effect: label color changes based on fill position
              <>
                {/* Label on white background - visible where fill hasn't reached */}
                <div 
                  className="absolute inset-y-0 left-0 flex items-center pl-4 pr-3 pointer-events-none overflow-hidden"
                  style={{ width: `${100 - percentage}%`, marginLeft: `${percentage}%` }}
                >
                  <div className="flex items-stretch gap-1.5 min-w-0" style={{ marginLeft: `-${percentage}%` }}>
                    {icon && (
                      <img
                        src={icon}
                        className="aspect-[1] object-contain w-4 shrink-0"
                        alt=""
                      />
                    )}
                    <span style={{ color: '#61666B' }} className="truncate whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                </div>
                
                {/* Label on filled area - visible where fill has reached */}
                <div 
                  className="absolute inset-y-0 left-0 flex items-center pl-4 pr-3 pointer-events-none overflow-hidden"
                  style={{ width: `${percentage}%` }}
                >
                  <div className="flex items-stretch gap-1.5 min-w-0">
                    {icon && (
                      <img
                        src={icon}
                        className="aspect-[1] object-contain w-4 shrink-0"
                        alt=""
                      />
                    )}
                    <span style={{ color: dynamicTextColor }} className="truncate whitespace-nowrap">
                      {label}
                    </span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
        <div className="justify-center items-center rounded border self-stretch flex min-h-8 gap-2.5 text-sm text-[#61666B] leading-6 min-w-[50px] w-[50px] bg-white my-auto px-1 py-1 border-solid border-[#EFF0F0]">
          <input
            type="number"
            min="0"
            max={max}
            value={value}
            onChange={handleInputChange}
            className="text-[#61666B] text-xs self-stretch my-auto bg-transparent border-none outline-none w-full text-center [-moz-appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
            aria-label={`${label} value`}
          />
        </div>
      </div>
    </div>
  );
};
