import { useState } from 'react';
import FormLayout from './FormLayout';

const CreateForm = ({ onClose }: { onClose: () => void }) => {
  const [roomCode, setRoomCode] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCreateRoom = () => {
    // 랜덤 참가 코드 생성 (6자리 영문 및 숫자 조합)
    const code = Math.random().toString(36).substring(2, 8).toUpperCase();
    setRoomCode(code);
    setCopied(false); // 새 코드 생성 시 복사 상태 초기화
  };

  const handleCopyCode = async () => {
    if (roomCode) {
      await navigator.clipboard.writeText(roomCode); // 클립보드에 복사
      setCopied(true); // 복사 성공 상태 업데이트
      setTimeout(() => setCopied(false), 2000); // 2초 후 상태 초기화
    }
  };

  return (
    <FormLayout>
      <div>
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl font-semibold">방 만들기</h1>
          <p className="text-base text-gray-700">
            새로운 방을 만들어서 마니또를 시작하세요.
          </p>
        </div>

        <div className="space-y-6">
          {/* 방 이름 입력 */}
          <div className="space-y-2">
            <label htmlFor="roomName" className="text-base font-medium">
              방 이름
            </label>
            <input
              id="roomName"
              name="roomName"
              type="text"
              placeholder="방 이름을 입력해주세요."
              className="w-full h-12 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D76CE]"
            />
          </div>

          {/* 최대 인원 입력 */}
          <div className="space-y-2">
            <label htmlFor="maxParticipants" className="text-base font-medium">
              최대 인원
            </label>
            <input
              id="maxParticipants"
              name="maxParticipants"
              type="number"
              placeholder="최대 인원을 입력해주세요."
              className="w-full h-12 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D76CE]"
            />
          </div>
        </div>

        {/* 방 만들기 버튼 */}
        <button
          className="w-full h-12 bg-[#ff3366] hover:bg-pink-300/90 text-white text-base font-medium rounded-md transition-colors mt-6"
          onClick={handleCreateRoom}
        >
          방 만들기
        </button>

        {/* 생성된 랜덤 코드 표시 */}
        {roomCode && (
          <div className="mt-6 text-center">
            <p className="text-lg text-gray-800 font-bold">참가 코드</p>
            <p
              className="text-2xl font-semibold text-blue-500 mt-2 cursor-pointer select-none hover:underline"
              onClick={handleCopyCode} // 클릭 시 복사
              title="클릭하면 복사됩니다"
            >
              {roomCode}
            </p>
            {copied && (
              <p className="text-sm text-green-500 mt-2">
                참가 코드가 복사되었습니다!
              </p>
            )}
          </div>
        )}

        {/* 닫기 버튼 */}
        {roomCode && (
          <button
            className="w-full h-12 bg-gray-500 hover:bg-gray-600 text-white text-base font-medium rounded-md transition-colors mt-6"
            onClick={onClose}
          >
            닫기
          </button>
        )}
      </div>
    </FormLayout>
  );
};

export default CreateForm;
