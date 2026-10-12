import React from 'react';
import { Star, ShieldCheck, Heart, MessageCircle, Play, Sparkles } from 'lucide-react';
import { TucoMascot } from '../../TucoMascot';

interface ScreenDoctorCommunityProps {
  onBack?: () => void;
  isWireframe?: boolean;
}

export const ScreenDoctorCommunity: React.FC<ScreenDoctorCommunityProps> = ({
  isWireframe = false,
}) => {
  const reviews = [
    {
      mom: 'Priya Mehta',
      city: 'Bangalore · Mother of 7yo Kabir',
      stars: 5,
      review: 'My son plays cricket for 2 hours daily in the sun. The Super Sun Stick is non-greasy, does not sting his eyes, and leaves zero white cast! Best purchase ever.',
      product: 'Super Sun Stick SPF 50',
    },
    {
      mom: 'Sneha Deshmukh',
      city: 'Mumbai · Mother of 5yo Ananya',
      stars: 5,
      review: 'Morning comb-crying is finally over! The Berry Detangler Spray untangled her stubborn curls in 10 seconds. Even her school teacher noticed her shiny hair.',
      product: 'Tangle-Free Hair Serum',
    },
    {
      mom: 'Dr. Radhika Nair',
      city: 'Delhi · Pediatrician & Mother of 2',
      stars: 5,
      review: 'As a pediatrician, I always tell parents to stay away from artificial adult fragrances. Tuco uses real cold-pressed oils. Highly recommend for sensitive kids.',
      product: 'Everyday Glow Cream',
    },
  ];

  return (
    <div
      className={`relative w-full h-full flex flex-col justify-between select-none font-['Poppins'] ${
        isWireframe ? 'bg-zinc-50 text-zinc-900' : 'bg-[#FAF8F5] text-stone-900'
      }`}
    >
      {/* Scrollable Container */}
      <div className="flex-1 overflow-y-auto hide-scrollbar px-4 pt-3 pb-8 space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] font-bold uppercase tracking-wider text-amber-900 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
            Parents Circle & Doctors
          </span>
          <span className="text-xs font-bold text-stone-600">50,000+ Families</span>
        </div>

        <div className="space-y-1">
          <h1 className="font-['Poppins'] text-lg font-bold text-[#352002] leading-snug">
            Advice by Doctors, Loved by Moms 🩺
          </h1>
          <p className="text-xs text-stone-500">
            Real experiences from pediatricians and Indian parents.
          </p>
        </div>

        {/* Doctor Spotlight Card */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-50 via-teal-50 to-emerald-100/60 border border-emerald-200 space-y-2.5">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-white border border-emerald-200 overflow-hidden flex items-center justify-center text-2xl shadow-xs">
              👩‍⚕️
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <h4 className="font-bold text-xs text-stone-900">Dr. Neha Sharma, MD</h4>
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
              <p className="text-[10px] text-stone-500">Chief Pediatric Dermatology Consultant</p>
            </div>
          </div>

          <div className="p-3 bg-white/90 rounded-2xl border border-emerald-100 text-xs text-stone-700 space-y-1">
            <span className="font-bold text-[11px] text-emerald-950 block">Doctor's Winter Tip:</span>
            <p className="text-[11px] leading-relaxed text-stone-600">
              "Children's skin epidermis is 30% thinner than adults. Never use regular family soap in winter. Gentle oat wash + mineral zinc stick prevents long-term eczema flare-ups."
            </p>
          </div>
        </div>

        {/* Traditional Champi Ritual Banner */}
        <div className="p-4 rounded-3xl bg-gradient-to-br from-amber-100 via-orange-50 to-amber-50 border border-amber-200 space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-[10px] font-bold text-amber-900 bg-white/80 px-2 py-0.5 rounded-full">
              The Sunday Ritual
            </span>
            <span className="text-xs">💆</span>
          </div>
          <h4 className="font-bold text-xs text-[#352002]">
            Why Champi is the Ultimate Shared Bond
          </h4>
          <p className="text-[11px] text-stone-600 leading-snug">
            Traditional Indian scalp massage increases blood circulation, calms pre-school anxiety, and makes child sleep like a baby.
          </p>
        </div>

        {/* Real Mom Reviews Feed */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between px-0.5">
            <span className="text-xs font-bold text-stone-800">Verified Parent Stories</span>
            <span className="text-[10px] text-amber-700 font-semibold">100% Genuine</span>
          </div>

          {reviews.map((r, i) => (
            <div
              key={i}
              className="p-3.5 rounded-2xl bg-white border border-stone-200 shadow-2xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h5 className="font-bold text-xs text-stone-900">{r.mom}</h5>
                  <p className="text-[9px] text-stone-400">{r.city}</p>
                </div>
                <div className="flex text-amber-400 text-xs">{'★'.repeat(r.stars)}</div>
              </div>

              <p className="text-[11px] text-stone-600 leading-relaxed">
                "{r.review}"
              </p>

              <div className="pt-1 border-t border-stone-100 flex items-center justify-between text-[10px]">
                <span className="text-stone-400">Verified Buyer</span>
                <span className="font-semibold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-md">
                  {r.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
