import { Logo } from 'assets/svgs/Logo';
import { Link } from 'components/Link';
import React, { useEffect, useRef, useState } from 'react';
import { Hamburger } from './Hamburger';
import { HeaderStyled } from './styles';

const links = [
  { name: 'Empreendimento', href: '#enterprise' },
  { name: 'Plantas', href: '#plans' },
  { name: 'Localização', href: '#locale' },
  { name: 'Áreas de Lazer', href: '#leisure' },
  { name: 'Galeria', href: '#gallery' },
  { name: 'Tour Virtual', href: '#virtual-tour' },
  { name: 'Visite Decorado', href: '#decorated-visit' },
];

const HeaderRoot: BTypes.FC<{}, HTMLElement> = ({ ...props }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const currentLink = useRef<string>('');

  useEffect(() => {
    if (modalOpen) {
      setTimeout(() => {
        const firstLink = linksRef.current[0];
        firstLink?.focus();
      }, 20);
    }
  }, [modalOpen]);

  return (
    <HeaderStyled {...props}>
      <div className="mx-w">
        <input
          type="checkbox"
          id="checkbox-nav"
          aria-hidden
          hidden
          tabIndex={-1}
        />

        <Hamburger.Root
          onChange={(open) => setModalOpen(open)}
          open={modalOpen}
          aria-label={`${modalOpen ? 'Abrir' : 'Fechar'} menu de navegação`}
          aria-haspopup="menu"
          id="hbv-h-mt"
          aria-expanded={modalOpen}
          aria-controls="hbv:h-m"
          aria-describedby="hbv:h-md"
        />

        <div className="logo">
          <Logo aria-label="Logo Empresa" />
        </div>
        <nav
          className={modalOpen ? 'modal' : ''}
          dir="ltr"
          role="menu"
          id="hbv:h-m"
          aria-orientation={modalOpen ? 'vertical' : 'horizontal'}
          aria-labelledby="hbv:h-mt"
          aria-live="polite"
        >
          <div id="hbv:h-md" hidden>
            Este é o menu de navegação principal da página. Utilize as setas do
            teclado para navegar entre os links e pressione Enter ou Espaço para
            abrir o link selecionado.
          </div>
          <ul>
            {links.map((link, index) => (
              <React.Fragment key={link.href}>
                <li className="nav-item">
                  <Link
                    href={link.href}
                    ref={(ref) => (linksRef.current[index] = ref)}
                    aria-current={
                      link.href === currentLink.current ? 'page' : undefined
                    }
                    onClick={() => {
                      currentLink.current = link.href;
                      setModalOpen(false);
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
                {index !== links.length - 1 && (
                  <span className="separator" aria-hidden />
                )}
              </React.Fragment>
            ))}
          </ul>
        </nav>
      </div>
    </HeaderStyled>
  );
};

export const Header = {
  Root: HeaderRoot,
};
