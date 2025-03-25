"use client";
import React, { createContext, useState, useContext, ReactNode } from 'react';
import HubspotFormModal from '../components/HubspotFormModal';

interface FormModalContextProps {
  openFormModal: () => void;
  closeFormModal: () => void;
}

const FormModalContext = createContext<FormModalContextProps | undefined>(undefined);

export function useFormModal() {
  const context = useContext(FormModalContext);
  if (!context) {
    throw new Error('useFormModal must be used within a FormModalProvider');
  }
  return context;
}

interface FormModalProviderProps {
  children: ReactNode;
}

export function FormModalProvider({ children }: FormModalProviderProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openFormModal = () => setIsModalOpen(true);
  const closeFormModal = () => setIsModalOpen(false);

  return (
    <FormModalContext.Provider value={{ openFormModal, closeFormModal }}>
      {children}
      <HubspotFormModal isOpen={isModalOpen} onClose={closeFormModal} />
    </FormModalContext.Provider>
  );
}