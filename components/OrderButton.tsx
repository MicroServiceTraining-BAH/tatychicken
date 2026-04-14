'use client';

import { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import OrderModal from './OrderModal';

type OrderButtonProps = {
  children: React.ReactNode;
  className?: string;
  /** Render as a block-level button (for places that need block layout) */
  block?: boolean;
};

export default function OrderButton({ children, className = '', block = false }: OrderButtonProps) {
  const [open, setOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  // Ensure portal target is available (client-only)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Return focus to trigger when modal closes
  const handleClose = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const base = block
    ? 'cursor-pointer'
    : 'inline-flex items-center justify-center cursor-pointer';

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        className={`${base} ${className}`}
      >
        {children}
      </button>
      {mounted && open && createPortal(<OrderModal onClose={handleClose} />, document.body)}
    </>
  );
}
