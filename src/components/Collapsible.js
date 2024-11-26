import React, { useEffect, useRef, useState } from 'react';
import { ChevronUp } from 'lucide-react';

const Collapsible = ({ 
  title, 
  children, 
  defaultOpen = false, 
  className = '',
  titleClassName = '',
  contentClassName = ''
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(isOpen ? contentRef.current.scrollHeight : 0);
    }
  }, [isOpen, children]);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`overflow-hidden ${className}`}>
      <div 
        onClick={toggleCollapse} 
        className={`
          flex items-center justify-between 
          py-3 pr-3 cursor-pointer 
          transition-colors 
          ${titleClassName}
        `}
      >
        <span className="font-base font-medium">{title}</span>
        <ChevronUp 
          className={isOpen ? `text-gray-500 ease-out duration-200`:`text-gray-500 ease-in-out duration-200 rotate-180`} 
          size={20}
        />
      </div>

      <div 
        className={`
          overflow-hidden 
          transition-all 
          duration-300 
          ease-in-out
          ${contentClassName}
        `}
        style={{ 
          maxHeight: `${contentHeight}px`,
          opacity: isOpen ? 1 : 0
        }}
      >
        <div ref={contentRef} className="pt-2 pb-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Collapsible;