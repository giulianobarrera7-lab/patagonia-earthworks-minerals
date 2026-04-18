import React from "react";

type Particle = {
  id: number;
  size: number;
  left: number;
  bottom: number;
  opacity: number;
  duration: number;
  delay: number;
  drift: number;
  rise: number;
  blur: number;
  r: number;
  g: number;
  b: number;
};

// Pre-computed particles — positioned to match quarry/machinery areas (right + center)
const PARTICLES: Particle[] = [
  // Fine fast particles
  { id: 1,  size: 4,  left: 63, bottom: 9,  opacity: 0.38, duration: 9,  delay: 0,   drift: 32,  rise: -285, blur: 0.5, r: 220, g: 190, b: 140 },
  { id: 2,  size: 5,  left: 71, bottom: 6,  opacity: 0.32, duration: 11, delay: 2.5, drift: -24, rise: -325, blur: 0.5, r: 210, g: 180, b: 130 },
  { id: 3,  size: 3,  left: 79, bottom: 13, opacity: 0.42, duration: 8,  delay: 4.2, drift: 18,  rise: -265, blur: 0.3, r: 230, g: 200, b: 150 },
  { id: 4,  size: 4,  left: 56, bottom: 7,  opacity: 0.30, duration: 10, delay: 1.1, drift: 44,  rise: -305, blur: 0.5, r: 215, g: 185, b: 135 },
  { id: 5,  size: 6,  left: 86, bottom: 10, opacity: 0.26, duration: 12, delay: 3.3, drift: -38, rise: -275, blur: 1.0, r: 200, g: 175, b: 125 },
  { id: 6,  size: 4,  left: 93, bottom: 16, opacity: 0.38, duration: 8,  delay: 1.0, drift: 12,  rise: -260, blur: 0.4, r: 225, g: 198, b: 148 },
  { id: 7,  size: 5,  left: 96, bottom: 11, opacity: 0.28, duration: 10, delay: 5.5, drift: -16, rise: -245, blur: 0.6, r: 210, g: 183, b: 133 },
  // Medium cloud puffs
  { id: 8,  size: 16, left: 66, bottom: 5,  opacity: 0.18, duration: 14, delay: 0.5, drift: 64,  rise: -255, blur: 2.5, r: 190, g: 165, b: 120 },
  { id: 9,  size: 20, left: 74, bottom: 3,  opacity: 0.15, duration: 16, delay: 3.5, drift: -54, rise: -225, blur: 3.5, r: 200, g: 170, b: 115 },
  { id: 10, size: 14, left: 59, bottom: 8,  opacity: 0.20, duration: 13, delay: 6.2, drift: 48,  rise: -235, blur: 2.0, r: 185, g: 160, b: 110 },
  { id: 11, size: 22, left: 83, bottom: 4,  opacity: 0.13, duration: 17, delay: 1.5, drift: -44, rise: -205, blur: 4.0, r: 195, g: 168, b: 118 },
  { id: 12, size: 18, left: 51, bottom: 11, opacity: 0.17, duration: 15, delay: 7.1, drift: 58,  rise: -245, blur: 3.0, r: 205, g: 175, b: 125 },
  { id: 13, size: 12, left: 41, bottom: 14, opacity: 0.22, duration: 12, delay: 4.8, drift: 36,  rise: -270, blur: 1.5, r: 218, g: 188, b: 138 },
  // Large slow cloud masses
  { id: 14, size: 48, left: 69, bottom: 1,  opacity: 0.07, duration: 22, delay: 0.2, drift: 85,  rise: -185, blur: 9,   r: 210, g: 185, b: 145 },
  { id: 15, size: 62, left: 76, bottom: 0,  opacity: 0.05, duration: 26, delay: 5.5, drift: -75, rise: -165, blur: 11,  r: 200, g: 175, b: 135 },
  { id: 16, size: 40, left: 57, bottom: 0,  opacity: 0.08, duration: 20, delay: 8.3, drift: 68,  rise: -175, blur: 7.5, r: 215, g: 188, b: 148 },
  { id: 17, size: 56, left: 87, bottom: 0,  opacity: 0.06, duration: 24, delay: 2.2, drift: -65, rise: -155, blur: 10,  r: 205, g: 180, b: 140 },
  { id: 18, size: 36, left: 44, bottom: 2,  opacity: 0.09, duration: 19, delay: 9.0, drift: 72,  rise: -180, blur: 7,   r: 208, g: 182, b: 142 },
  // Ambient scattered
  { id: 19, size: 7,  left: 31, bottom: 19, opacity: 0.23, duration: 11, delay: 4.5, drift: 37,  rise: -315, blur: 1.0, r: 225, g: 195, b: 145 },
  { id: 20, size: 9,  left: 49, bottom: 13, opacity: 0.21, duration: 13, delay: 2.1, drift: 52,  rise: -265, blur: 1.5, r: 195, g: 168, b: 118 },
  { id: 21, size: 6,  left: 26, bottom: 20, opacity: 0.26, duration: 10, delay: 7.7, drift: 22,  rise: -285, blur: 0.8, r: 215, g: 188, b: 138 },
  { id: 22, size: 28, left: 36, bottom: 3,  opacity: 0.10, duration: 21, delay: 3.2, drift: -84, rise: -205, blur: 5.5, r: 200, g: 172, b: 122 },
  { id: 23, size: 33, left: 43, bottom: 1,  opacity: 0.08, duration: 23, delay: 9.5, drift: 74,  rise: -185, blur: 6.5, r: 210, g: 180, b: 130 },
];

type Ray = {
  id: number;
  left: string;
  width: string;
  height: string;
  duration: number;
  delay: number;
  opacity: number;
};

const LIGHT_RAYS: Ray[] = [
  { id: 1, left: "48%",  width: "80px",  height: "55%", duration: 14, delay: 0,   opacity: 0.10 },
  { id: 2, left: "63%",  width: "120px", height: "65%", duration: 18, delay: 4.5, opacity: 0.07 },
  { id: 3, left: "74%",  width: "60px",  height: "48%", duration: 12, delay: 2.2, opacity: 0.09 },
  { id: 4, left: "85%",  width: "100px", height: "60%", duration: 16, delay: 7.0, opacity: 0.06 },
];

const DustParticles = () => (
  <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
    {/* Light rays */}
    {LIGHT_RAYS.map((ray) => (
      <div
        key={ray.id}
        className="absolute top-0 origin-top"
        style={{
          left: ray.left,
          width: ray.width,
          height: ray.height,
          background: `linear-gradient(to bottom, rgba(255,210,140,${ray.opacity}), transparent)`,
          animation: `shimmer-ray ${ray.duration}s ${ray.delay}s ease-in-out infinite`,
        }}
      />
    ))}

    {/* Dust particles */}
    {PARTICLES.map((p) => (
      <div
        key={p.id}
        className="absolute rounded-full"
        style={
          {
            width: `${p.size}px`,
            height: `${p.size * 0.65}px`,
            left: `${p.left}%`,
            bottom: `${p.bottom}%`,
            backgroundColor: `rgba(${p.r},${p.g},${p.b},${p.opacity})`,
            filter: `blur(${p.blur}px)`,
            animation: `dust-rise ${p.duration}s ${p.delay}s ease-out infinite`,
            "--p-rise": `${p.rise}px`,
            "--p-drift": `${p.drift}px`,
            "--p-opacity": `${p.opacity}`,
          } as React.CSSProperties
        }
      />
    ))}
  </div>
);

export default DustParticles;
