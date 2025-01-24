import React from 'react';

const FormLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    // <div className="w-[505px] h-[700px] flex-shrink-0 rounded-[30px] border-[0.5px] border-[#878787] bg-white p-8 flex flex-col justify-between">
    <div className="w-[505px] h-[700px] flex-shrink-0 rounded-[50px] border-[2px] border-[#FFD1DC] bg-[#FFF0F3] p-10 flex flex-col justify-between shadow-lg">
      {children}
    </div>
  );
};

export default FormLayout;
