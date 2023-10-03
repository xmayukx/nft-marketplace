"use client";
import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "react-hot-toast";
import {
  ThirdwebProvider,
  coinbaseWallet,
  metamaskWallet,
  walletConnect,
} from "@thirdweb-dev/react";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children, themeProps }: ProvidersProps) {
  // function embeddedWallet(): import("@thirdweb-dev/react").WalletConfig<any> {
  //   throw new Error("Function not implemented.");
  // }

  // function phantomWallet(): import("@thirdweb-dev/react").WalletConfig<any> {
  //   throw new Error("Function not implemented.");
  // }
  return (
    <NextUIProvider>
      <NextThemesProvider {...themeProps}>
        <ThirdwebProvider
          supportedWallets={[
            metamaskWallet(),
            coinbaseWallet(),
            walletConnect(),
          ]}
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
