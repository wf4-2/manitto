import { useState } from 'react';
import FormLayout from './FormLayout';

const EnterForm = ({ onClose }: { onClose: () => void }) => {
  const [roomCode, setRoomCode] = useState('');
  const [error, setError] = useState<string | null>(null);

  const handleEnterRoom = () => {
    // 방 참가 코드 검증 로직
    if (!roomCode.trim()) {
      setError('참가 코드를 입력해주세요.');
      return;
    }
    if (roomCode.length !== 6) {
      setError('유효한 참가 코드를 입력해주세요.');
      return;
    }

    // 성공 처리
    alert(`방에 입장하였습니다! 참가 코드: ${roomCode}`);
    setError(null);
    setRoomCode('');
  };

  return (
    <FormLayout>
      <div>
        <div className="space-y-2 mb-8">
          <h1 className="text-2xl font-semibold">방 입장하기</h1>
          <p className="text-base text-gray-700">
            참가 코드를 입력하여 방에 입장하세요.
          </p>
        </div>

        <div className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="roomCode" className="text-base font-medium">
              참가 코드
            </label>
            <input
              id="roomCode"
              name="roomCode"
              type="text"
              placeholder="참가 코드를 입력해주세요."
              value={roomCode}
              onChange={(e) => setRoomCode(e.target.value.toUpperCase())}
              className="w-full h-12 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#2D76CE]"
            />
            <p className="h-4 text-red-500 text-sm">{error || ''}</p>
          </div>
        </div>

        <button
          className="w-full h-12 bg-[#ff3366] hover:bg-pink-300/90 text-white text-base font-medium rounded-md transition-colors mt-6"
          onClick={handleEnterRoom}
        >
          방 입장하기
        </button>

        <button
          className="w-full h-12 bg-gray-500 hover:bg-gray-600 text-white text-base font-medium rounded-md transition-colors mt-4"
          onClick={onClose}
        >
          닫기
        </button>
      </div>
    </FormLayout>
  );
};

export default EnterForm;
