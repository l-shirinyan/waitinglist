import { ReactNode } from "react";
import { BottomSheet } from "react-spring-bottom-sheet";
import "react-spring-bottom-sheet/dist/style.css";

type TBottomSheetProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  children: ReactNode;
  className: string;
};

const BottomSheetComponent = ({
  open,
  setOpen,
  children,
  className,
}: TBottomSheetProps) => {
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <BottomSheet
      open={open}
      onDismiss={handleClose}
      onSpringCancel={handleClose}
      className={className}
    >
      {children}
    </BottomSheet>
  );
};

export { BottomSheetComponent };
