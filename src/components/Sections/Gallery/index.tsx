import Image from 'next/image';

import { Carousel } from 'components/Carousel';
import { BoxDialog } from 'components/BoxDialog';

import { gallery } from 'utils/gallery';

import { TitleStyled } from 'styles/components/Headings';
import { GalleryStyled } from './styled';
import { Button } from 'components/Button';

export const Gallery: BTypes.FC = ({ ...props }) => (
  <GalleryStyled {...props} id="gallery">
    <div className="mx-w">
      <TitleStyled>ONDE VIVER É MAIS QUE EXISTIR</TitleStyled>
      <span>Imagens meramente ilustrativas</span>
    </div>
    <BoxDialog>
      <Carousel.Root id="gallery">
        <Carousel.Arrows id="gallery" />
        <Carousel.Carousel centeredSlides>
          {gallery.map((image) => (
            <Carousel.Item key={image.id}>
              <div className="image">
                <div className="legend">
                  <span>{image.label}</span>
                </div>
                <Image
                  src={image.image}
                  data-fancybox="gallery"
                  data-src={`/imgs/gallery/gallery-${image.id}.webp`}
                  data-caption={image.label}
                  alt={image.label}
                />
              </div>
            </Carousel.Item>
          ))}
        </Carousel.Carousel>
        <Carousel.Thumbs
          slidesPerView={2}
          breakpoints={{
            589: {
              slidesPerView: 4,
              spaceBetween: 20,
            },
            767: {
              slidesPerView: 6,
              spaceBetween: 20,
            },
            1023: {
              slidesPerView: 8,
              spaceBetween: 20,
            },
            1200: {
              slidesPerView: 9,
              spaceBetween: 20,
            },
          }}
        >
          {gallery.map((image) => (
            <Carousel.Item key={image.id}>
              <Image
                src={image.image}
                className="image-thumb"
                alt={image.label}
                key={image.id}
              />
            </Carousel.Item>
          ))}
        </Carousel.Thumbs>
      </Carousel.Root>
    </BoxDialog>
    <div>
      <Button href="#caption" target="_blank">
        Saiba mais
      </Button>
    </div>
  </GalleryStyled>
);
