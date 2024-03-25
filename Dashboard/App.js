// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
// import 'boxicons';

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import customised components and styling files
import './App.css';
import TutorHeader from './components/TutorHeader';
import TutorSideBar from './components/TutorSideBar';
import TutorMain from './components/TutorMain';
import TutorBackToTop from './components/TutorBackToTop';
import TutorFooter from './components/TutorFooter';

function App() {
  return (
    <>
      <TutorHeader />
      <TutorSideBar />
      <TutorMain />
      <TutorFooter />
      <TutorBackToTop />
    </>
  );
}

export default App;
