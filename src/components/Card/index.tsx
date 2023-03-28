import { CardRootStyled, CardContentStyled, CardIconStyled } from './styled';

const CardRoot: BTypes.FC = ({ children, ...props }) => {
  return (
    <CardRootStyled
      {...props}
      className={`${(props.className && `${props.className} `) || ''}card`}
    >
      {children}
    </CardRootStyled>
  );
};

const CardContent: BTypes.FC = ({ children, ...props }) => {
  return <CardContentStyled {...props}>{children}</CardContentStyled>;
};

export const Card = {
  Root: CardRoot,
  Content: CardContent,
  Icon: CardIconStyled,
};
