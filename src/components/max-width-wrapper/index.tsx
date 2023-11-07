import { cn } from '@/utils/helpers';

import { MaxWidthWrapperProps } from './types';

export const MaxWidthWrapper = ({
  children,
  className,
}: MaxWidthWrapperProps) => (
  <div
    className={cn('mx-auto w-full max-w-screen-xl px-2 md:px-20', className)}
  >
    {children}
  </div>
);
