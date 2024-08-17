import { useCallback } from 'react';
import {
  useMotionValue,
  useTransform,
  animate,
  PanInfo,
  motion
} from 'framer-motion';

export const useBottomSheet = (initialHeight: number, onClose?: () => void) => {
  const initialYPosition = (100 - initialHeight) * 3;
  const y = useMotionValue(initialYPosition);
  const sheetHeight = useTransform(y, [0, 800], ['100%', `0%`]);

  const expand = useCallback(() => {
    animate(y, 0, { type: 'tween', duration: 0.5, ease: 'easeOut' });
  }, [y]);

  const collapse = useCallback(() => {
    animate(y, initialYPosition, {
      type: 'tween',
      duration: 0.5,
      ease: 'easeOut'
    });
  }, [y, initialYPosition]);

  const close = useCallback(() => {
    animate(y, 800, {
      type: 'tween',
      duration: 0.5,
      ease: 'easeIn'
    }).then(() => {
      if (onClose) {
        onClose();
      }
    });
  }, [onClose, y]);

  const onDragEnd = useCallback(
    (_: never, info: PanInfo) => {
      if (info.offset.y > 100) {
        close(); // 사용자가 아래로 드래그하면 Sheet가 닫히면서 화면에서 사라짐
      } else if (info.offset.y < -50) {
        expand(); // 위로 드래그하면 Sheet가 확장됨
      } else {
        collapse(); // 드래그가 적으면 원래 높이로 돌아감
      }
    },
    [close, expand, collapse]
  );

  const BottomSheet = ({ children }: { children?: React.ReactNode }) => {
    return (
      <motion.div
        style={{ y, height: sheetHeight }}
        drag='y'
        dragConstraints={{ top: 24, bottom: 0 }}
        onDragEnd={onDragEnd}
        className='fixed z-[5000] flex h-dvh max-w-[375px] flex-col items-center gap-2 rounded-t-lg bg-white'>
        {children}
      </motion.div>
    );
  };

  return {
    close,
    BottomSheet
  };
};
