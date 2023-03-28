import { useEffect } from 'react';
import {
  Fancybox as NativeFancybox,
  type FancyboxOptions,
} from '@fancyapps/ui';

import '@fancyapps/ui/dist/fancybox.css';

interface DialogProps {
  children: React.ReactNode;
  delegate?: string;
  options?: FancyboxOptions;
}

export const BoxDialog = ({ delegate, children, options }: DialogProps) => {
  const delegateP = delegate || '[data-fancybox]';

  useEffect(() => {
    const opts = options || {};

    NativeFancybox.bind(delegateP, opts);

    return () => {
      NativeFancybox.destroy();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return <>{children}</>;
};
