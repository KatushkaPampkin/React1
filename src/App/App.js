import "./App.css";
import Header from "../Header/Header";
import Banner from "../MainPart/Banner/Banner";

import Block3 from "../MainPart/Block3/Block3";
import SwiperSlider from "../MainPart/SwiperSlider/SwiperSlider";
import UIM from "../MainPart/UIM/UIM"

function App() {
  return (
      <>
        <div className="App">
          <Header />
            <Banner/>
            <Block3/>
            <SwiperSlider/>
            <UIM/>
        </div>
      </>
  );
}

export default App;
