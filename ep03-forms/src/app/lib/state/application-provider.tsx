'use client'

import { ReactNode } from "react";
import { SideBarStateProvider } from "./sidebar-state";

export default function ApplicationProvider({ children }: { children: ReactNode }) {
  return (
    <SideBarStateProvider>
      {children}
    </SideBarStateProvider>
  );
}
