'use client';

import Link from 'next/link';
import { useNav } from '@/context/NavContext';
import { Menu, Home, MessageCircle, User } from 'lucide-react';
import { Button } from '@heroui/react';

export default function NavigationBar(): React.ReactElement {
  const { isOpen, setIsOpen } = useNav();

  const navItems = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: MessageCircle, label: 'Chat', href: '/chat' },
    { icon: User, label: 'Profile', href: '/profile' },
    { icon: Home, label: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <nav
      className={`fixed left-0 h-screen transition-all duration-300 ease-in-out bg-[#FEE0E6] z-50 ${
        isOpen ? 'w-48' : 'w-16'
      }`}
    >
      {/* Menu Button */}
      <Button
        onPress={() => setIsOpen(!isOpen)}
        className="w-full p-4 text-[#FF3366] hover:bg-pink-200 transition-colors"
      >
        <Menu size={24} />
      </Button>

      {/* Navigation Items */}
      <div className="flex flex-col gap-2 mt-4">
        {navItems.map((item, index) => (
          <Link
            key={index}
            href={item.href}
            className="flex items-center px-4 py-3 text-[#FF3366] hover:bg-pink-200 transition-colors"
            onClick={() => setIsOpen(true)} // 네비게이션 클릭 후 열린 상태 유지
          >
            <item.icon size={24} />
            {isOpen && <span className="ml-4 text-lg">{item.label}</span>}
          </Link>
        ))}
      </div>
    </nav>
  );
}
