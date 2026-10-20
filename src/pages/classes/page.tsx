import SiteLayout from "@/components/feature/SiteLayout";
import ClassesHero from "./components/ClassesHero";
import ClassGrid from "./components/ClassGrid";
import ClassTimetable from "./components/ClassTimetable";
import SpecialistTeaser from "./components/SpecialistTeaser";
import ClassesCta from "./components/ClassesCta";

export default function Classes() {
  return (
    <SiteLayout>
      <ClassesHero />
      <ClassGrid />
      <ClassTimetable />
      <SpecialistTeaser />
      <ClassesCta />
    </SiteLayout>
  );
}