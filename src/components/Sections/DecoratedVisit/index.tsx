import Image from 'next/image';

import { useLayout } from 'context/Layout';

import { Card } from 'components/Card';
import { Button } from 'components/Button';
import { Pin } from 'assets/svgs/icons/Pin';

import { TitleStyled } from 'styles/components/Headings';
import { DecoratedVisitStyled } from './styled';

import Photo4Image from '../../../../public/imgs/photo-4.png';

export const DecoratedVisit: BTypes.FC = ({ ...props }) => {
  const { clientWidth } = useLayout();
  return (
    <DecoratedVisitStyled {...props} className="mx-w" id="decorated-visit">
      <Image src={Photo4Image} alt="Faixada prédio - Karvas & GRM" />
      <div>
        <div>
          <TitleStyled>VISITE DECORADO</TitleStyled>
          <p>e fale com nossos especialistas</p>
        </div>
        <hr />
        <div>
          <Card.Root
            className={clientWidth <= 665 ? '' : 'line'}
            style={{ boxShadow: 'none' }}
          >
            <Card.Icon>
              <Pin />
            </Card.Icon>
            <Card.Content>
              Av. Engenheiro Carlos Reinaldo Mendes, 3340
              <br /> Alto da Boa Vista • Sorocaba / SP
            </Card.Content>
          </Card.Root>
          <Button href="https://goo.gl/maps/EcxELdNYnf3mLUmUA" target="_blank">
            ver mapa
          </Button>
        </div>
      </div>
    </DecoratedVisitStyled>
  );
};
