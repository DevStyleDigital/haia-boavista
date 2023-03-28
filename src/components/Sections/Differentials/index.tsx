import { useLayout } from 'context/Layout';

import { purifyText } from 'services/purifyText';
import { differentials as defaultDifferentials } from 'utils/differentials';

import { Card } from 'components/Card';
import { Button, type ButtonProps } from 'components/Button';

import { TitleStyled } from 'styles/components/Headings';
import { DifferentialsStyled } from './styled';
import { Carousel } from 'components/Carousel';

export const Differentials: BTypes.FC<{
  isSlide?: boolean;
  button?: ButtonProps & { content: string };
  legend: string;
  differentials: typeof defaultDifferentials;
}> = ({
  differentials = defaultDifferentials,
  isSlide,
  legend,
  button,
  ...props
}) => {
  const { clientWidth } = useLayout();
  return (
    <DifferentialsStyled
      {...props}
      className={`mx-w${isSlide ? ' slide' : ''}`}
      id="differentials"
    >
      <TitleStyled>DIFERENCIAIS DO EMPREENDIMENTO</TitleStyled>

      {clientWidth > 665 && isSlide ? (
        <Carousel.Root id="differentials">
          <Carousel.Carousel
            slidesPerView={2.05}
            grid={{ fill: 'row', rows: 2 }}
            breakpoints={{
              949: { slidesPerView: 3.05 },
              1219: { slidesPerView: 4.05 },
            }}
          >
            {differentials.map((differential) => (
              <Carousel.Item key={differential.id}>
                <Card.Root>
                  <Card.Icon>
                    <differential.icon
                      style={{ width: '100%', height: '100%' }}
                    />
                  </Card.Icon>
                  <Card.Content
                    dangerouslySetInnerHTML={{
                      __html: purifyText(differential.label),
                    }}
                  />
                </Card.Root>
              </Carousel.Item>
            ))}
          </Carousel.Carousel>
          <Carousel.Arrows id="differentials" />
        </Carousel.Root>
      ) : (
        <ul>
          {differentials.map((differential) => (
            <li key={differential.id}>
              <Card.Root className={clientWidth <= 665 ? 'line' : ''}>
                <Card.Icon>
                  <differential.icon
                    style={{ width: '100%', height: '100%' }}
                  />
                </Card.Icon>
                <Card.Content
                  dangerouslySetInnerHTML={{
                    __html: purifyText(
                      clientWidth <= 665
                        ? differential.label.replaceAll('<br />', ' ')
                        : differential.label,
                    ),
                  }}
                />
              </Card.Root>
            </li>
          ))}
        </ul>
      )}

      <span className="legend">{legend}</span>

      {button && <Button {...button}>{button.content}</Button>}
    </DifferentialsStyled>
  );
};
