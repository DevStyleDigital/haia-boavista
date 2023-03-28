import { Caption } from 'components/Caption';
import { About } from 'components/Sections/About';
import { DecoratedVisit } from 'components/Sections/DecoratedVisit';
import { Differentials } from 'components/Sections/Differentials';
import { Gallery } from 'components/Sections/Gallery';
import { Hero } from 'components/Sections/Hero';
import { Leisure } from 'components/Sections/Leisure';
import { Locale } from 'components/Sections/Locale';
import { Plans } from 'components/Sections/Plans';
import { References } from 'components/Sections/References';
import { VirtualTour } from 'components/Sections/VirtualTour';
import { TitleStyled } from 'styles/components/Headings';

import { differentials } from 'utils/differentials';
import { differentials2 } from 'utils/differentials2';

const Home: BTypes.NPage = () => {
  return (
    <>
      <Hero />
      <Plans />
      <Differentials
        isSlide
        differentials={differentials}
        legend="* Equipamentos não inclusos ** Coifa não será entregue *** Infraestrutura completa na suíte master e living. Nos demais dormitórios e varanda, serão entregues apenas os pontos de drenos e perfurações de vigas. **** Somente na suíte 2 ***** Somente nas unidades da Torre Tulipas"
        button={{
          href: '#gallery',
          content: 'Ver Galeria de fotos',
        }}
      />
      <Locale />
      <About />
      <References />
      <Differentials
        differentials={differentials2}
        legend="* Gerador de energia para elevadores, portaria, iluminação parcial do térreo e garagens, bombas e portões ** Um ponto por apartamento. Cabeamento e equipamento não inclusos. *** Equipamentos de CFTV somente na área perimetral e portaria. **** Conforme memorial descritivo"
      />
      <Leisure />
      <Gallery />
      <VirtualTour />
      <DecoratedVisit />
      <span id="caption" className="scroll-helper" />
      <section className="mx-w caption">
        <TitleStyled>Fale com nossos especialistas</TitleStyled>
        <Caption.Root>
          <Caption.Inputs checkboxId="" />
        </Caption.Root>
      </section>
    </>
  );
};

export default Home;
