import { useState } from "react";
import { PaymentPage } from "@/pages/payment";
import "@/shared/css/app.scss";

function App() {
  const [count, setCount] = useState(0);

  return <PaymentPage />;
}

export default App;
