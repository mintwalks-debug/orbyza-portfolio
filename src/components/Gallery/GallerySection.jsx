import React from 'react';

const GallerySection = () => {
  return (
    <section id="gallery" style={{ height: '300vh', pointerEvents: 'none' }}>
      {/* 
        This section is tall (300vh) to allow for scroll-based 
        rotation of the orbital ring in the Canvas.
        HTML overlays for project details will be triggered here.
      */}
      <div style={{
        position: 'sticky',
        top: 0,
        height: '100vh',
        width: '100%',
        pointerEvents: 'none'
      }}>
        {/* Overlays can be rendered via global state or portals if needed */}
      </div>
    </section>
  );
};

export default GallerySection;
