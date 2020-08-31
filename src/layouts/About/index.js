import React, { useState, useEffect } from "react";

import { Container, ContentWithPaddingXl } from "./components/layouts";
import tw from "twin.macro";

import Header from "./components/header";
import Footer from "./components/footer";
import { SectionHeading } from "./components/headings";
const SectionDescription = tw.p`mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-black max-w-xl`;
const StyledDiv = tw.div` min-h-screen text-gray-500  p-8 overflow-hidden`;

const HeadingRow = tw.div`flex justify-center `;
const Content = tw.div`flex flex-col items-center justify-center m-5 `;
const Heading = tw(SectionHeading)`text-gray-900 `;

export default () => {
  return (
    <StyledDiv className="bg-gray-200">
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>About</Heading>
          </HeadingRow>
          <Content>
            <SectionDescription>
              As a curious learner, I find myself consuming an important
              quantity of material in order to stay updated in my favorite
              fields or build a solid base to enter new ones. This large
              quantity of material after being understood needs to be stored in
              order to be used in the future.
            </SectionDescription>
            <SectionDescription>
              That’s why I've launched a personal project ({" "}
              <span className="text-gray-400">
                hope I can finish this one …
              </span>{" "}
              ) called the <span className="font-bold">Brain Box</span> which is
              a collection of easy to read, small and compact notes that will
              help me and the interested community fresh in up with informative
              and important material without the need to waste hours reading
              long papers or watching infinite YouTube playlist.
            </SectionDescription>
            <SectionDescription>
              This collection of notes will be short and direct, with examples
              to help you understand.
            </SectionDescription>
          </Content>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </StyledDiv>
  );
};
