import cl from './colorsLabel.module.css';

type Props = {
  colors: string[];
};

export const ColorsLabel = ({ colors }: Props) => {
  return (
    <ul className={cl.colorWrap}>
      {colors.map((el) => (
        <li key={el} className={cl.colorItem} style={{ backgroundColor: el }}></li>
      ))}
    </ul>
  );
};
