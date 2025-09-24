import Modal from "react-modal";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
  isOpen?: boolean;
  onRequestClose?: () => void;
  style?: any;
  contentLabel?: string;
  ariaHideApp?: boolean;
  [key: string]: any;
}

export default function TaxoniumModal({
  children,
  parentSelector = () =>
    document.getElementById("taxonium-root") || document.body,
  ...props
}: Props) {
  return (
    <Modal parentSelector={parentSelector} {...props}>
      {children}
    </Modal>
  );
}
