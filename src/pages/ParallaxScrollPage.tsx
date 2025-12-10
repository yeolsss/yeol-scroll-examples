import { useState } from "react";

const ParallaxScrollPage = () => {
  const [debugMode, setDebugMode] = useState(false);

  const groups = [
    {
      id: "group1",
      zIndex: 5,
      layers: [
        {
          type: "base",
          bg: "bg-gradient-to-b from-blue-400 to-blue-600",
          content: (
            <div className="text-white">
              <h1 className="text-6xl font-bold mb-4">Welcome</h1>
              <p className="text-2xl">Scroll down to explore</p>
            </div>
          ),
        },
      ],
    },
    {
      id: "group2",
      zIndex: 3,
      layers: [
        {
          type: "back",
          bg: "bg-[url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&h=1080&fit=crop')] bg-cover bg-center",
          content: null,
        },
        {
          type: "base",
          bg: "bg-white/80 backdrop-blur-sm",
          content: (
            <div className="max-w-4xl mx-auto px-8">
              <h2 className="text-5xl font-bold text-gray-800 mb-6">
                Mountain Views
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed">
                Experience the depth of parallax scrolling with layered
                backgrounds. The mountain image moves slower than this content,
                creating a sense of depth.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      id: "group3",
      zIndex: 4,
      layers: [
        {
          type: "fore",
          bg: "bg-transparent",
          content: (
            <div className="flex items-center justify-center">
              <div className="bg-white/90 backdrop-blur-md p-12 rounded-3xl shadow-2xl max-w-2xl">
                <h3 className="text-4xl font-bold text-gray-800 mb-4">
                  Foreground Layer
                </h3>
                <p className="text-lg text-gray-600">
                  This card appears closer to you, moving faster as you scroll.
                </p>
              </div>
            </div>
          ),
        },
        {
          type: "base",
          bg: "bg-gradient-to-b from-purple-500 to-pink-500",
          content: null,
        },
      ],
    },
    {
      id: "group4",
      zIndex: 2,
      layers: [
        {
          type: "deep",
          bg: "bg-[url('https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1920&h=1080&fit=crop')] bg-cover bg-center",
          content: null,
        },
        {
          type: "back",
          bg: "bg-gradient-to-t from-black/50 to-transparent",
          content: null,
        },
        {
          type: "base",
          bg: "bg-transparent",
          content: (
            <div className="text-white text-center">
              <h2 className="text-5xl font-bold mb-6">Deep Space</h2>
              <p className="text-2xl max-w-3xl mx-auto">
                Three layers working together: a distant starry background, a
                gradient overlay, and this content layer.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      id: "group5",
      zIndex: 3,
      layers: [
        {
          type: "base",
          bg: "bg-gradient-to-br from-emerald-400 to-cyan-500",
          content: (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-8">
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl mb-4">🎨</div>
                <h3 className="text-2xl font-bold mb-2">Design</h3>
                <p className="text-gray-600">
                  Beautiful visual hierarchy with depth perception
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-2xl font-bold mb-2">Performance</h3>
                <p className="text-gray-600">
                  Pure CSS transforms for smooth 60fps scrolling
                </p>
              </div>
              <div className="bg-white/90 backdrop-blur-sm p-8 rounded-2xl">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-2xl font-bold mb-2">Responsive</h3>
                <p className="text-gray-600">
                  Works seamlessly across all devices
                </p>
              </div>
            </div>
          ),
        },
        {
          type: "fore",
          bg: "bg-transparent",
          content: (
            <div className="absolute top-20 right-20">
              <div className="w-32 h-32 bg-yellow-400 rounded-full animate-bounce shadow-2xl" />
            </div>
          ),
        },
      ],
    },
    {
      id: "group6",
      zIndex: 2,
      layers: [
        {
          type: "back",
          bg: "bg-[url('https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=1920&h=1080&fit=crop')] bg-cover bg-center",
          content: null,
        },
        {
          type: "base",
          bg: "bg-black/60 backdrop-blur-sm",
          content: (
            <div className="text-white text-center">
              <h2 className="text-6xl font-bold mb-8">Almost There</h2>
              <p className="text-2xl max-w-2xl mx-auto leading-relaxed">
                Notice how the mountain background moves at a different speed,
                creating natural depth and immersion.
              </p>
            </div>
          ),
        },
      ],
    },
    {
      id: "group7",
      zIndex: 3,
      layers: [
        {
          type: "base",
          bg: "bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900",
          content: (
            <div className="text-white text-center">
              <h2 className="text-5xl font-bold mb-6">The End</h2>
              <p className="text-xl text-gray-300 mb-8">
                Built with React + Tailwind CSS v4
              </p>
              <button className="bg-white text-gray-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-colors">
                Start Over
              </button>
            </div>
          ),
        },
      ],
    },
  ];

  const getLayerStyles = (type: string) => {
    const baseStyles = "absolute inset-0";

    switch (type) {
      case "fore":
        return `${baseStyles} z-[1] [transform:translateZ(90px)_scale(0.7)]`;
      case "back":
        return `${baseStyles} z-[3] [transform:translateZ(-300px)_scale(2)]`;
      case "deep":
        return `${baseStyles} z-[2] [transform:translateZ(-600px)_scale(3)]`;
      case "base":
      default:
        return `${baseStyles} z-[4] [transform:translateZ(0)]`;
    }
  };

  return (
    <div className={debugMode ? "debug-on" : ""}>
      {/* Debug Toggle */}
      <div className="fixed top-0 left-2 z-999 bg-black/85 text-white p-2 rounded-b-[5px]">
        <label className="cursor-pointer">
          <input
            type="checkbox"
            checked={debugMode}
            onChange={() => setDebugMode(!debugMode)}
            className="mr-1"
          />
          Debug
        </label>
      </div>

      {/* Parallax Container */}
      <div className="h-screen overflow-x-hidden overflow-y-auto perspective-near [-webkit-overflow-scrolling:touch]">
        {groups.map((group) => (
          <div
            key={group.id}
            style={{ zIndex: group.zIndex }}
            className={`
              relative h-screen transform-3d transition-transform duration-500
              ${debugMode ? "transform-[translate3d(700px,0,-800px)_rotateY(30deg)]" : ""}
            `}
          >
            {group.layers.map((layer, idx) => (
              <div
                key={idx}
                className={`
                  ${getLayerStyles(layer.type)}
                  ${layer.bg}
                  ${debugMode ? "shadow-[0_0_0_2px_#000] opacity-90" : ""}
                  flex items-center justify-center
                `}
              >
                {layer.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxScrollPage;
