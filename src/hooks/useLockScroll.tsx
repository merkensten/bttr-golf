import * as React from 'react';

export function useLockScroll() {
  const lockScroll = React.useCallback(() => {
    document.body.style.overflow = 'hidden';
  }, []);

  const unlockScroll = React.useCallback(() => {
    document.body.style.overflow = '';
  }, []);

  return { lockScroll, unlockScroll };
}
