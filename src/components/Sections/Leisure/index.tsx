import Image from 'next/image';
import { leisures } from 'utils/leisures';

import { Button } from 'components/Button';

import { SubTitleStyled, TitleStyled } from 'styles/components/Headings';
import { LeisureStyled } from './styled';

import LeafImage from '../../../../public/imgs/leaf.png';
import Leaf2Image from '../../../../public/imgs/leaf-2.png';
import Leaf3Image from '../../../../public/imgs/leaf-3.png';
import Photo3Image from '../../../../public/imgs/photo-3.png';

export const Leisure: BTypes.FC = ({ ...props }) => (
  <LeisureStyled {...props} id="leisure">
    <Image src={Leaf3Image} alt="" aria-hidden className="leaf leaf-1" />
    <Image src={Leaf2Image} alt="" aria-hidden className="leaf leaf-2" />
    <Image src={LeafImage} alt="" aria-hidden className="leaf leaf-3" />

    <div className="mx-w">
      <section>
        <div className="leisure-count">
          <div>
            <span className="absolute">
              <strong>+ de</strong>
            </span>
            <span className="title">
              <span className="big">
                <strong>30</strong>
              </span>
              <strong>
                Ambientes <br /> de Lazer
              </strong>
            </span>
          </div>
        </div>
        <SubTitleStyled>
          <strong>
            distribuídos ao longo dos mais de 7.000m² de área comum
          </strong>
        </SubTitleStyled>
        <Image
          src={Photo3Image}
          alt="Imagem ilustrativa - uma piscina e frente a uma area de lazer"
        />
        <div className="info">
          <SubTitleStyled>
            <strong>
              A MAIOR POOL HOUSE
              <br />
              DA CIDADE
            </strong>
          </SubTitleStyled>
          <p>
            O seu condomínio não permite o uso da piscina para seus convidados?
            <br />
            <br />
            No Haia Boa Vista, você tem um salão de festas com piscina privativa
            para amigos e convidados. Um espaço de 348m² com dois ambientes
            integrados para celebrar momentos inesquecíveis.
          </p>
          <Button href="#decorated-visit" variant="invert">
            Descubra Mais detalhes
          </Button>
        </div>
      </section>
      <section>
        <TitleStyled>
          <strong>Lazer Completo</strong>
        </TitleStyled>
        <ul>
          {leisures.map((leisure) => (
            <li key={leisure.id}>
              <leisure.icon aria-hidden />
              <span>{leisure.label}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  </LeisureStyled>
);
