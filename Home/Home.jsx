
import { useEffect } from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Descrip from './Descrip.jsx'
import HomeContainer1 from './HomeContainer1.jsx'
import './Home.css';
import CardCont from './CardCont.jsx';
import ReviewsContainer from './ReviewsContainer.jsx';


export default function Home() {
  
  const cardDataHome1 = {
    title : "Top Courses",
    cards : [{ title: "Course 1", description: "Description for Course 1", link: "/course1" },
    { title: "Course 2", description: "Description for Course 2", link: "/course2" },
    { title: "Course 3", description: "Description for Course 3", link: "/course3" },
    { title: "Course 4", description: "Description for Course 4", link: "/course4" },
    { title: "Course 5", description: "Description for Course 5", link: "/course5" },
    { title: "Course 6", description: "Description for Course 6", link: "/course6" },
    { title: "Course 7", description: "Description for Course 7", link: "/course7" },
    { title: "Course 8", description: "Description for Course 8", link: "/course8" },
    { title: "Course 9", description: "Description for Course 9", link: "/course9" },
    { title: "Course 10", description: "Description for Course 10", link: "/course10" },
  ]
  };

  const cardDataHome2 =    { 
    title : "New Courses",
    cards : [{ title: "Course 11", description: "Description for Course 11", link: "/courseContent" },
    { title: "Course 12", description: "Description for Course 2", link: "/course2" },
    { title: "Course 13", description: "Description for Course 3", link: "/course3" },
    { title: "Course 14", description: "Description for Course 4", link: "/course4" },
    { title: "Course 15", description: "Description for Course 5", link: "/course5" },
    { title: "Course 16", description: "Description for Course 6", link: "/course6" },
    { title: "Course 17", description: "Description for Course 7", link: "/course7" },
    { title: "Course 18", description: "Description for Course 8", link: "/course8" },
    { title: "Course 19", description: "Description for Course 9", link: "/course9" },
    { title: "Course 20", description: "Description for Course 10", link: "/course10" },
  ]
  };
   
    return (
      <div className='Home'>
        <Header/>
        <div className="home-vid-cont">
          <video className='home-vid' src="Home-vid1.mp4" muted autoPlay loop/>
        </div>
        <Descrip/>
        <CardCont cardData={cardDataHome2}/>
        <div className="empty-cont" style={{height:'300px'}}>
        </div>
        <HomeContainer1/>
        <div className="empty-cont" style={{height:'100px'}}>
        </div>
        <CardCont cardData={cardDataHome1}/>
        <div className="empty-cont" style={{height:'100px'}}>
        </div>
        <ReviewsContainer/>
        <div className="empty-cont" style={{height:'100px'}}>
        </div>
        <Footer/>
      </div>
    )
}