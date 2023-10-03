"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "react-hot-toast";
import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <ThirdwebProvider
          supportedWallets={[metamaskWallet()]}
          activeChain="fantom-testnet"
          clientId={process.env.THIRDWEB_CLIENT_ID}
        >
          <ToasterContext />
          {children}
        </ThirdwebProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}

const ToasterContext = () => {
  return (
    <div>
      <Toaster />
    </div>
  );
};
