export function useAuth() {
  return {
    user: null,
    login: (email: string, password: string) => {},
    logout: () => {},
  };
}
