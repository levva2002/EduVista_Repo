// import Icons
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'remixicon/fonts/remixicon.css';
// import 'boxicons';

// import Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';

// import customised components and styling files
import './App.css';
import StudentHeader from './components/StudentHeader';
import StudentSideBar from './components/StudentSideBar';
import StudentMain from './components/StudentMain';
import StudentBackToTop from './components/StudentBackToTop';
import StudentFooter from './components/StudentFooter';

function App() {
  return (
    <>
      <StudentHeader />
      <StudentSideBar />
      <StudentMain />
      <StudentFooter />
      <StudentBackToTop />
    </>
  );
}

export default App;
