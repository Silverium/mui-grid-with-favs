import { type FC, type PropsWithChildren, type ReactElement } from "react";
import { render, type RenderOptions, type RenderResult } from "@testing-library/react"
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Provider } from "react-redux";
import store from "../store/globalStore";
import "@testing-library/jest-dom";
const queryClient = new QueryClient();

const AllTheProviders: FC<PropsWithChildren> = ({ children }) => {
    return (
        <BrowserRouter>
            <QueryClientProvider client={queryClient}>
                <Provider store={store}>
                    {children}
                </Provider>
            </QueryClientProvider>
        </BrowserRouter>
    )
}

const customRender = (
    ui: ReactElement,
    options?: Omit<RenderOptions, "wrapper">,
): RenderResult => render(ui, { wrapper: AllTheProviders, ...options })

// eslint-disable-next-line import/export
export * from "@testing-library/react"
// eslint-disable-next-line import/export
export { customRender as render }