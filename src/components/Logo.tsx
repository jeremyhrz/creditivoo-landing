/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';

interface LogoProps {
  className?: string;
  variant?: 'horizontal' | 'stacked' | 'icon';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', variant = 'horizontal', size = 'md' }: LogoProps) {
  const [imgFailed, setImgFailed] = useState(false);

  // Height and widths based on size preset
  const sizeMap = {
    sm: { h: 'h-8', w: 'w-auto', iconSize: 32 },
    md: { h: 'h-11', w: 'w-auto', iconSize: 44 },
    lg: { h: 'h-16', w: 'w-auto', iconSize: 64 },
    xl: { h: 'h-24', w: 'w-auto', iconSize: 96 },
  };

  const selectedSize = sizeMap[size];

  // If the uploaded image didn't fail, use the real image from the workspace
  // input_file_1.png is horizontal, input_file_0.png is stacked
  if (!imgFailed) {
    if (variant === 'horizontal') {
      return (
        <img
          src="/input_file_1.png"
          alt="Creditivoo"
          className={`${selectedSize.h} object-contain ${className}`}
          onError={() => setImgFailed(true)}
          referrerPolicy="no-referrer"
        />
      );
    } else if (variant === 'stacked') {
      return (
        <img
          src="/input_file_0.png"
          alt="Creditivoo"
          className={`${size === 'xl' ? 'h-40' : 'h-28'} object-contain ${className}`}
          onError={() => setImgFailed(true)}
          referrerPolicy="no-referrer"
        />
      );
    }
  }

  // Fallback high-fidelity SVG representation of the Creditivoo Logo
  const iconSvg = (dimension: number) => {
    return (
      <svg
        width={dimension}
        height={dimension}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="inline-block"
      >
        {/* original creditivoo logo layout - rounded rectangle with clean neon green */}
        <rect
          x="10"
          y="20"
          width="80"
          height="60"
          rx="18"
          fill="#00E37C"
        />
        {/* stylized elegant outline inside green card representing C */}
        <path
          d="M 68 36 L 40 36 C 34 36 30 40 30 46 L 30 54 C 30 60 34 64 40 64 L 68 64"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
        />
        {/* customized center connector line representing card layout chip */}
        <line
          x1="50"
          y1="50"
          x2="68"
          y2="50"
          stroke="white"
          strokeWidth="8"
          strokeLinecap="round"
        />
        {/* small dot/rectangle to represent chip detail on top-right */}
        <rect
          x="58"
          y="26"
          width="10"
          height="3"
          rx="1"
          fill="white"
          opacity="0.8"
        />
      </svg>
    );
  };

  if (variant === 'icon') {
    return <div className={`inline-flex ${className}`}>{iconSvg(selectedSize.iconSize)}</div>;
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center justify-center text-center p-6 bg-slate-50 border border-slate-200 rounded-2xl ${className}`}>
        {iconSvg(size === 'xl' ? 96 : 72)}
        <div className="mt-4">
          <span className="font-display text-2xl md:text-3xl font-black tracking-widest text-[#00AA5B]">
            CREDITIVOO
          </span>
          <p className="text-[10px] font-mono tracking-[0.25em] text-slate-500 uppercase mt-1">
            Financiamiento IVOO
          </p>
        </div>
      </div>
    );
  }

  // Horizontal Fallback Header version - Updated to dark text for white background visibility
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      {iconSvg(selectedSize.iconSize - 6)}
      <div className="flex flex-col">
        <span className="font-display text-xl md:text-2xl font-black tracking-wider text-slate-900 select-none">
          CREDITIVOO
        </span>
        <span className="text-[9px] font-mono tracking-widest text-slate-500 uppercase">
          Exclusivo IVOO
        </span>
      </div>
    </div>
  );
}
