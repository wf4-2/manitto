const LobbyCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <div className="bg-white shadow-lg p-6 rounded-lg w-40 text-center cursor-pointer
                    hover:bg-pink-200 active:bg-pink-400 transition">
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default LobbyCard;
