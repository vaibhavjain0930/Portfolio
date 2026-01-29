import Container from "@/components/container";
import { MotionHeading } from "@/components/motion-heading";
import { ContactForm } from "./form/contact-assemble";
import Footer from "@/components/footer/footer";
import { MotionSubHeading } from "@/components/motion-sub-heading";

export const ContactPage = () => {
  return (
    <Container >
      {/* Heading  */}
      <MotionHeading as="h2">
        Get in <span className="text-muted-foreground">Touch</span>
      </MotionHeading>
      <MotionSubHeading>
        Great products begin with simple chat. Let’s connect.
      </MotionSubHeading>

      {/* Form */}
      <ContactForm />
      <Footer />
    </Container>
  );
};
