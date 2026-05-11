'use client';

import dynamic from 'next/dynamic';

// Dynamically import the Three.js canvas so it ONLY runs on the client.
// This avoids the ReactCurrentOwner crash caused by react-reconciler
// (used by @react-three/fiber) being evaluated during SSR/server build.
const TeaLeafCanvasInner = dynamic(
  () => import('./TeaLeafCanvasInner'),
  {
    ssr: false,
    loading: () => (
      <div className="absolute inset-0 w-full h-full bg-ahom-brown" aria-hidden="true" />
    ),
  }
);

export default function TeaLeafCanvas() {
  return <TeaLeafCanvasInner />;
}
