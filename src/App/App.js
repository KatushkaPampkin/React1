import "./App.css";
import Header from "../Header/Header";
/*import Navigation from "../MainPart/Navigation"*/
import Banner from "../MainPart/Banner/Banner";
import Block2 from "../MainPart/Block2/Block2";
import Block3 from "../MainPart/Block3/Block3";
import SwiperSlider from "../MainPart/SwiperSlider/SwiperSlider";
import { Route, Routes } from "react-router-dom";



function App() {
  return (
      <>
      <div className="App">
          <Header />
          {/*<Navigation/>*/}
          <Banner/>
          <main>
              <div className="container">
                  <Routes>
                      <Route path="/Banner" element={<Banner />} />
                      <Route path="/Block2" element={<Block2 />} />
                      <Route path="/Block3" element={<Block3 />} />
                      <Route path="/SwiperSlider" element={<SwiperSlider />} />
                  </Routes>
              </div>
          </main>
      </div>

      </>
  );
}

export default App;
