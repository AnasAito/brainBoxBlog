import React, { useState, useEffect } from "react";

import { Container, ContentWithPaddingXl } from "./components/layouts";
import tw from "twin.macro";

import Header from "./components/header";
import Footer from "./components/footer";
import { SectionHeading } from "./components/headings";
import { PrimaryButton } from "./components/buttons";
import { getTitles, getEntry } from "api/index";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import { useParams } from "react-router-dom";
const StyledDiv = tw.div` min-h-screen text-gray-500  p-8 overflow-hidden`;

const HeadingRow = tw.div`flex justify-center `;
const Content = tw.div`flex flex-col items-center justify-center m-5 `;
const Heading = tw(SectionHeading)`text-gray-900 `;
const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;
export default () => {
  const { id } = useParams();

  const [entry, setEntry] = useState({});

  useEffect(() => {
    getEntry(id, setEntry);
  }, []);

  return (
    <StyledDiv className="bg-gray-200">
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{entry.title}</Heading>
          </HeadingRow>
          <Content>
            <p className="p-3">press to zoom</p>
            <div className="p-1 nm-flat-gray-200 rounded-md ">
              <Zoom>
                <img alt="that wanaka tree" src={entry.imageSrc} width="600" />
              </Zoom>
            </div>
            {/* <div className="space-x-8  flex  my-6 ">
              <button class="w-12 h-12 flex justify-center items-center rounded-full nm-convex-gray-200-xs transition duration-200 ease-in-out transform hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24"
                  viewBox="0 0 24 24"
                  width="24"
                  class="fill-current text-purple-600"
                >
                  <path d="M0 0h24v24H0V0z" fill="none" />
                  <path d="M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z" />
                </svg>
              </button>

              {show ? (
                <button
                  className="rounded-full   nm-concave-gray-200    leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110"
                  onClick={() => {
                    getEntry(ids[ids.indexOf(ida) + 1], setEntry);

                    setIda(ids[ids.indexOf(ida) + 1]);
                  }}
                >
                  Next sketch
                </button>
              ) : (
                <></>
              )}
            </div>*/}
          </Content>
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </StyledDiv>
  );
};
