import Image from 'next/image';

import { SubTitleStyled, TitleStyled } from 'styles/components/Headings';
import { LocaleStyled } from './styled';

import Photo1Image from '../../../../public/imgs/photo-1.png';
import Leaf2Image from '../../../../public/imgs/leaf-2.png';

export const Locale: BTypes.FC = ({ ...props }) => (
  <LocaleStyled {...props} id="locale">
    <Image
      src={Photo1Image}
      alt="Imagem ilustrativa - mapa da localização dos prédios Haia Boa Vista, marcado com setas com pontos de referência"
      style={{ objectFit: 'cover' }}
    />
    <div className="info">
      <TitleStyled>Alto da Boa Vista</TitleStyled>
      <SubTitleStyled>
        Um novo marco para você viver próximo de tudo o que precisa, em um
        terreno de mais de 10.000m².
      </SubTitleStyled>
      <hr style={{ backgroundColor: 'rgb(var(--color-background))' }} />
      <p>
        O bairro que une as maiores e mais importantes marcas dos universos da
        gastronomia, mercados, lojas, farmácias e praticidades.
        <br />
        <br />
        Elegância, sofisticação e infraestrutura para estar conectado com o
        melhor que a cidade oferece.
      </p>
    </div>
    <div className="leaf">
      <Image src={Leaf2Image} alt="" aria-hidden className="leaf" />
    </div>
  </LocaleStyled>
);
