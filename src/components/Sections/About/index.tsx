import Image from 'next/image';

import { Button } from 'components/Button';

import { SubTitleStyled, TitleStyled } from 'styles/components/Headings';
import { AboutStyled } from './styled';

import Photo2Image from '../../../../public/imgs/photo-2.png';

export const About: BTypes.FC = ({ ...props }) => (
  <AboutStyled {...props} className="mx-w" id="enterprise">
    <Image
      src={Photo2Image}
      alt="Imagem ilustrativa - Sala de estar"
      className="full-size"
    />
    <div>
      <div>
        <TitleStyled className="light">
          UM LUGAR ONDE
          <br />
          <strong>TUDO ACONTECE</strong>
        </TitleStyled>
        {/* <hr /> */}
      </div>
      <div>
        <SubTitleStyled>
          <strong>Aprecie esta obra de arte</strong>
        </SubTitleStyled>
        <p>
          Morar no Haia Boa Vista é viver repleto de possibilidades ao seu
          redor. Estar imerso no desenvolvimento da cidade, onde estão as
          principais conexões que são essenciais para se viver bem.
          <br />
          <br /> Escolha o bem-estar daqueles que você mais ama. Apaixone-se por
          esse empreendimento.
        </p>
        <Button href="#caption">FALE COM NOSSOS ESPECIALISTAS</Button>
      </div>
    </div>
  </AboutStyled>
);
