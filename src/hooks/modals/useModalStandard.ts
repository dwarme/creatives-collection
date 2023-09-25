import { useImperativeHandle, useState } from "react";

interface HookeModalStandardProps {
  open?: boolean;
  onClose?: () => void;
  ref?: React.ForwardedRef<any>;
}

const useModalStandard = ({ open, onClose, ref }: HookeModalStandardProps) => {
  const [isOpen, setOpen] = useState<boolean>(open !== undefined);
  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    if (onClose) onClose();
  };

  useImperativeHandle(ref, () => ({
    open: handleOpen,
    close: handleClose,
  }));

  return { handleOpen, handleClose, isOpen };
};

export default useModalStandard;
