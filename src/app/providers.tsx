"use client";

import Navbar from "@/components/Navbar";
import StoreProvider from "@/state/redux";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Navbar />
      {children}
    </StoreProvider>
  );
}

export default Providers;   