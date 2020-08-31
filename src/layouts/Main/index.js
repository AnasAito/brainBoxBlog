import React, { useState, useEffect } from "react";

import { Container, ContentWithPaddingXl } from "./components/layouts";
import tw from "twin.macro";
import styled from "styled-components";
import { css } from "styled-components/macro";
import Header from "./components/header";
import Footer from "./components/footer";
import { SectionHeading } from "./components/headings";
import { PrimaryButton } from "./components/buttons";
import { getEntries } from "api/index";
import { useHistory } from "react-router-dom";
const StyledDiv = tw.div` min-h-screen text-gray-500  p-8 overflow-hidden`;

const HeadingRow = tw.div`flex`;
const Heading = tw(SectionHeading)`text-gray-900`;
const Posts = tw.div`mt-6 sm:-mr-8 flex flex-wrap`;
const PostContainer = styled.div`
  ${tw`mt-10 w-full sm:w-1/2 lg:w-1/3 sm:pr-8   `}
`;
const FeatPostContainer = styled.div`
  ${tw` w-full mt-10 sm:pr-8`}
`;
const FeatPost = tw.div` cursor-pointer flex flex-row  h-full sm:pr-4 rounded-r-lg`;
const FeatInfo = tw.div`  py-8  sm:-mr-4 sm:pl-8 sm:flex-1  rounded-r-lg  `;
const FeatDescription = tw.div`text-sm mt-3 leading-loose text-gray-600 font-medium`;
const Post = tw.div`cursor-pointer flex flex-col rounded-lg`;
const FeatImage = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`  sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg`}
`;
const Image = styled.div`
  ${(props) =>
    css`
      background-image: url("${props.imageSrc}");
    `}
  ${tw`h-64 w-full bg-cover bg-center rounded-t-lg`}
`;
const Info = tw.div`p-8  rounded-lg rounded-t-none  `;
const Category = tw.div`uppercase text-purple-500 text-xs font-bold tracking-widest leading-loose after:content after:block after:border-b-2 after:border-purple-500 after:w-8`;
const CreationDate = tw.div`mt-4 uppercase text-gray-600 italic font-semibold text-xs`;
const Title = tw.div`mt-1 font-black text-2xl  h-20 text-gray-900 group-hover:text-purple-500 transition duration-300 `;
const Description = tw.div``;

const ButtonContainer = tw.div`flex justify-center`;
const LoadMoreButton = tw(PrimaryButton)`mt-16 mx-auto`;

export default ({ headingText = "Sketchnotes" }) => {
  let history = useHistory();
  const [visible, setVisible] = useState(7);
  const [entries, setEntries] = useState([]);
  useEffect(() => {
    getEntries(setEntries);
  }, []);
  const onLoadMoreClick = () => {
    setVisible((v) => v + 6);
  };
  console.log(entries);
  return (
    <StyledDiv className="bg-gray-200">
      <Header />
      <Container>
        <ContentWithPaddingXl>
          <HeadingRow>
            <Heading>{headingText}</Heading>
          </HeadingRow>
          <Posts>
            {entries.slice(0, visible).map((post, index) => (
              <>
                {" "}
                {post.featured ? (
                  <FeatPostContainer
                    key={post.id}
                    featured={post.featured}
                    onClick={() =>
                      history.push({
                        pathname: `article/${post.id}`,
                      })
                    }
                  >
                    <FeatPost
                      className="nm-flat-gray-200 group  "
                      as="a"
                      href={post.url}
                    >
                      <img
                        className=" sm:h-96  sm:min-h-full sm:w-1/2 lg:w-2/3 sm:rounded-t-none sm:rounded-l-lg"
                        src={post.imageSrc}
                      />
                      <FeatInfo className=" rounded-r-lg ">
                        <Category>{post.category}</Category>
                        <CreationDate>{post.date}</CreationDate>
                        <Title>{post.title}</Title>
                        {post.featured && post.description && (
                          <FeatDescription>{post.description}</FeatDescription>
                        )}
                      </FeatInfo>
                    </FeatPost>
                  </FeatPostContainer>
                ) : (
                  <PostContainer
                    key={index}
                    featured={post.featured}
                    onClick={() =>
                      history.push({
                        pathname: `article/${post.id}`,
                      })
                    }
                  >
                    <Post
                      className="group"
                      as="a"
                      href={post.url}
                      className=" transition duration-500 ease-in-out nm-flat-gray-200 transform hover:-translate-y-1 hover:scale-105"
                    >
                      <Image imageSrc={post.imageSrc} />
                      <Info>
                        <Category>{post.category}</Category>
                        <CreationDate>{post.date}</CreationDate>
                        <Title>{post.title}</Title>
                        {post.featured && post.description && (
                          <Description>{post.description}</Description>
                        )}
                      </Info>
                    </Post>
                  </PostContainer>
                )}
              </>
            ))}
          </Posts>
          {visible < entries.length && (
            <ButtonContainer className="">
              <LoadMoreButton
                className="rounded-full nm-flat-gray-200 hover:nm-flat-gray-200-lg leading-5 px-8 py-4 uppercase font-bold tracking-widest transition duration-200 ease-in-out transform hover:scale-110"
                onClick={onLoadMoreClick}
              >
                Load More
              </LoadMoreButton>
            </ButtonContainer>
          )}
        </ContentWithPaddingXl>
      </Container>
      <Footer />
    </StyledDiv>
  );
};

const getPlaceholderPost = () => ({
  imageSrc:
    "https://images.unsplash.com/photo-1581089778245-3ce67677f718?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  category: "Statistical learning",
  date: "June 19, 2020",
  title: "discover the basics of linear regression",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  url: "https://reddit.com",
});
