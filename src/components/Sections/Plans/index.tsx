import Image, { type StaticImageData } from 'next/image';
import { useState } from 'react';

import { plans } from 'utils/plans';

import { Card } from 'components/Card';
import { Carousel } from 'components/Carousel';

import { Plan116 } from 'assets/svgs/plans/Plan116';
import { Plan151 } from 'assets/svgs/plans/Plan151';
import { Plan } from 'assets/svgs/icons/Plan';

import { SubTitleStyled } from 'styles/components/Headings';
import { PlansStyled } from './styled';

import Plan116Image from '../../../../public/imgs/plans/plan-116.png';
import Plan151Image from '../../../../public/imgs/plans/plan-151.png';
import Plan116_2Image from '../../../../public/imgs/plans/plan-116-2.png';
import Plan151_2Image from '../../../../public/imgs/plans/plan-151-2.png';

const images: {
  id: keyof typeof plans;
  alt: string;
  image: StaticImageData;
  blurUrl: string;
}[] = [
  {
    id: 'plan116',
    alt: 'Imagem vetorizada - Planta 116 metros quadrados, 1',
    image: Plan116Image,
    blurUrl: '/imgs/plans/plan-116.png',
  },
  {
    id: 'plan116_2',
    alt: 'Imagem vetorizada - Planta 116 metros quadrados, 2',
    image: Plan116_2Image,
    blurUrl: '/imgs/plans/plan-151.png',
  },
  {
    id: 'plan151',
    alt: 'Imagem vetorizada - Planta 151 metros quadrados, 1',
    image: Plan151Image,
    blurUrl: '/imgs/plans/plan-116-2.png',
  },
  {
    id: 'plan151_2',
    alt: 'Imagem vetorizada - Planta 151 metros quadrados, 2',
    image: Plan151_2Image,
    blurUrl: '/imgs/plans/plan-151-2.png',
  },
];

export const Plans: BTypes.FC = ({ ...props }) => {
  const [currPlan, setCurrPlan] = useState<keyof typeof plans>('plan116');
  const CurrPlan = plans[currPlan];

  return (
    <PlansStyled {...props} className="mx-w" id="plans">
      <div className="info">
        <CurrPlan.PlanVetor />
        <SubTitleStyled style={{ textTransform: 'uppercase' }}>
          <span className="small">{CurrPlan.subtitle.small}</span>
          <br />
          <strong>{CurrPlan.subtitle.strong}</strong>
        </SubTitleStyled>
        <p className="small" style={{ textTransform: 'uppercase' }}>
          <strong>{CurrPlan.paragraph}</strong>
        </p>

        <Card.Root>
          <Card.Icon>
            <Plan style={{ fill: 'rgb(var(--color-background))' }} />
          </Card.Icon>
          <Card.Content>
            Conheça todas as opções de plantas em nosso stand
          </Card.Content>
        </Card.Root>
      </div>

      <Carousel.Root id="plans">
        <Carousel.Carousel
          spaceBetween={0}
          centeredSlides
          onActiveIndexChange={(carousel) => {
            const currentSlideId = carousel.slides[carousel.activeIndex].id;
            setCurrPlan(currentSlideId as keyof typeof plans);
          }}
        >
          {images.map((image) => (
            <Carousel.Item key={image.id} id={image.id}>
              <Image
                src={image.image}
                alt={image.alt}
                priority
                placeholder="blur"
                blurDataURL={image.blurUrl}
              />
            </Carousel.Item>
          ))}
          <Carousel.Arrows id="plans" />
        </Carousel.Carousel>
      </Carousel.Root>
    </PlansStyled>
  );
};
