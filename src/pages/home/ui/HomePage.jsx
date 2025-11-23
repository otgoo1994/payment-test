import { Home, MainSwiper, Faq } from "@/features/home";
import { Header, Footer } from "@/features/layouts";
export const HomePage = () => {
  return (
    <div style={{ margin: "auto" }}>
      <Header />
      <MainSwiper />
      <Home />
      <Faq />
      <Footer />
    </div>
  );
};
