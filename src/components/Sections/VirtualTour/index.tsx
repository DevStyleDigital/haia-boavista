import Image from 'next/image';

import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import { Button } from 'components/Button';

import { TitleStyled } from 'styles/components/Headings';
import { VirtualTourStyled } from './styled';

import LeafImage from '../../../../public/imgs/leaf.png';

const getITeleportURL = (size: string) =>
  `https://portal.iteleport.com.br/tour3d/karvas-grm-${size}-m2/fullscreen/`;

export const VirtualTour: BTypes.FC = ({ ...props }) => {
  const { query } = useRouter();
  const [client, setClient] = useState(false);
  const [iTeleportURL, setITeleportURL] = useState(getITeleportURL('116'));

  useEffect(() => {
    const size = (query['plan-size'] as string) || '116';
    setITeleportURL(getITeleportURL(size));
  }, [query]);
  useEffect(() => {
    setClient(true);
  }, []);

  return (
    <VirtualTourStyled {...props} id="virtual-tour">
      <div>
        <TitleStyled>Visite o apartamento sem sair de casa</TitleStyled>
        <p>Selecione a planta desejada e conheça o apartamento</p>
      </div>
      <div className="flex">
        <Button
          href="?plan-size=116#virtual-tour"
          variant="invert"
          tabIndex={-1}
        >
          <span>
            Planta 116m<sup>2</sup>
          </span>
        </Button>
        <Button
          href="?plan-size=151#virtual-tour"
          variant="invert"
          tabIndex={-1}
        >
          <span>
            Planta 151m<sup>2</sup>
          </span>
        </Button>
      </div>
      <div className="tour">
        <Image src={LeafImage} alt="" aria-hidden className="leaf" />
        <iframe
          src={iTeleportURL}
          tabIndex={-1}
          title="Visite o decorado por meio do Tour Virtual 360º"
          loading="lazy"
        >
          {client && (
            <span className="legend">
              Seu navegador não suporta o &quot;Tour Virtual 360º&quot;
            </span>
          )}
        </iframe>
      </div>
      <Image src={LeafImage} alt="" aria-hidden className="leaf leaf-flip" />
    </VirtualTourStyled>
  );
};
