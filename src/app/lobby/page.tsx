"use client";

import Header from "@/components/Header";
import LobbyCard from "@/components/LobbyCard";
import ManittoListCard from "@/components/ManittoListCard";
import GradientBackground from "@/components/GradientBackground";
import { useState } from "react";

export default function Home() {
  const [manitto, setManitto] = useState(null); // 진행 중인 마니또 상태

  return (
    <GradientBackground>
      <div className="flex flex-col items-center min-h-screen px-6">
        <Header />

        {/* 로고 및 소개 */}
        <div className="mt-10 text-center">
          <h1 className="text-5xl font-bold text-red-500">우리또</h1>
          <span className="text-6xl mt-2 block">💌</span> {/* 중앙 정렬 및 여백 추가 */}
          <p className="text-gray-700 mt-4">
            함께 나누는 따뜻한 마음, 우리또에서 시작해보세요
          </p>
        </div>

        {/* 방 만들기 & 방 입장하기 */}
        <div className="flex gap-4 mt-8">
          <LobbyCard title="방 만들기" description="새로운 마니또 시작하기" />
          <LobbyCard title="방 입장하기" description="입장 코드 입력하기" />
        </div>

        {/* 진행 중인 마니또 정보 */}
        <div className="w-full mt-8">
          <h3 className="text-xl font-bold text-gray-800">나의 마니또</h3>
          {manitto ? (
            <p className="mt-3 text-center text-gray-600">마니또가 있습니다!</p>
          ) : (
            <ManittoListCard />
          )}
        </div>
      </div>
    </GradientBackground>
  );
}
