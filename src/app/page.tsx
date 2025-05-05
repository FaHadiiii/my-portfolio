import { fetchHome } from "@/actions/home";
import { fetchAboutMe, fetchCertifications } from "@/actions/about_me";
import PageClient from "./page-client";
import { fetchSkills } from "@/actions/skills";
import { fetchProjects } from "@/actions/projects";

export default async function Home() {
  const homeData = (await fetchHome()) as {
    rotatingTextRight: string[];
    rotatingTextLeft: string[];
    description: string;
  }[];

  const aboutMeData = (await fetchAboutMe()) as {
    description: string;
    pic_url: string;
  }[];

  const certsData = (await fetchCertifications()) as {
    cert_name: string;
    issuer: string;
    year: string;
  }[];

  const skillsData = (await fetchSkills()) as {
    skill_name: string;
    skill_description: string;
    stack_pic: string[];
  }[];

  const projectsData = (await fetchProjects()) as {
    project_name: string;
    project_short_desc: string;
    tech_stack: string[];
    project_desc: string;
    project_links: {
      github: string;
      demo: string;
    };
    project_type: string;
    project_pic: string;
  }[];

  return (
    <PageClient
      homeData={homeData}
      aboutMeData={aboutMeData}
      certsData={certsData}
      skillsData={skillsData}
      projectsData={projectsData}
    />
  );
}

export const dynamic = "force-dynamic";
