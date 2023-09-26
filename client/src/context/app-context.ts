import { createContext } from "react";

interface AppContextValue {
  currentPage?: string;
  userLogged?: boolean;
}

const AppContext = createContext<AppContextValue>({});
export default AppContext;
