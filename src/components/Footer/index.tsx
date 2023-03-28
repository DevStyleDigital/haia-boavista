import { useLayout } from 'context/Layout';

import { Link } from 'components/Link';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Checkbox } from 'components/Input/Checkbox';
import { FormDropdown } from 'components/FormDropdown';

import { CoreAg } from 'assets/svgs/CoreAg';
import { Message } from 'assets/svgs/icons/Message';
import { ConstructorLogo } from 'assets/svgs/ConstructorLogo';
import { DevelopersLogo } from 'assets/svgs/DevelopersLogo';
import { FinancierLogo } from 'assets/svgs/FinancierLogo';

import { http } from 'services/http';

import { FooterStyled } from './styles';
import { Caption } from 'components/Caption';

const FooterRoot: BTypes.FC<{}, HTMLElement> = ({ ...props }) => {
  const { clientHeight } = useLayout();

  return (
    <FooterStyled {...props}>
      <div className="caption" id="caption">
        <FormDropdown.Root id="caption">
          <FormDropdown.Trigger
            onClick={(ev) => {
              const footerOffsetTop = (ev.target as HTMLButtonElement)
                .parentElement!.parentElement!.parentElement!.offsetTop;
              const formDropdownHeightWithErrorMargin = 400 - 330;

              window.scrollTo({
                top:
                  footerOffsetTop -
                  clientHeight +
                  formDropdownHeightWithErrorMargin,
                behavior: 'smooth',
              });
            }}
          >
            <div style={{ display: 'flex', gap: '0.5rem' }}>
              <Message fill="rgb(var(--color-primary))" />
              <span
                style={{
                  fontSize: 'var(--font-size-lg)',
                  fontFamily: 'var(--font-secondary)',
                  lineHeight: '1rem',
                }}
              >
                Fale com um especialista
              </span>
            </div>
            <FormDropdown.Arrow />
          </FormDropdown.Trigger>
          <FormDropdown.Portal
            className="form-caption"
            onSubmit={(ev) => Caption.handleSubmit(ev as any)}
          >
            <Caption.Inputs checkboxId="form-dropdown" />
          </FormDropdown.Portal>
        </FormDropdown.Root>
      </div>
      <div className="mx-w">
        <div>
          <span>construção</span>
          <ConstructorLogo />
        </div>
        <div>
          <span>realização</span>
          <DevelopersLogo />
        </div>
        <div>
          <span>financiamento</span>
          <FinancierLogo />
        </div>
      </div>
      <div className="copy">
        <span className="legend">
          As imagens são meramente ilustrativas e o projeto será entregue
          conforme Memorial Descritivo. Memorial de Incorporação registrado no
          1º Oficial de Registro de Imóveis de Sorocaba sob R.3/195.424
        </span>
        <span>
          <CoreAg />
        </span>
      </div>
    </FooterStyled>
  );
};

export const Footer = {
  Root: FooterRoot,
};
