// components/NavigationWrapper.tsx
'use client';

import { useState } from 'react';
import NavigationBar from '@/components/NavigationBar';

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      {/* NavigationBar에 상태 전달 */}
      <NavigationBar isOpen={isOpen} toggleOpen={() => setIsOpen(!isOpen)} />
      <main>{children}</main>
    </div>
  );
}
