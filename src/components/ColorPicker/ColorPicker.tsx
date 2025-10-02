import React, { useState } from 'react';
import { StatusBar } from './StatusBar';
import { Header } from './Header';
import { ColorTabs } from './ColorTabs';
import { ColorSlider } from './ColorSlider';

export const ColorPicker: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'colors' | 'sliders'>('colors');
  const [brightness, setBrightness] = useState(0);
  const [red, setRed] = useState(196);
  const [green, setGreen] = useState(144);
  const [blue, setBlue] = useState(0);
  const [warmWhite, setWarmWhite] = useState(0);

  const hexColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`.toUpperCase();

  return (
    <div className="max-w-[480px] w-full overflow-hidden bg-[#237BC0] mx-auto">
      <div className="flex w-full flex-col items-center">
        <StatusBar />
        <Header />
      </div>
      
      <main className="items-center flex w-full flex-col overflow-hidden flex-1 bg-[#F7F7F8]">
        <div className="flex min-h-5 w-3" />
        
        <ColorTabs activeTab={activeTab} onTabChange={setActiveTab} />
        
        <div className="flex min-h-6 w-3" />
        
        <section className="self-stretch w-full font-normal whitespace-nowrap px-5">
          <div className="flex w-full items-center gap-3">
            <div className="flex-1 shrink basis-[0%]" />
            <div 
              className="rounded border self-stretch flex min-h-8 min-w-8 w-8 my-auto border-solid border-[#EFF0F0]"
              style={{ backgroundColor: `rgb(${red}, ${green}, ${blue})` }}
              aria-label="Current color preview"
            />
            <div className="justify-center items-center rounded border self-stretch flex min-h-8 gap-2.5 text-sm text-[#61666B] leading-6 min-w-[79px] w-[79px] bg-white my-auto px-2 py-1 border-solid border-[#EFF0F0]">
              <input
                type="text"
                value={hexColor}
                readOnly
                className="text-[#61666B] text-xs self-stretch my-auto bg-transparent border-none outline-none text-center w-full"
                aria-label="Hex color code"
              />
            </div>
          </div>
        </section>
        
        <div className="flex min-h-3 w-3" />
        
        <ColorSlider
          label="Brightness"
          value={brightness}
          max={100}
          color="rgba(255,255,255,1)"
          icon="https://api.builder.io/api/v1/image/assets/8ad22055348e4e28971a6c4c9dd9c726/db935b21a056c41084c6137031515fab1431f43a?placeholderIfAbsent=true"
          onChange={setBrightness}
        />
        
        <div className="flex min-h-3 w-3" />
        
        <ColorSlider
          label="Red"
          value={red}
          max={255}
          color="rgba(255,0,0,1)"
          onChange={setRed}
        />
        
        <div className="flex min-h-3 w-3" />
        
        <ColorSlider
          label="Green"
          value={green}
          max={255}
          color="rgba(0,193,81,1)"
          onChange={setGreen}
        />
        
        <div className="flex min-h-3 w-3" />
        
        <ColorSlider
          label="Blue"
          value={blue}
          max={255}
          color="rgba(0,123,255,1)"
          onChange={setBlue}
        />
        
        <div className="flex min-h-3 w-3" />
        
        <ColorSlider
          label="Warm White"
          value={warmWhite}
          max={255}
          color="rgba(249,238,153,1)"
          onChange={setWarmWhite}
        />
        
        <div className="flex min-h-[435px] w-3 flex-1" />
      </main>
    </div>
  );
};
