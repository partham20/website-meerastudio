import { CSSProperties, ElementType, ReactNode } from 'react';
import { useInView } from '../../hooks/useInView';

type RevealProps = {
  children: ReactNode;
  as?: ElementType;
  delay?: number;
  className?: string;
};

// Fades and lifts its children in the first time they scroll into view.
export default function Reveal({ children, as: Tag = 'div', delay = 0, className = '' }: RevealProps) {
  const { ref, inView } = useInView<HTMLElement>({ threshold: 0.12, rootMargin: '0px 0px -8% 0px' });
  return (
    <Tag
      ref={ref}
      className={`reveal ${inView ? 'is-visible' : ''} ${className}`}
      style={{ '--reveal-delay': `${delay}ms` } as CSSProperties}
    >
      {children}
    </Tag>
  );
}
