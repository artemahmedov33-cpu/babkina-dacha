import ErrorBoundary from "./components/ErrorBoundary";
import Hero from "./components/Hero";
import Catalog from "./components/Catalog";
import { CallbackBar, CallbackFab } from "./components/Callback";
import Advantages from "./components/Advantages";
import Gallery from "./components/Gallery";
import Contacts from "./components/Contacts";
import PrivacyPolicy from "./components/PrivacyPolicy";
import Footer from "./components/Footer";

function App() {
  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-white tracking-[-0.02em]" style={{ fontFamily: "'Inter', sans-serif" }}>
        <Hero />
        <Catalog />
        <CallbackBar />
        <Advantages />
        <Gallery />
        <Contacts />
        <PrivacyPolicy />
        <Footer />
        <CallbackFab />
      </div>
    </ErrorBoundary>
  );
}

export default App;
