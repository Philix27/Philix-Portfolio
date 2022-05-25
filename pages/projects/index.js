import ProjectsGroup from '../../comps/HomeComps/projects/projectsList'


export default function ProjectsPage() {
  return (
    < > 
      <div className='section'>
      <h1 className='sectionTitle'>Mobile Apps</h1>
      </div>  
      <ProjectsGroup category="mobile"/>
      <div className='section'>
      <h1 className='sectionTitle'>Web Apps</h1>
      </div>  
      <ProjectsGroup category="web"/>
    </>
  )
}
