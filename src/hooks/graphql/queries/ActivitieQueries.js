import { gql } from "@apollo/client";

export const GET_ONE_POST = gql`
  query ($getOnePostId: ID!) {
    getOnePost(id: $getOnePostId) {
      category
      title
      content
      contentSections {
        sectionTitle
        paragraph1
        paragraph2
      }
      youtube_video_url
      image_url {
        url
        filename
      } image_urls {
      url
      filename
    }
    }
  }
`;

export const GET_ALL_ACTIVITIES_POSTS = gql`
  query {
    getAllPosts {
      content
      title
      category
      contentSections {
        sectionTitle
        paragraph1
        paragraph2
      }
      youtube_video_url
      image_url {
        url
        filename
      }
      image_urls {
      url
      filename
    }
      date_posted
      _id
    }
  }
`;

