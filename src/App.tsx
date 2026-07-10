import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import Advantages from "./components/Advantages";
import Contacts from "./components/Contacts";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <Hero />
      <Catalog />
      <Advantages />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
