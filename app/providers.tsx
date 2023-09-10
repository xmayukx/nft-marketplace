"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";

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
          activeChain="ethereum"
          clientId="your-client-id"
        >
          {children}
        </ThirdwebProvider>
      </NextThemesProvider>
    </NextUIProvider>
  );
}
