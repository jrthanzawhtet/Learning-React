import { useContext, useState, createContext, ReactNode } from "react";

type SideBarState = {
  open: boolean;
  setOpen: (open: boolean) => void;
};

const SideBarStateContext = createContext<SideBarState | undefined>(undefined);

function SideBarStateProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState<boolean>(false);

  return (
    <SideBarStateContext.Provider value={{ open, setOpen }}>
      {children}
    </SideBarStateContext.Provider>
  );
}

function useSideBarStateContext(){
    const context = useContext(SideBarStateContext)

    if(context === undefined){
        throw Error('Invalid context useage of Side Bar State')
    }
    return context;
}

function useSideBarState(){
    return useSideBarStateContext().open
}

function useSideBarStateSetter(){
    return useSideBarStateContext().setOpen
}
export { SideBarStateProvider, SideBarStateContext };
