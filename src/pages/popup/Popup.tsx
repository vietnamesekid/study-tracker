import { RouterProvider } from "react-router";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import router from "@pages/popup/router";

import AuthProvider from "@providers/auth-provider";
import AppProvider from "@providers/app-provider";

const queryClient = new QueryClient();

export default function PopupIndex() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AppProvider>
          <RouterProvider router={router} />
        </AppProvider>
      </AuthProvider>
    </QueryClientProvider>
  );
}
