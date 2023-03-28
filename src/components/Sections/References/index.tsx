import Image from 'next/image';

import { Button } from 'components/Button';
import { BoxDialog } from 'components/BoxDialog';
import { Play } from 'assets/svgs/icons/Play';

import { references } from 'utils/references';
import { purifyText } from 'services/purifyText';

import { TitleStyled } from 'styles/components/Headings';
import { ReferencesStyled } from './styled';

export const References: BTypes.FC = ({ ...props }) => (
  <ReferencesStyled {...props} className="mx-w" id="references">
    <TitleStyled>PROJETO ASSINADO POR GRANDES REFERÊNCIAS</TitleStyled>

    <BoxDialog>
      <ul>
        {references.map((reference) => (
          <li key={reference.name}>
            <div>
              <Image src={reference.image} alt={`Foto de ${reference.name}`} />
              <div>
                <h2>
                  <strong>{reference.name}</strong>
                </h2>
                <span
                  dangerouslySetInnerHTML={{
                    __html: purifyText(reference.role),
                  }}
                />
              </div>
              <p>{reference.message}</p>
            </div>
            <Button asChild data-fancybox="video" data-src={reference.videoUrl}>
              <button>
                <Play aria-hidden fill="rgb(var(--color-background))" />
                Clique para assistir
              </button>
            </Button>
          </li>
        ))}
      </ul>
    </BoxDialog>
  </ReferencesStyled>
);
