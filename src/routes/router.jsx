import { PaymentPage } from "@/pages/payment";
import { HomePage } from "@/pages/home";

export const routes = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
  {
    path: "/payment",
    element: <PaymentPage />,
  },
];
