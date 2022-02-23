import ProjectsGroup from '../../comps/HomeComps/projects/projectsList'
import { Section, SectionTitle, SectionText } from '../../styles';

  
export default function ProjectsPage() {
  return (
    <Section >    
      <SectionTitle>Mobile Apps</SectionTitle>
      <ProjectsGroup category="mobile"/>
      <SectionTitle>Web Apps</SectionTitle>
      <ProjectsGroup category="web"/>
    </Section>
  )
}
