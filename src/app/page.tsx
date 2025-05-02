import { fetchHome } from "@/actions/home";
import { fetchAboutMe, fetchCertifications } from "@/actions/about_me";
import PageClient from "./page-client";

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

  return (
    <PageClient
      homeData={homeData}
      aboutMeData={aboutMeData}
      certsData={certsData}
    />
  );
}
