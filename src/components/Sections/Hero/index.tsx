import Image from 'next/image';

import { Logo } from 'assets/svgs/Logo';
import { DevelopersLogo } from 'assets/svgs/DevelopersLogo';

import { SubTitleStyled } from 'styles/components/Headings';
import { HeroStyled } from './styled';

import BannerImage from '../../../../public/imgs/banner.png';
import MobileBannerImage from '../../../../public/imgs/mobile-banner.png';

export const Hero: BTypes.FC = ({ ...props }) => {
  return (
    <HeroStyled {...props} className="mx-w" id="hero">
      <div className="logo">
        <Logo />
      </div>

      <div className="info">
        <SubTitleStyled>
          <strong>Casas suspensas </strong>
          que ligam a vida urbana com a natureza
        </SubTitleStyled>
        <DevelopersLogo />
      </div>

      <div className="img-bg">
        <Image
          src={BannerImage}
          alt="Banner ilustrativo - 2 prédios Haia Boa Vista"
          blurDataURL="/imgs/banner.png"
          placeholder="blur"
          className="banner"
          priority
        />
        <Image
          src={MobileBannerImage}
          alt="Banner ilustrativo - 2 prédios Haia Boa Vista"
          blurDataURL="/imgs/mobile-banner.png"
          placeholder="blur"
          className="mobile-banner"
          priority
        />
      </div>
    </HeroStyled>
  );
};
