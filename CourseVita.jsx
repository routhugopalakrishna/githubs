import React from 'react'
import"./CourseVita.css"
import ArrowOutwardRoundedIcon from '@mui/icons-material/ArrowOutwardRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

const CourseVita = () => {
  return (
    <div className="scroll-container">
    <div style={{display:"flex"}}>
   <div className='cards' >
    <div  className='dataengineer'> <img src='https://www.springboard.com/library/static/a157b5c003f08af17664a602ba426b05/8b619/data-engineering-on-azure.jpg' alt=' data engineer'/>
    <button className='Coursevita-button' >Upcoming</button>
       </div>
        <h5  className='title-style'>Become<br/> a successful data engineer</h5>
       <div> <ArrowOutwardRoundedIcon className='icon'/><CalendarMonthRoundedIcon style={{marginLeft:"90px"}}/></div>
      </div>
      <a href='https://coursevita.com/courses/dataScience'><div className='cards' >
       <div  className='dataengineer'> <img src='https://www.iimtindia.net/Blog/wp-content/uploads/2021/06/Data-Science.jpg' alt=' Data Scientist'/>
    <button className='Coursevita-button' >Upcoming</button>
       </div>
        <h5  className='title-style'>Become<br/> a Successful Data Scientist</h5>
       <div> <ArrowOutwardRoundedIcon className='icon'/><CalendarMonthRoundedIcon style={{marginLeft:"90px"}}/></div>
      </div> </a>
      <a href='https://coursevita.com/courses/dataAnalytics'><div className='cards' >
       <div  className='dataengineer'> <img src='http://geekologist.co/wp-content/uploads/2015/09/business-analyst2.jpg' alt=' data Analyst'/>
    <button className='Coursevita-button' >Upcoming</button>
       </div>
        <h5  className='title-style'>Become<br/> a successful data Analyst</h5>
       <div> <ArrowOutwardRoundedIcon className='icon'/><CalendarMonthRoundedIcon style={{marginLeft:"90px"}}/></div>
      </div></a>
     <a href=' https://coursevita.com/courses/dataVisualization' ><div className='cards' >
       <div  className='dataengineer'> <img src='https://img.freepik.com/premium-photo/expert-data-visualization-creating-dynamic-data-models-smart-wall_1045156-57212.jpg' alt='data visualization expert'/>
    <button className='Coursevita-button' >Upcoming</button>
       </div>
        <h5  className='title-style'>Become<br/> a successful data visualization expert</h5>
       <div> <ArrowOutwardRoundedIcon className='icon'/><CalendarMonthRoundedIcon style={{marginLeft:"90px"}}/></div>
      </div></a>
      <a href='https://upskill.coursevita.com/python-data-analytics'><div className='cards' >
       <div  className='dataengineer'> <img src='https://digitalfloats.com/wp-content/uploads/2023/08/Python-for-data-analysis.jpg' alt='Python for Data Analytics'/>
    <button className='Coursevita-button' >Upcoming</button>
       </div>
        <h5  className='title-style'> Become<br/>Python for Data Analytics </h5>
       <div> <ArrowOutwardRoundedIcon className='icon'/><CalendarMonthRoundedIcon style={{marginLeft:"90px"}}/></div>
      </div></a>
      </div>
   </div>
  )
}

export default CourseVita
