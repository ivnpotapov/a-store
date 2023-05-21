import { Circle } from '@alfalab/core-components/icon-view/circle';
import { Link } from '@alfalab/core-components/link';

import { useAppSelector } from 'store';
import { invertedColorSelector, mainColorSelector } from 'store/burger';

type Props = {
  href: string;
  dataTestId?: string;
  IconComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  mainBgColor?: string;
};

export const Icon = ({ href, IconComponent, dataTestId, mainBgColor }: Props) => {
  const fillColor = useAppSelector(invertedColorSelector);
  const bgColor = useAppSelector(mainColorSelector);

  const backgroundColor = mainBgColor ? mainBgColor : bgColor;

  return (
    <Link href={href} underline={false} data-test-id={dataTestId}>
      <Circle backgroundColor={backgroundColor} size={40}>
        <IconComponent fill={fillColor} />
      </Circle>
    </Link>
  );
};
