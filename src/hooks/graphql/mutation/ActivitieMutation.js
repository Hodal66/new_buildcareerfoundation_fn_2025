import { gql } from "@apollo/client";

export const ADD_NEW_ACTIVITIES_POST = gql`
  mutation Mutation($input: PostInput) {
    addPost(input: $input) {
      title
      content
      contentSections {
        sectionTitle
        paragraph1
        paragraph2
      }
      category
      image_url {
        url
        filename
      } image_urls {
        url
        filename
      }
      youtube_video_url
      _id
      date_posted
    }
  }
`;

export const ADD_NEW_ACTIVITIES_POST__old = gql`
  mutation (
    $category: String!
    $content: String!
    $image_url: [ImageToBeSaved!]!
    $title: String!
    $contentSections: [ContentSectionInput!]!
    $youtube_video_url: String!
    $user_id: ID!
  ) {
    addPost(
      input: {
        category: $category
        content: $content
        contentSections: $contentSections
        image_url: $image_url
        title: $title
        youtube_video_url: $youtube_video_url
        # user_id: "68043b04c62fdef7714c24b1",
        user_id: $user_id
      }
    ) {
      category
      image_url {
        url
        filename
      } image_urls {
        url
        filename
      }
      _id
      youtube_video_url
      date_posted
      title
      content
    }
  }
`;

export const DELETE_ONE_ACTIVITIES_POST = gql`
 mutation DeletePost($input: ID!) {
  deletePost(input: $input) {
    isDeleted
    message
  }
}
`;

export const UPDATE_ACTIVITIES=gql`
mutation UpdatePost($input: PostInputUpdate!) {
  updatePost(input: $input) {
    title
    content
    contentSections {
      sectionTitle
      paragraph1
      paragraph2
    }
    category
    image_url {
      url
      filename
    }
    image_urls {
      url
      filename
    }
    youtube_video_url
    _id
    date_posted
  }
}
`
