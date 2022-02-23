import {useRouter} from 'next/router'
import {projects} from '../../comps/HomeComps/projects/constants'

  
export default function ProjectsPage() {
    const router = useRouter();
    const projectID = router.query.projectID;
    var page;
    projects.filter((project) => {
       
        page = project.detailsPage;
                return project.id == projectID;
    });
    
  return (
      < >    
         
          {page}
      
    </>
  )
}
