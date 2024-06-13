import { createContext, useContext } from 'react';

const DependenciesContext = createContext(null);

export const Provider = DependenciesContext.Provider;
export const Consumer = DependenciesContext.Consumer;

export function useDependencies() {
  const { getUsers } = useContext(DependenciesContext);

  return { getUsers };
}