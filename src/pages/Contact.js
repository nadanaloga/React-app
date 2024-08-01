import React from 'react';
import SectionHeader from '../components/SectionHeader';
import ContactForm from '../components/ContactForm';
import { Helmet } from 'react-helmet';

function Contact() {
  return (
    

  <div>
    <Helmet>
    <title>Nadanaloga Fine Arts - Bharatanatyam, Vocal, Semi Classical, Drawing, Our Contact</title>
      <meta name="description" content="Contact Nadanaloga dance class with branches in Chennai Sembakkam and Mambakkam. We offer Bharatanatyam, Vocal, and Semiclassical Dance for adults. Join our online classes for Indians in the US, UK, France, and Canada, Malaysia, Singapore and other Countries" />
      <meta name="keywords" content="Contact Nadanaloga dance class, Chennai dance classes, Sembakkam dance class, Mambakkam dance class, Bharatanatyam, Vocal class, Semiclassical dance, online dance classes, international dance classes, Indian dance classes, US dance classes, UK dance classes, France dance classes, Canada dance classes, Malaysia Dance Class, Singapore DAnce Class" />
      </Helmet>
    <SectionHeader
        title="Free free to"
        description="Contact Us"
      />
 <ContactForm/>

  </div>



  )
}

export default Contact