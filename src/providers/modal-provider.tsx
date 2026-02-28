"use client";

import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";

// eslint-disable-next-line
export type ModalDataType = {};

type ModalContextType = {
  data: ModalDataType;
  isOpen: boolean;
  setOpen: (modal: ReactNode, fetchData?: () => Promise<any>) => void;
  setClose: () => void;
};

const initial_data: ModalContextType = {
  data: {},
  isOpen: false,
  setOpen: (modal: ReactNode, fetchData?: () => Promise<any>) => {},
  setClose: () => {},
};

export const ModalContext = createContext<ModalContextType>(initial_data);

export default function ModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({});
  const [showingModal, setShowingmodal] = useState<ReactNode>(null);
  const [isMounted, setIsMounted] = useState(false);

  async function setOpen(modal: ReactNode, fetchData?: () => Promise<any>) {
    if (modal) {
      if (fetchData) {
        setData({ ...data, ...(await fetchData()) });
      }
      setShowingmodal(modal);
      setIsOpen(true);
    }
  }

  function setClose() {
    setIsOpen(false);
    setData({});
  }

  useEffect(() => {
    // eslint-disable-next-line
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <ModalContext.Provider value={{ data, isOpen, setOpen, setClose }}>
      {children}
      {showingModal}
    </ModalContext.Provider>
  );
}

export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal must be used within a modal provider.");
  }
  return context;
};
