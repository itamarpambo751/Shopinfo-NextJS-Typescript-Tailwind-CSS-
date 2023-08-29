import React, { ReactNode } from 'react';
import { Section } from '../..';

// import { Container } from './styles';

interface GradientContainerProps {
    section: string
    children: ReactNode
}
const GradientContainer: React.FC<GradientContainerProps> = ({
    section, children
}: GradientContainerProps) => {
  return (
    <div>
      <Section.Root>
        <div className='mt-[-45px]'>
          <Section.Content>
            <small className='text-[var(--border-color)]'>{section}</small>
            <div className='mt-16'>
                {children}
            </div>
            </Section.Content>
        </div>
      </Section.Root>
    </div>
  )
}

export default GradientContainer;