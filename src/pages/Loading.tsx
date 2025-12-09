const Loading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      <div className="flex flex-col items-center space-y-6">
        {/* Multi-colored Spinner */}
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 w-16 h-16 border-4 border-gray-200 border-t-blue-600 rounded-full animate-spin"></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-r-purple-600 rounded-full animate-spin"
            style={{ animationDelay: "0.15s" }}
          ></div>
          <div
            className="absolute inset-0 w-16 h-16 border-4 border-transparent border-b-green-600 rounded-full animate-spin"
            style={{ animationDelay: "0.3s" }}
          ></div>
        </div>

        {/* Loading Text with Animated Dots */}
        <div className="flex items-center space-x-2">
          <span className="text-lg font-medium text-gray-600">
            Loading
          </span>
          <div className="flex space-x-1">
            <div
              className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce"
              style={{ animationDelay: "0ms" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce"
              style={{ animationDelay: "150ms" }}
            ></div>
            <div
              className="w-1.5 h-1.5 bg-gray-600 rounded-full animate-bounce"
              style={{ animationDelay: "300ms" }}
            ></div>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-green-500 rounded-full"
            style={{
              animation: "shimmer 2s infinite",
            }}
          ></div>
        </div>

        {/* Hint Text */}
        <p className="text-sm text-gray-500 animate-pulse">
          Please wait while we load the content...
        </p>
      </div>
    </div>
  );
};

export default Loading;
