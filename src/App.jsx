import React, { useEffect, useRef } from "react";
import gsap from "gsap";

function App() {
  const elementRef = useRef(null);

  useEffect(() => {
    gsap.to(elementRef.current, { opacity: 0, duration: 1 });
  }, []);

  return (
    <div ref={elementRef} className="bg-blue-500 p-4 text-white">
      This element will fade out over 1 second.
    </div>
  );
}

export default App;
