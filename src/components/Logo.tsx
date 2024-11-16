import React from 'react';

export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <img 
      src="https://fevtmhcvpjxpdqlgoxvt.supabase.co/storage/v1/object/public/List%20of%20projects/logo%20PNG.png" 
      alt="AMLYL Logo" 
      className={className}
      style={{ objectFit: 'contain' }}
    />
  );
}