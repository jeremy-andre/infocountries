import { type AppType } from "next/app";

import { api } from "~/utils/api";
import { ThemeProvider } from "next-themes";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "~/redux/store";
import { NextUIProvider } from "@nextui-org/react";

import "~/styles/globals.css";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <ThemeProvider defaultTheme="system" attribute="class">
      <NextUIProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Component {...pageProps} />
          </PersistGate>
        </Provider>
      </NextUIProvider>
    </ThemeProvider>
  );
};

export default api.withTRPC(MyApp);
