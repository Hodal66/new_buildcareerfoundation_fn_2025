import { useQuery, gql } from "@apollo/client";


export const GET_ALL_POSTS = gql`
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
      date_posted
      _id
    }
  }
`;
export const usePosts = () => {
  const { data, error, loading } = useQuery(GET_ALL_POSTS, {
    // onCompleted: async () => {
    //   await client.refetchQueries({
    //     include: [GET_ALL_POSTS],
    //   });
    // },
  });

  return {
    data,
    error,
    loading,
  };
};

export const DELETE_ONE_POST = gql`
  mutation ($input: IdToUseWhileDeleting!) {
    deletePost(input: $input) {
      isDeleted
      message
    }
  }
`;

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
      }
    }
  }
`;

export const ADD_POST = gql`
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
      }
      youtube_video_url
      _id
      date_posted
    }
  }
`;