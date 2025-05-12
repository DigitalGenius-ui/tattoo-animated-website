import React from "react";

const categories = [
  { label: "Fineline" },
  { label: "Mandala" },
  { label: "Lettering" },
  { label: "Alle", active: true },
  { label: "Floral" },
  { label: "Dotwork" },
  { label: "Traditional" },
];

const Gallary = () => {
  const radius = 200;
  const centerX = 50; // central item is at 50% horizontally
  const angleStep = 120 / (categories.length - 1); // spread across 120 degrees
  return (
    <section className="h-[200vh] !w-[90%] !mx-auto">
      {/* filter buttons  */}
      <div className="!mt-[8rem]">
        <h1 className="text-center text-white uppercase text-[8vw] font-[--font-playfair]">
          gallary
        </h1>
        <div className="relative w-full h-72 flex items-center justify-center">
          {/* Horizontal line */}
          <div className="absolute top-0 left-0 w-full h-px bg-gray-600" />

          {/* Lines from center */}
          {categories.map((item, i) => {
            const offset = i - Math.floor(categories.length / 2);
            const angle = offset * angleStep;

            const radians = (angle * Math.PI) / 180;
            const x = radius * Math.sin(radians);
            const y = radius * Math.cos(radians);

            return (
              <React.Fragment key={i}>
                {/* Line */}
                <div
                  className="absolute w-px bg-gray-500 origin-top"
                  style={{
                    height: `${radius}px`,
                    top: "50%",
                    left: "50%",
                    transform: `translate(-50%, 0) rotate(${angle}deg)`,
                  }}
                />

                {/* Label */}
                <div
                  className={`absolute text-sm ${
                    item.active ? "text-white font-semibold" : "text-gray-400"
                  }`}
                  style={{
                    left: `calc(50% + ${x}px)`,
                    top: `calc(50% + ${y}px)`,
                    transform: "translate(-50%, -50%)",
                    whiteSpace: "nowrap",
                  }}
                >
                  {item.label.toUpperCase()}
                </div>
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallary;
