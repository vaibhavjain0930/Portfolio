import Container from "../../../components/container";
import OfferServices from "./offer-services";
import { MotionHeading } from "@/components/motion-heading";

const ServicesPage = () => {
  return (
    <Container>
      <MotionHeading as="h2" className="md:mb-5">
        What I <span className="text-muted-foreground">Offer</span>
      </MotionHeading>
      <OfferServices />
    </Container>
  );
};

export default ServicesPage;
