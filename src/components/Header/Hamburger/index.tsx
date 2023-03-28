import { useEffect, useRef } from 'react';
import { HamburgerStyled } from './styles';

const HamburgerRoot: BTypes.FC<
  { onChange: (open: boolean) => void; open: boolean },
  Omit<
    React.LabelHTMLAttributes<HTMLLabelElement>,
    'onChange' | 'role' | 'htmlFor' | 'tabIndex' | 'onKeyDown'
  >,
  false
> = ({ onChange, open, ...props }) => {
  const hamburgerRootRef = useRef<HTMLLabelElement>(null);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLLabelElement>) => {
    if (event.key === 'Enter' || event.key === ' ') {
      onChange(!open);
    }
  };

  useEffect(() => {
    if (!open) {
      hamburgerRootRef.current?.focus();
    }
  }, [open]);

  return (
    <HamburgerStyled
      {...props}
      role="button"
      className={`${
        (props.className && `${props.className} `) || ''
      } hamburger`}
      htmlFor="hbv-c:hnav"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      ref={hamburgerRootRef}
    >
      <input
        type="checkbox"
        id="hbv-c:hnav"
        aria-hidden
        hidden
        tabIndex={-1}
        checked={open}
        onChange={({ target: { checked } }) => onChange(checked)}
      />
      <span className="hamburger-line" />
    </HamburgerStyled>
  );
};
export const Hamburger = {
  Root: HamburgerRoot,
};
