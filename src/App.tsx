import * as React from "react";
import "./styles.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import TableFilter from "./components/certificatesGrid/TableFilter";
import FavoriteCertificates from "./components/certificatesGrid/FavoriteCertificates";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Markdown from 'react-markdown'
import {  Box, Container } from "@mui/material";
import Toaster from "./components/Toaster";
import NavigationHeader from "./components/NavigationHeader";
import { Provider } from 'react-redux';
import store from './store/globalStore';
const queryClient = new QueryClient();

export default function App() {
  const [readmeContent, setReadmeContent] = React.useState<string>("");
  React.useEffect(() => {
    fetch("https://raw.githubusercontent.com/Silverium/mui-grid-with-favs/master/README.md")
      .then(res => res.text())
      .then(setReadmeContent)
      .catch(console.error);
  }, [])

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <Box className="App">
            <NavigationHeader />

            <Routes>
              <Route path="/" Component={() => {
                return(
                  <Container maxWidth="md">
                    <Markdown>{readmeContent}</Markdown>
                  </Container>
                )
              }} />
              <Route path="/certificates" Component={TableFilter} />
              <Route path="/favorites" Component={FavoriteCertificates} />
            </Routes>
              <Toaster />
          </Box>
        </Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}
