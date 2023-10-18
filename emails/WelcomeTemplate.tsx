import React, { CSSProperties } from "react";
import {
  Html,
  Body,
  Container,
  Tailwind,
  Text,
  Link,
  Preview,
} from "@react-email/components";

const WelcomeTemplate = ({ name }: { name: string }) => {
  return (
    <Html>
      <Preview>Welcome aboard!</Preview>
      <Tailwind>
        <Body className="bg-white">
          <Container>
            <Text>Hello {name}</Text>
            <Link href="/" style={link}>
              We are glad to have you here, this is a welcome template.
            </Link>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

const link: CSSProperties = {
  textDecoration: "none",
};

export default WelcomeTemplate;
