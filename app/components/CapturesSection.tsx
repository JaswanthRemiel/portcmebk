interface CapturesSectionProps {
  isLoaded: boolean;
}

export default function CapturesSection({ isLoaded }: CapturesSectionProps) {
  return (
    <section
      className={`mb-12 transition-all duration-1000 delay-700 ${
        isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
      }`}
    >
      <h2 className="text-sm font-medium mb-6 text-foreground">captures</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="polaroid-photo rotate-[-2deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
          <div className="bg-white dark:bg-gray-100 p-3 shadow-lg">
            <img
              src="/urban-street-scene.png"
              alt="Street photography"
              className="w-full h-24 object-cover mb-2"
            />
            <p className="text-xs text-gray-600 text-center font-handwriting">
              urban vibes
            </p>
          </div>
        </div>

        <div className="polaroid-photo rotate-[3deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
          <div className="bg-white dark:bg-gray-100 p-3 shadow-lg">
            <img
              src="/mountain-landscape.png"
              alt="Nature landscape"
              className="w-full h-24 object-cover mb-2"
            />
            <p className="text-xs text-gray-600 text-center font-handwriting">
              mountain escape
            </p>
          </div>
        </div>

        <div className="polaroid-photo rotate-[1deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
          <div className="bg-white dark:bg-gray-100 p-3 shadow-lg">
            <img
              src="/warm-coffee-shop.png"
              alt="Coffee shop"
              className="w-full h-24 object-cover mb-2"
            />
            <p className="text-xs text-gray-600 text-center font-handwriting">
              morning ritual
            </p>
          </div>
        </div>

        <div className="polaroid-photo rotate-[-3deg] hover:rotate-0 hover:scale-105 transition-all duration-300">
          <div className="bg-white dark:bg-gray-100 p-3 shadow-lg">
            <img
              src="/sunset-golden-hour-silhouette.png"
              alt="Sunset silhouette"
              className="w-full h-24 object-cover mb-2"
            />
            <p className="text-xs text-gray-600 text-center font-handwriting">
              golden hour
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
