import { createContext, useContext } from 'react';

export const DependenciesContext = createContext(null);

export const Provider = DependenciesContext.Provider;

export function useDependencies() {
  const { getUsers } = useContext(DependenciesContext);

  return { getUsers };
}