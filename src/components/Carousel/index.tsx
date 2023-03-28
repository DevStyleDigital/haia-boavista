import type { Swiper as SwiperType } from 'swiper/types';
import { Swiper, SwiperSlide, type SwiperProps } from 'swiper/react';
import { Navigation, Thumbs, Grid, Keyboard } from 'swiper';

import { createContext, useContext, useMemo, useState } from 'react';
import { CarouselArrowStyled, CarouselRootStyled } from './styled';

interface CarouselContextProps {
  id: string;
  thumbs: SwiperType | null;
  setThumbs: (value: SwiperType) => void;
}

const CarouselContext = createContext<CarouselContextProps>(
  {} as CarouselContextProps,
);
const useCarousel = () => useContext(CarouselContext);

type CarouselRootProps = BTypes.FC<{ id: string }, {}, false>;

const CarouselRoot: CarouselRootProps = ({ children, id }) => {
  const [thumbs, setThumbs] = useState<CarouselContextProps['thumbs']>(null);

  const CarouselContextValues: CarouselContextProps = useMemo(
    () => ({ id, thumbs, setThumbs }),
    [thumbs, id],
  );

  return (
    <CarouselContext.Provider value={CarouselContextValues}>
      <CarouselRootStyled className="hbv-c-container">
        {children}
      </CarouselRootStyled>
    </CarouselContext.Provider>
  );
};

const CarouselThumbs: BTypes.FC<SwiperProps, {}, false> = ({
  children,
  ...props
}) => {
  const { setThumbs } = useCarousel();

  return (
    <Swiper
      onSwiper={setThumbs}
      watchSlidesProgress={true}
      modules={[Navigation, Thumbs, Keyboard]}
      keyboard
      direction="horizontal"
      grabCursor
      {...props}
      id="hbv-c-wrapper-thumbs"
      className="hbv-c-wrapper-thumbs"
    >
      {children}
    </Swiper>
  );
};

const CarouselCarousel: BTypes.FC<SwiperProps, {}, false> = ({
  children,
  ...props
}) => {
  const { id, thumbs } = useCarousel();

  return (
    <Swiper
      slidesPerView="auto"
      spaceBetween={30}
      modules={[Navigation, Thumbs, Keyboard, Grid]}
      keyboard
      direction="horizontal"
      thumbs={{
        swiper: thumbs && !thumbs.destroyed ? thumbs : null,
      }} // If changes api of carousel, the active class for thumbs needs be updated, for now the current class is "swiper-slide-thumb-active"
      grabCursor
      navigation={{
        disabledClass: 'hbv-c-arrow-disable',
        nextEl: `[id="hbv-c:${id || ''}-button-next"]`,
        prevEl: `[id="hbv-c:${id || ''}-button-prev"]`,
      }}
      {...props}
      id="hbv-c-wrapper"
      className="hbv-c-wrapper"
    >
      {children}
    </Swiper>
  );
};

const CarouselArrows: BTypes.FC<{ id: string }, {}, false> = ({ ...props }) => {
  return (
    <div className="hbv-c-arrows">
      <CarouselArrowStyled
        className="hbv-c-arrow-prev"
        aria-label="Previous"
        aria-controls="hbv-c-wrapper"
        role="button"
        tabIndex={0}
        {...props}
        id={`hbv-c:${props.id}-button-prev`}
      >
        <span aria-hidden className="left" />
      </CarouselArrowStyled>
      <CarouselArrowStyled
        className="hbv-c-arrow-next"
        aria-label="Next"
        aria-controls="hbv-c-wrapper"
        role="button"
        tabIndex={0}
        {...props}
        id={`hbv-c:${props.id}-button-next`}
      >
        <span aria-hidden className="right" />
      </CarouselArrowStyled>
    </div>
  );
};

export const Carousel = {
  Root: CarouselRoot,
  Item: SwiperSlide,
  Arrows: CarouselArrows,
  Thumbs: CarouselThumbs,
  Carousel: CarouselCarousel,
};
