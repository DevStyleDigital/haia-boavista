import { forwardRef, useState, useRef } from 'react';
import { CheckboxStyles } from './styles';

import { ConfirmIcon } from 'assets/svgs/icons/ConfirmIcon';
import { genId } from 'utils/generate-id';

export const Checkbox = forwardRef(
  (
    {
      id,
      children,
      defaultChecked,
      ...props
    }: BTypes.FCProps<
      { id: string },
      Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'id'>,
      false
    >,
    ref: React.ForwardedRef<HTMLInputElement>,
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const [checked, setChecked] = useState(
      props.checked || defaultChecked || false,
    );

    return (
      <CheckboxStyles htmlFor={id} className="checkbox">
        <input
          {...props}
          id={id}
          ref={ref}
          onFocus={() => buttonRef.current?.focus()}
          aria-hidden
          tabIndex={-1}
          type="checkbox"
          checked={checked}
          onChange={(ev) => {
            setChecked(ev.target.checked);
            props.onChange && props.onChange(ev);
          }}
        />
        <button
          aria-checked={checked}
          ref={buttonRef}
          type="button"
          className="custom-checkbox"
          role="checkbox"
          tabIndex={0}
          value={props.value || ''}
          onClick={() => setChecked(!checked)}
        >
          <ConfirmIcon />
        </button>
        <span>{children}</span>
      </CheckboxStyles>
    );
  },
);
