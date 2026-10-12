import React, { useState } from 'react';
import { ArrowRight, Delete, X, Sparkles } from 'lucide-react';
import { TucoMascot } from '../../TucoMascot';

interface ScreenOnboardingNameProps {
  name: string;
  onChangeName: (name: string) => void;
  onNext: () => void;
  isWireframe?: boolean;
}

export const ScreenOnboardingName: React.FC<ScreenOnboardingNameProps> = ({
  name,
  onChangeName,
  onNext,
  isWireframe = false,
}) => {
  const [localName, setLocalName] = useState(name || 'Omar');
  const [showKeyboard, setShowKeyboard] = useState(false);

  const presets = ['Omar', 'Maya', 'Ishaan', 'Aria', 'Kabir'];

  const handleKeyPress = (char: string) => {
    const updated = localName + char;
    setLocalName(updated);
    onChangeName(updated);
  };

  const handleDelete = () => {
    const updated = localName.slice(0, -1);
    setLocalName(updated);
    onChangeName(updated);
  };

  const keyboardRows = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between font-['Poppins'] select-none overflow-hidden p-6 ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Top Header Prompt matching Reference 570 & 576 */}
      <div className="pt-4 space-y-3">
        <div className="flex items-center justify-between">
          <span className="text-[10px] font-bold font-['Poppins'] bg-amber-100 text-amber-900 px-2.5 py-1 rounded-full uppercase tracking-wider">
            Step 1 of 4 • Profile
          </span>
          <button
            type="button"
            onClick={() => setShowKeyboard(!showKeyboard)}
            className="text-[10px] font-['Poppins'] text-stone-400 hover:text-stone-700 underline"
          >
            {showKeyboard ? 'Hide Keypad' : 'Show Keypad'}
          </button>
        </div>

        <div className="space-y-1">
          <h1 className="font-['Poppins'] text-2xl font-black text-[#1C2030] tracking-tight leading-snug">
            What's your child's name?
          </h1>
          <p className="font-['Poppins'] text-xs text-stone-500 leading-relaxed">
            Mum's phone, child's experience. We personalize their daily bottles & streak badge!
          </p>
        </div>
      </div>

      {/* Mascot Hero Scene matching Aptivo (570) & Plopp (576) */}
      <div className="my-auto flex flex-col items-center justify-center space-y-4 py-2">
        <div className="relative">
          <TucoMascot
            size="xl"
            expression="happy"
            isWaving={true}
            isWireframe={isWireframe}
            className="w-32 h-32"
          />
        </div>

        {/* Input Pill with High Contrast & Clear Button */}
        <div className="w-full max-w-[320px] space-y-2">
          <div
            className={`w-full flex items-center justify-between px-4 py-3.5 rounded-2xl border-2 transition-all ${
              isWireframe
                ? 'bg-white border-zinc-300'
                : 'bg-white border-stone-200 shadow-sm focus-within:border-amber-400'
            }`}
          >
            <input
              type="text"
              value={localName}
              onChange={(e) => {
                setLocalName(e.target.value);
                onChangeName(e.target.value);
              }}
              placeholder="Type child's name..."
              className="w-full font-['Poppins'] text-lg font-bold text-stone-900 outline-none bg-transparent placeholder-stone-400"
            />
            {localName && (
              <button
                type="button"
                onClick={() => {
                  setLocalName('');
                  onChangeName('');
                }}
                className="p-1 rounded-full text-stone-400 hover:text-stone-700 hover:bg-stone-100"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>

          {/* Quick Name Presets */}
          <div className="flex items-center justify-center gap-1.5 pt-1">
            <span className="text-[10px] text-stone-400 font-medium">Quick pick:</span>
            {presets.map((preset) => (
              <button
                key={preset}
                type="button"
                onClick={() => {
                  setLocalName(preset);
                  onChangeName(preset);
                }}
                className={`text-[10px] font-['Poppins'] px-2.5 py-1 rounded-full border transition-all ${
                  localName === preset
                    ? 'bg-amber-400 border-amber-500 text-stone-950 font-bold shadow-2xs'
                    : 'bg-white border-stone-200 text-stone-600 hover:border-stone-400'
                }`}
              >
                {preset}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Simulated Keypad if toggled */}
      {showKeyboard && (
        <div className="bg-[#D1D5DB]/90 backdrop-blur-md p-1.5 pb-2 rounded-2xl border border-stone-300 space-y-1 select-none shrink-0 mb-3">
          {keyboardRows.map((row, rIdx) => (
            <div key={rIdx} className="flex justify-center gap-1">
              {row.map((char) => (
                <button
                  key={char}
                  type="button"
                  onClick={() => handleKeyPress(char)}
                  className="w-7 h-8 rounded-md bg-white text-stone-800 text-xs font-semibold shadow-xs flex items-center justify-center uppercase active:bg-stone-200"
                >
                  {char}
                </button>
              ))}
            </div>
          ))}
          <div className="flex justify-center gap-1 pt-0.5">
            <button
              type="button"
              onClick={() => handleKeyPress(' ')}
              className="flex-1 max-w-[140px] h-8 rounded-md bg-white text-stone-700 text-xs font-medium shadow-xs flex items-center justify-center"
            >
              space
            </button>
            <button
              type="button"
              onClick={handleDelete}
              className="w-12 h-8 rounded-md bg-stone-300 text-stone-700 text-xs shadow-xs flex items-center justify-center"
            >
              <Delete className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Bottom CTA Button */}
      <div className="pt-2">
        <button
          type="button"
          onClick={onNext}
          disabled={!localName.trim()}
          className={`w-full py-4 px-6 rounded-2xl font-['Poppins'] text-sm font-bold text-center tracking-wide transition-all active:scale-98 shadow-md flex items-center justify-center gap-2 ${
            isWireframe
              ? 'bg-zinc-900 hover:bg-zinc-800 text-white'
              : 'bg-[#1C2030] hover:bg-[#2A2E40] text-white disabled:opacity-40'
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
