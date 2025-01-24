const LobbyCard = ({
  title,
  description,
  onClick,
}: {
  title: string;
  description: string;
  onClick?: () => void; // 선택적으로 onClick을 받을 수 있도록 설정
}) => {
  return (
    <div
      className="bg-white shadow-lg p-6 rounded-lg w-40 text-center cursor-pointer
                  hover:bg-pink-200 active:bg-pink-400 transition"
      onClick={onClick} // onClick 이벤트 추가
    >
      <h2 className="text-lg font-bold text-gray-800">{title}</h2>
      <p className="text-sm text-gray-600 mt-2">{description}</p>
    </div>
  );
};

export default LobbyCard;
