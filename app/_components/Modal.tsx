
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { createPortal } from "react-dom";

type ContextType = {
  isOpen: string;
  setIsOpen: Dispatch<SetStateAction<string>>;
};

type PropsType = {
  children: React.ReactNode;
  modalName?: string;
  openModal?: string;
};

export const ModalContext = createContext<ContextType | null>(null);

export default function Modal({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState("");

  return (
    <ModalContext.Provider value={{ isOpen, setIsOpen }}>
      {children}
    </ModalContext.Provider>
  );
}

function Window({ children, modalName }: PropsType) {
  const context = useContext(ModalContext);
  if (context === null) return null;
  const { isOpen } = context;
  if (modalName !== isOpen) return null;

  return createPortal(
    <div className="fixed inset-0 flex h-full w-full items-center justify-center overflow-y-auto bg-gray-600 bg-opacity-50">
      {children}
    </div>,
    document.body,
  );
}

function OpenButton({ children, openModal }: PropsType) {
  const context = useContext(ModalContext);
  if (context === null) return null;
  const { setIsOpen } = context;
  if (!openModal) return null;
  return (
    <button
      onClick={() => setIsOpen(openModal)}
      className="bg-darkGray px-2 py-1 text-lg font-semibold uppercase tracking-wider text-textLight transition-all hover:scale-105 hover:bg-accentColor hover:text-darkGray"
    >
      {children}
    </button>
  );
}

Modal.Window = Window;
Modal.OpenButton = OpenButton;
