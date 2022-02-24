import ProjectsGroup from '../../comps/HomeComps/projects/projectsList'
import { Section, SectionTitle, SectionText } from '../../styles';

  
export default function ProjectsPage() {
  return (
    < > 
      <br/>
      <Section>
      <SectionTitle>Mobile Apps</SectionTitle>
      </Section>  
      <ProjectsGroup category="mobile"/>
      <Section>
      <SectionTitle>Web Apps</SectionTitle>
      </Section>  
      <ProjectsGroup category="web"/>
    </>
  )
}
