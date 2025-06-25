"use client";

import Navbar from "@/components/Navbar";
import StoreProvider from "@/state/redux";
import { Authenticator } from "@aws-amplify/ui-react";
import Auth from "./(auth)/authProvider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <StoreProvider>
      <Authenticator.Provider>
        <Auth>
          <Navbar />
          {children}
        </Auth>
      </Authenticator.Provider>
    </StoreProvider>
  );
}

export default Providers;   