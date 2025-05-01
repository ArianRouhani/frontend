import { useEffect, useRef } from 'react';

export default function MovingBox() {
  const boxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const box = boxRef.current;
    if (!box) return;

    const keyframes = [
      { 
        transform: 'translateX(-100vw) translateY(-50%)', // Start right
        easing: 'cubic-bezier(0.1, 0, 0.1, 1)' // Very slow start
      },
      {
        transform: 'translateX(30vw) translateY(-50%)', // End of slow phase
        offset: 0.4,
        easing: 'cubic-bezier(0.1, 0, 0.1, 1)'
      },
      {
        transform: 'translateX(50vw) translateY(-50%)', // Fast middle section
        offset: 0.6,
        easing: 'cubic-bezier(0.8, 0, 0.8, 1)' // Very fast
      },
      { 
        transform: 'translateX(100vw) translateY(-50%)', // End left
        easing: 'cubic-bezier(0.1, 0, 0.1, 1)' // Slow end
      }
    ];

    const options = {
      duration: 5000, // 8 second loop
      iterations: Infinity
    };

    const animation = box.animate(keyframes, options);

    return () => animation.cancel();
  }, []);

  return (
    <div
      ref={boxRef}
      style={{
        position: 'fixed',
        top: '50%',
        width: '100px',
        height: '100px',
        backgroundColor: '#3b82f6',
        borderRadius: '0.5rem',
        transform: 'translateY(-50%)'
      }}
    />
    
  );
}