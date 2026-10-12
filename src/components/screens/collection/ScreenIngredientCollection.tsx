import React, { useState } from 'react';
import { IngredientCard } from '../../../types';
import { ArrowLeft, Lock, Sparkles, Check, X, Info } from 'lucide-react';

interface ScreenIngredientCollectionProps {
  childName: string;
  cards: IngredientCard[];
  onBackToHome: () => void;
  isWireframe?: boolean;
}

export const ScreenIngredientCollection: React.FC<ScreenIngredientCollectionProps> = ({
  childName,
  cards,
  onBackToHome,
  isWireframe = false,
}) => {
  const [selectedCard, setSelectedCard] = useState<IngredientCard | null>(null);

  const unlockedCount = cards.filter((c) => c.isUnlocked).length;

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-8 space-y-4">
        {/* Top Header */}
        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={onBackToHome}
            className="flex items-center gap-1.5 text-xs font-fredoka font-semibold text-stone-600 hover:text-stone-900 bg-white px-3 py-1.5 rounded-full border border-stone-200 shadow-2xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </button>

          <div className="flex items-center gap-1.5 bg-amber-100 text-amber-900 px-3 py-1 rounded-full text-xs font-fredoka font-bold">
            <Sparkles className="w-3.5 h-3.5 text-amber-600" />
            <span>{unlockedCount} / {cards.length} Unlocked</span>
          </div>
        </div>

        {/* Title */}
        <div className="space-y-1">
          <h1 className="font-fredoka text-xl font-bold tracking-tight text-[#3E2500]">
            {childName}'s Ingredient Cards
          </h1>
          <p className="text-xs text-stone-500 font-body">
            Kids collectible world • Unlocked by streaks & routine quizzes!
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 gap-3 pt-1">
          {cards.map((card) => (
            <div
              key={card.id}
              onClick={() => setSelectedCard(card)}
              className={`rounded-3xl p-3.5 flex flex-col items-center text-center justify-between cursor-pointer transition-all hover:scale-[1.02] shadow-2xs relative overflow-hidden min-h-[170px] ${
                card.isUnlocked
                  ? 'bg-white border border-stone-200/90'
                  : 'bg-stone-100 border border-dashed border-stone-300 opacity-75'
              }`}
            >
              {card.isUnlocked ? (
                <>
                  {/* Card Icon Art */}
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl my-1 shadow-xs"
                    style={{ backgroundColor: `${card.accentColor}25` }}
                  >
                    {card.emoji}
                  </div>

                  <div className="space-y-0.5 mt-1">
                    <span className="text-[9px] font-mono uppercase text-amber-800 font-bold block">
                      {card.name}
                    </span>
                    <h3 className="font-fredoka text-xs font-bold text-stone-900 line-clamp-1">
                      "{card.funName}"
                    </h3>
                    <p className="text-[10px] text-stone-500 font-body line-clamp-2 mt-1">
                      {card.fact}
                    </p>
                  </div>

                  <span className="text-[9px] font-fredoka font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full mt-2">
                    Unlocked ✓
                  </span>
                </>
              ) : (
                <>
                  {/* Locked Silhouette */}
                  <div className="w-16 h-16 rounded-2xl bg-stone-200/80 flex items-center justify-center text-2xl my-1 text-stone-400">
                    <Lock className="w-6 h-6 stroke-[2]" />
                  </div>

                  <div className="space-y-0.5 mt-1">
                    <span className="text-[9px] font-mono text-stone-400 font-bold block">
                      LOCKED CARD
                    </span>
                    <h3 className="font-fredoka text-xs font-bold text-stone-500">
                      ???
                    </h3>
                    <p className="text-[10px] text-stone-400 font-body mt-1">
                      {card.unlockCriteria}
                    </p>
                  </div>

                  <span className="text-[9px] font-mono text-stone-400 bg-stone-200 px-2 py-0.5 rounded-full mt-2">
                    Tap to see task
                  </span>
                </>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Card Detail Modal */}
      {selectedCard && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs">
          <div className="w-full max-w-xs rounded-3xl p-5 bg-white text-stone-900 shadow-2xl space-y-4 animate-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between pb-2 border-b border-stone-100">
              <span className="text-xs font-fredoka font-bold text-amber-800 uppercase">
                {selectedCard.isUnlocked ? 'Collectible Card' : 'Locked Card'}
              </span>
              <button
                type="button"
                onClick={() => setSelectedCard(null)}
                className="p-1 rounded-full hover:bg-stone-100 text-stone-500"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div
                className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl shadow-md"
                style={{ backgroundColor: `${selectedCard.accentColor}25` }}
              >
                {selectedCard.isUnlocked ? selectedCard.emoji : '🔒'}
              </div>

              <h3 className="font-fredoka text-lg font-bold text-stone-900">
                {selectedCard.isUnlocked ? selectedCard.funName : 'Mysterious Ingredient'}
              </h3>
              <span className="text-xs font-mono font-semibold text-amber-700">
                {selectedCard.name}
              </span>
            </div>

            <div className="space-y-2 text-xs font-body bg-stone-50 p-3 rounded-2xl">
              <div>
                <span className="font-bold text-stone-800 block text-[11px]">Ancient Fact:</span>
                <p className="text-stone-600">{selectedCard.fact}</p>
              </div>

              <div>
                <span className="font-bold text-stone-800 block text-[11px]">Where in Ishaan's Routine:</span>
                <p className="text-stone-600">{selectedCard.routineUsage}</p>
              </div>

              <div>
                <span className="font-bold text-amber-800 block text-[11px]">How to Unlock:</span>
                <p className="text-amber-900 font-semibold">{selectedCard.unlockCriteria}</p>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setSelectedCard(null)}
              className="w-full py-2.5 rounded-full bg-[#3E2500] text-[#FED543] font-fredoka font-bold text-xs"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
