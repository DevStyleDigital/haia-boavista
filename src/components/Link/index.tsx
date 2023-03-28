import { LinkProps } from 'next/link';
import { forwardRef } from 'react';
import { LinkStyles } from './styles';

export const Link = forwardRef(
  (
    {
      children,
      ...props
    }: BTypes.FCProps<
      Omit<LinkProps, 'as' | 'Url'>,
      { target?: '_blank' },
      false
    >,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    return (
      <LinkStyles ref={ref} {...props}>
        {children}
      </LinkStyles>
    );
  },
);
