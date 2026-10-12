import React, { useState } from 'react';
import { TucoMascot } from '../TucoMascot';
import { X, ArrowRight } from 'lucide-react';

interface Screen3NamePillProps {
  name: string;
  onChangeName: (name: string) => void;
  onNext?: () => void;
  onClose?: () => void;
  isWireframe?: boolean;
}

export const Screen3NamePill: React.FC<Screen3NamePillProps> = ({
  name,
  onChangeName,
  onNext,
  onClose,
  isWireframe = false,
}) => {
  const [localName, setLocalName] = useState(name || 'Maya');

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (localName.trim()) {
      onChangeName(localName.trim());
      onNext?.();
    }
  };

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between p-6 select-none font-['Poppins'] transition-colors duration-300 ${
        isWireframe
          ? 'bg-zinc-100 text-zinc-900 border border-zinc-300'
          : 'bg-[#FED543] text-[#352002]'
      }`}
    >
      {/* Top Bar with Step 1 of 3 matching Screenshot 3 */}
      <div className="w-full flex items-center justify-between pt-1">
        <div className="flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-[#271700]" />
          <span className="w-2 h-2 rounded-full bg-[#271700] opacity-30" />
          <span className="w-2 h-2 rounded-full bg-[#271700] opacity-30" />
          <span className="font-['Poppins'] text-[11px] font-semibold opacity-75 ml-1">
            Step 1 of 3
          </span>
        </div>

        <button
          type="button"
          onClick={onClose}
          className="p-1 rounded-full hover:bg-black/10 transition-colors text-[#271700]"
          title="Close"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>

      {/* Center Mascot + Heading + Input */}
      <div className="my-auto flex flex-col items-center w-full max-w-[310px] mx-auto text-center space-y-4">
        <TucoMascot
          size="lg"
          isWireframe={isWireframe}
          isWaving={true}
          className="w-24 h-24"
        />

        <div className="space-y-1">
          <h2 className="font-['Poppins'] text-lg font-bold tracking-tight text-[#271700]">
            what is your child’s name?
          </h2>
          <p className="font-['Poppins'] text-[11px] opacity-75 leading-tight">
            We’ll personalize formulas and routines just for them!
          </p>
        </div>

        {/* Pill Input with blue border matching the screenshot */}
        <form onSubmit={handleSubmit} className="w-full pt-1">
          <input
            type="text"
            value={localName}
            onChange={(e) => {
              setLocalName(e.target.value);
              onChangeName(e.target.value);
            }}
            placeholder="Maya"
            className={`w-full py-3.5 px-6 rounded-full font-['Poppins'] font-medium text-center text-sm outline-none transition-all shadow-xs ${
              isWireframe
                ? 'bg-white text-zinc-900 border-2 border-zinc-400'
                : 'bg-white text-[#271700] border-2 border-[#0D99FF] ring-2 ring-[#0D99FF]/20 shadow-md'
            }`}
          />
        </form>
      </div>

      {/* Bottom Button matching Screenshot 3 */}
      <div className="w-full pb-4">
        <button
          type="button"
          onClick={() => handleSubmit()}
          disabled={!localName.trim()}
          className={`w-full py-4 px-6 rounded-full font-['Poppins'] font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all active:scale-95 disabled:opacity-40 disabled:cursor-not-allowed ${
            isWireframe
              ? 'bg-zinc-900 text-white'
              : 'bg-[#271700] hover:bg-[#1a0f00] text-[#FED543] shadow-amber-950/20'
          }`}
        >
          <span>Continue</span>
          <ArrowRight className="w-3.5 h-3.5 stroke-[2.5]" />
        </button>
      </div>
    </div>
  );
};
