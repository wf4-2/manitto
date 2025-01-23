const ManittoListCard = () => {
  return (
    <div className="bg-gray-100 p-6 mt-3 rounded-lg flex flex-col items-center">
      <span className="text-4xl">📌</span> {/* PNG 대신 이모지 사용 */}
      <p className="text-gray-500 mt-2">아직 진행중인 마니또가 없어요!</p>
    </div>
  );
};

export default ManittoListCard;
