import HeroSection from "./components/HeroSection";
import DoctorsSection from "./components/DoctorsSection";
import FacilitiesSection from "./components/FacilitiesSection";
import Departments from "./components/Departments";
import Testimonial from "./components/Testimonial";
import Certificate from "./components/Certificate";

export default function Home() {
  return (
    <div className="bg-white text-black">
      <HeroSection />
      <Certificate />
      <div className=" py-14 flex gap-6 px-28 mx-14">
        <DoctorsSection />
        <FacilitiesSection />
      </div>
      <Departments />
      <Testimonial />
    </div>
  );
}
