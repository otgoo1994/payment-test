import { useState } from "react";
import { PaymentPage } from "@/pages/payment";
import { BrowserRouter } from "react-router-dom";
import Routes from "./routes/routes";
import { createTheme, MantineProvider } from "@mantine/core";
import { Notifications } from "@mantine/notifications";
import "@/shared/css/app.scss";
import "@mantine/core/styles.css";
import "@mantine/notifications/styles.css";

function App() {
  const [count, setCount] = useState(0);

  const theme = createTheme({
    /** Put your mantine theme override here */
  });

  return (
    <BrowserRouter>
      <MantineProvider theme={theme}>
        <Notifications />
        <Routes />
      </MantineProvider>
    </BrowserRouter>
  );
}

export default App;
