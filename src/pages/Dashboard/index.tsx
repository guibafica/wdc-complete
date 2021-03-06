import React, { useEffect } from "react";

import Header from '../../components/Header';

import HomeSection from '../../sections/HomeSection';
import AboutSection from '../../sections/AboutSection';
import ServicesSection from '../../sections/ServicesSection';
import ProjectsSection from '../../sections/ProjectsSection';
import ContactSection from '../../sections/ContactSection';

const Dashboard: React.FC = () => {
  useEffect(() => {
    console.log(' ');
    console.log(' ');
    console.log('Made by ');
    console.log(' ');
    console.log(' ');
  }, []);

  return (
    <>
      <Header />

      <HomeSection />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <ContactSection />
    </>
  )
}

export default Dashboard;
