import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";

import ErrorResetBoundary from "./components/ErrorResetBoundary";
import router from "./router";
import queryClient from "./queries";

import "./styles/reset.css";
import "./styles/global.css";

async function enableMocking() {
  if (import.meta.env.VITE_APP_ENV !== "development") {
    return;
  }

  const { worker } = await import("./mocks/browser");

  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

enableMocking().then(() => {
  createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <ErrorResetBoundary>
          <Suspense fallback={"loading..."}>
            <RouterProvider router={createBrowserRouter(router)} />
          </Suspense>
        </ErrorResetBoundary>
      </QueryClientProvider>
    </StrictMode>
  );
});
