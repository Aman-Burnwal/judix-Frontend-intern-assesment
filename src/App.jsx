import "./App.css";
import { Experties, Features, Footer, Header, Navigation, SubHeader } from "./utils";

const App = () => {

  return <div className="w-[1440px] h-auto ">
    <Navigation />
    <Header />
    <SubHeader />
    <Features />
    
    <Experties />
    <Footer />
  </div>
}

export default App;