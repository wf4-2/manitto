const Header = () => {
  return (
    <header className="w-full py-5 px-6 flex justify-between items-center">
      <h1 className="text-red-500 text-2xl font-bold">우리또</h1>
      <button className="text-2xl">⚙️</button> {/* 설정 아이콘 → 이모지 */}
    </header>
  );
};

export default Header;
