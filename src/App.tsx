import Products from "./pages/Products";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-dvh flex flex-col">
      <main className="flex-1">
        <Products />
      </main>
      <Footer />
    </div>
  );
}
