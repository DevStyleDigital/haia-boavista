import { Arrow } from 'assets/svgs/icons/Arrow';
import { createContext, useContext, useMemo, useState } from 'react';
import {
  FormDropdownRootStyled,
  FormDropdownPortalStyled,
  FormDropdownTriggerStyled,
} from './styled';

interface FormDropdownContextProps {
  id: string;
  portalOpen: boolean;
  setPortalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const FormDropdownContext = createContext<FormDropdownContextProps>(
  {} as FormDropdownContextProps,
);
const useFormDropdown = () => useContext(FormDropdownContext);

export const FormDropdownRoot: BTypes.FC = ({ children, ...props }) => {
  const [portalOpen, setPortalOpen] = useState(false);

  const FormDropdownContextValues = useMemo(
    () => ({
      id: `hbv-fd-${props.id || ''}`,
      portalOpen,
      setPortalOpen,
    }),
    [portalOpen, props.id],
  );

  return (
    <FormDropdownContext.Provider value={FormDropdownContextValues}>
      <FormDropdownRootStyled {...props}>{children}</FormDropdownRootStyled>
    </FormDropdownContext.Provider>
  );
};

export const FormDropdownTrigger: BTypes.FC = ({ children, ...props }) => {
  const { setPortalOpen, portalOpen, id } = useFormDropdown();

  return (
    <FormDropdownTriggerStyled
      {...props}
      aria-label={`${portalOpen ? 'Fechar' : 'Abrir'} formulário`}
      type="button"
      aria-controls={id}
      aria-expanded={portalOpen}
      onClick={(ev) => {
        setPortalOpen((prev) => !prev);
        props.onClick && props.onClick(ev);
      }}
    >
      {children}
    </FormDropdownTriggerStyled>
  );
};
export const FormDropdownArrow: BTypes.FC<{}, {}, false> = () => {
  return (
    <span className="arrow">
      <Arrow />
    </span>
  );
};

export const FormDropdownPortal: BTypes.FC = ({ children, ...props }) => {
  const { portalOpen, id } = useFormDropdown();
  return (
    <FormDropdownPortalStyled
      {...props}
      id={id}
      className={`${(props.className && `${props.className} `) || ''}${
        portalOpen ? 'hbv-fd-open' : ''
      }`}
    >
      <div>{children}</div>
    </FormDropdownPortalStyled>
  );
};

export const FormDropdown = {
  Root: FormDropdownRoot,
  Trigger: FormDropdownTrigger,
  Arrow: FormDropdownArrow,
  Portal: FormDropdownPortal,
};
