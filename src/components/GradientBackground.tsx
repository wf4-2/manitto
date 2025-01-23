const GradientBackground = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-gradient-to-b from-pink-200 to-white min-h-screen w-full">
      {children}
    </div>
  );
};

export default GradientBackground;
