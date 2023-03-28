import { Arrow } from 'assets/svgs/icons/Arrow';
import { WhatsApp } from 'assets/svgs/icons/WhatsApp';
import { Link } from 'components/Link';
import { useLayout } from 'context/Layout';
import { useEffect, useState } from 'react';

import { FixedFooterRootStyled } from './styled';

export const FixedFooterRoot: BTypes.FC = () => {
  const { clientWidth } = useLayout();
  const [portalOpen, setPortalOpen] = useState(false);
  const id = 'hbv-ff';

  useEffect(() => {
    document.addEventListener('click', (ev) => {
      if ((ev.target as HTMLElement).id !== 'hbv-ff-t') setPortalOpen(false);
    });
    return () => {
      document.addEventListener('click', () => false);
    };
  }, []);

  return (
    <FixedFooterRootStyled open={portalOpen}>
      <button
        className="btn-unstyled"
        aria-label={`${portalOpen ? 'Fechar' : 'Abrir'} canal de venda`}
        type="button"
        role={clientWidth <= 820 ? 'button' : 'contentinfo'}
        aria-controls={id}
        id="hbv-ff-t"
        aria-expanded={portalOpen}
        onClick={() => setPortalOpen((prev) => !prev)}
      >
        <span>
          <span>Canal</span> <span>de</span>
          <br />
          venda
        </span>
        <Arrow />
      </button>
      <hr />
      <div id={id} className={portalOpen ? 'hbv-ff-open hbv-ff' : 'hbv-ff'}>
        <Link
          href="https://api.whatsapp.com/send?phone=5515996411182&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Haia%20Boa%20Vista%20...%20"
          target="_blank"
        >
          <WhatsApp />
          <span>WhatsApp</span>
        </Link>
      </div>
    </FixedFooterRootStyled>
  );
};

export const FixedFooter = {
  Root: FixedFooterRoot,
};
