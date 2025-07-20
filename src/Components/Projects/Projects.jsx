import ProjectCard from './ProjectCard'
import Project2 from '../../assets/Project2.png'
import Project3 from '../../assets/Project3.png'
import Project5 from '../../assets/Project5.png'
import Project6 from '../../assets/Project6.png'
import Project7 from '../../assets/Project7.png'
import Project4 from '../../assets/Project4.png'
const Projects = () => {
  return (
    <div id='Projects' className='md:p-24 px-2 text-white md:mt-8'>
      <h1 className="text-2xl md:text-4xl text-white font-bold text-center">Projects</h1>

      <div className="py-12 px-8 flex flex-wrap gap-5 items-center justify-center">

        <ProjectCard title='Medie-claims' imgsrc={Project2} tec='React Js, Tailwind Css' desc="Medical-health is a Company's Responsive Landing Page built 
        with React + Vite and Tailwind CSS used for stunning and visually appealing interface!" git='https://github.com/maree360/Medie-claims-REACT_Landing_Page' demo='https://medical-healthcare987.netlify.app/' />

        <ProjectCard title='Lounge' imgsrc={Project3} tec='Html, CSS, Tailwind Css' desc='A stunning and Responsive Landing Page 
        Dev.Learnings created by Html, CSS and Tailwind Css. Responsive landing page design across all devices.' git='https://github.com/maree360/Responsive_Landing_Page-TailwindCss' demo='https://lounge-cafe.netlify.app/' />

        <ProjectCard title='Menu_card' imgsrc={Project7} tec='React Js, javascript' desc='."Interactive menu card for a modern restaurant, built with responsive design and elegant UI."' git='https://github.com/maree360/Menu_card' demo='https://manue-website123.netlify.app/' />

        <ProjectCard title='Limelight' imgsrc={Project4} tec='index.html, javascript' desc='
        Limelight is a community platform where web developers connect, share, 
        and learn from each other.' git='https://github.com/maree360/Limelight' demo='https://clothes-123.netlify.app/' />

        <ProjectCard title='University_book' imgsrc={Project6} tec='React Js, Tailwind Css' desc='University book is a website created for students to select their favourite professor for studies. and they can also see the results of their previous students.' git='https://github.com/maree360/Universitybook' demo='https://university-book.vercel.app/' />

        <ProjectCard title='Bootstrap Project' imgsrc={Project5} tec='Html, CSS, Bootstrap' desc='Dev Learnings is a  responsive landing page created by html,
         CSS and bootstrap components are used to built this landing page.' git='https://github.com/maree360/Responsive_Landing_page' demo='https://bootcamp987.netlify.app/' />

         
      </div>
    </div>
  )
}

export default Projects
