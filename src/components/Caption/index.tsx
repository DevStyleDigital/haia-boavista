import { Link } from 'components/Link';
import { Input } from 'components/Input';
import { Button } from 'components/Button';
import { Checkbox } from 'components/Input/Checkbox';

import { http } from 'services/http';
import { CaptionInputsStyled, CaptionRootStyled } from './styled';

async function CaptionHandleSubmit(ev: {
  preventDefault: () => void;
  target: {
    name: HTMLInputElement;
    phone: HTMLInputElement;
    email: HTMLInputElement;
  };
}) {
  ev.preventDefault();
  const formData = {
    nome: ev.target.name.value,
    email: ev.target.email.value,
    telefone: ev.target.phone.value.replaceAll('+55 ', ''),
    idempreendimento: 4,
    origem: 'SI',
    midia: 'Google LP',
    conversao: 'CoreAg',
  };

  await http
    .post('https://rve.cvcrm.com.br/api/cvio/lead', formData, {
      headers: { token: process.env.NEXT_PUBLIC_CV_TOKEN! },
    })
    .then(() => {
      alert(
        'Recebemos seu formulário.\n\n Entraremos em contato com você em breve',
      );

      // Clear form values
      ev.target.name.value = '';
      ev.target.email.value = '';
      ev.target.phone.value = '';
    })
    .catch((err) => {
      alert(
        'Ops... Houve um erro ao enviar seu formulário.\n\n Por favor tente novamente mais tarde.',
      );
      return '';
    });
}

const CaptionRoot: BTypes.FC<{}, {}, false> = ({ children }) => {
  return (
    <CaptionRootStyled onSubmit={(ev) => CaptionHandleSubmit(ev as any)}>
      {children}
    </CaptionRootStyled>
  );
};

const CaptionInputs: BTypes.FC<{ checkboxId: string }, {}, false, false> = ({
  checkboxId,
}) => {
  return (
    <CaptionInputsStyled>
      <Input.Root id="name">
        <Input.Label>NOME</Input.Label>
        <Input.Input required name="name" />
      </Input.Root>
      <Input.Root id="phone">
        <Input.Label>TELEFONE</Input.Label>
        <Input.InputMask required name="phone" mask="+55 (99) 99999-9999" />
      </Input.Root>
      <Input.Root id="email">
        <Input.Label>E-MAIL</Input.Label>
        <Input.Input required type="email" name="email" />
      </Input.Root>

      <Checkbox id={`policy-${checkboxId}`} required>
        Li e estou de acordo com a{' '}
        <Link href="#">Políticas de Privacidade</Link>
      </Checkbox>

      <div className="submit">
        <span className="legend">
          Pode preencher tranquilo.
          <br />
          Você não está assumindo compromisso nenhum preenchendo esse
          formulário.
        </span>
        <Button asChild>
          <button type="submit">Enviar</button>
        </Button>
      </div>
    </CaptionInputsStyled>
  );
};

export const Caption = {
  Root: CaptionRoot,
  Inputs: CaptionInputs,
  handleSubmit: CaptionHandleSubmit,
};
