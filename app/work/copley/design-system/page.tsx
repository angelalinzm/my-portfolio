import { getProject, getNextProject } from "@/data/projects";
import CaseStudyTemplate from "@/components/CaseStudyTemplate";

export default function DesignSystemPage() {
  const data = getProject("copley", "design-system");
  const next = getNextProject("copley", "design-system");
  if (!data) return null;
  const { company, project } = data;

  return (
    <CaseStudyTemplate
      company={company.name}
      dates={project.timeline}
      title={project.title}
      description={project.description}
      role={project.role}
      timeline={project.timeline}
      deliverables={project.deliverables}
      challenge={project.challenge}
      steps={project.steps}
      skills={project.skills}
      nextProject={
        next
          ? { title: next.title, route: next.route, gradient: next.gradient }
          : null
      }
    />
  );
}
