import './App.css';
import './components/SecondSection/SecondSection.css'
import NavBar from './components/NavBar/NavBar';
import SecondSection from './components/SecondSection/SecondSection';
import ThirdSection from './components/ThirdSection/ThirdSection';
import FourthSection from './components/FourthSection/FourthSection';
import FifthSection from './components/FifthSection/FifthSection';
import SixthSection from './components/SixthSection/SixthSection';
import SeventhSection from './components/SeventhSection/SeventhSection';
import FooterSection from './components/FooterSection/FooterSection';

function App() {
  return (
    <div className="main-container"  >
     <NavBar ></NavBar>
     <SecondSection></SecondSection>
     <ThirdSection></ThirdSection>
     <FourthSection></FourthSection>
     <FifthSection></FifthSection>
     <SixthSection></SixthSection>
     <SeventhSection></SeventhSection>
     <FooterSection></FooterSection>
    </div>
  );
}

export default App;
