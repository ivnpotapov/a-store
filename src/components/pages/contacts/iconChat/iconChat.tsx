import { memo, useState } from 'react';

import { IconButton } from '@alfalab/core-components/icon-button';
import { Circle } from '@alfalab/core-components/icon-view/circle';
import { Popover } from '@alfalab/core-components/popover';
import { CommentWithTextLineMIcon } from '@alfalab/icons-glyph/CommentWithTextLineMIcon';
import { CrossMIcon } from '@alfalab/icons-glyph/CrossMIcon';

import { PopoverContent } from 'components/pages/contacts/popoverContent';

import cl from './iconChat.module.css';

type RefElement = HTMLElement | null;

export const IconChat = memo(() => {
  const [isOpen, setIsOpen] = useState(false);
  const [anchorElement, setAnchorElement] = useState<RefElement>(null);

  const onClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleAnchorElementRef = (node: RefElement) => {
    setAnchorElement(node);
  };

  const getCurrentIcon = () => {
    if (isOpen) {
      return <CrossMIcon />;
    }

    return <CommentWithTextLineMIcon fill='white' />;
  };

  const circleBackgroundColor = isOpen ? 'var(--color-light-bg-secondary)' : '#ef3124';
  const circleClasses = `${cl.circle} ${isOpen ? '' : cl.circlePulse}`;

  return (
    <>
      <Popover
        anchorElement={anchorElement}
        popperClassName={cl.popover}
        position='top'
        open={isOpen}
        offset={[0, 5]}
      >
        <PopoverContent />
      </Popover>

      <Circle
        className={circleClasses}
        size={64}
        backgroundColor={circleBackgroundColor}
        ref={handleAnchorElementRef}
      >
        <IconButton onClick={onClick} view='primary' size='s' icon={getCurrentIcon} />
      </Circle>
    </>
  );
});
