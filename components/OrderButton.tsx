'use client';

import { useState } from 'react';
import OrderModal from './OrderModal';

type OrderButtonProps = {
  children: React.ReactNode;
  className?: string;
  /** Render as an anchor-shaped div (for places that need block layout) */
  block?: boolean;
};

export default function OrderButton({ children, className = '', block = false }: OrderButtonProps) {
  const [open, setOpen] = useState(false);

  const base = block
    ? 'cursor-pointer'
    : 'inline-flex items-center justify-center cursor-pointer';

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        className={`${base} ${className}`}
      >
        {children}
      </button>
      {open && <OrderModal onClose={() => setOpen(false)} />}
    </>
  );
}
