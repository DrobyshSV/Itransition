import React, {memo, useCallback, useState} from 'react';
import {Button} from 'react-bootstrap';

interface NavbarProps {
  className?: string;
}

export const Navbar = memo(({className}: NavbarProps) => {
  const [isAuthModal, setIsAuthModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsAuthModal(false);
  }, []);
  const onOpenModal = useCallback(() => {
    setIsAuthModal(true);
  }, []);


  return (
    <header

    >
      <Button
        variant='clear'
        onClick={onOpenModal}
      >
        Sign in </Button>

    </header>
  );
});
