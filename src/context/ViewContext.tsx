import { createContext, useContext, useState, ReactNode } from 'react';

type ViewContextType = {
  isTechnical: boolean;
  toggleView: () => void;
};

const ViewContext = createContext<ViewContextType | undefined>(undefined);

export function ViewProvider({ children }: { children: ReactNode }) {
  const [isTechnical, setIsTechnical] = useState(true);

  const toggleView = () => {
    setIsTechnical(prev => !prev);
  };

  return (
    <ViewContext.Provider value={{ isTechnical, toggleView }}>
      {children}
    </ViewContext.Provider>
  );
}

export function useView() {
  const context = useContext(ViewContext);
  if (context === undefined) {
    throw new Error('useView must be used within a ViewProvider');
  }
  return context;
} 