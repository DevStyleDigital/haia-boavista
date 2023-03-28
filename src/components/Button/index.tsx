import Link, { type LinkProps } from 'next/link';
import { ButtonStyled, type ButtonStyledProps } from './styles';
import { UrlObject } from 'url';

import { Slot } from '@radix-ui/react-slot';

export interface ButtonProps
  extends Omit<LinkProps, 'href'>,
    ButtonStyledProps {
  href?: string | UrlObject;
  target?: '_blank';
  asChild?: boolean;
}

export const Button: BTypes.FC<ButtonProps> = ({
  variant = 'normal',
  href = '',
  children,
  asChild,
  ...props
}) => {
  const Comp = asChild ? Slot : Link;

  return (
    <ButtonStyled variant={variant}>
      <Comp href={href} {...props}>
        {children}
      </Comp>
    </ButtonStyled>
  );
};
