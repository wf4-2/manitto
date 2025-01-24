import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

interface ModalProps {
  children: React.ReactNode & { props?: { onClose?: () => void } };
}

const Modal = ({ children }: ModalProps) => {
  const [portalNode, setPortalNode] = useState<HTMLElement | null>(null);

  useEffect(() => {
    const modalRoot = document.createElement('div');
    modalRoot.id = 'modal-root';
    document.body.appendChild(modalRoot);

    setPortalNode(modalRoot);

    return () => {
      document.body.removeChild(modalRoot);
    };
  }, []);

  if (!portalNode) {
    return null;
  }

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black bg-opacity-50"
        onClick={() => {
          if (children && typeof children === 'object' && 'props' in children) {
            const onClose = children.props?.onClose;
            if (onClose && typeof onClose === 'function') {
              onClose();
            }
          }
        }}
      />
      <div className="relative z-1">{children}</div>
    </div>,
    portalNode
  );
};

export default Modal;
