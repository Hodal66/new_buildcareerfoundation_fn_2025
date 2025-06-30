/* eslint-disable react/prop-types */
import ErrorMessageDisplay from "./ErrorMessageDisplay";
import LoadingMessage from "./LoadingMessage";
import TableRow from "./TableRow";

const TableGenerator = (props) => {
  const captureData = (data) => {
    props.giveMeData(data);
  };
  const captureIdtoDelete = (data) => {
    props.handleDelete(data);
  };

  return (
    <>
      {/* if loading is true, show loading screen */}
      {props.loading ? (
        <LoadingMessage />
      ) : // else if there is an error show error screen
      props.error.isError ? (
        <ErrorMessageDisplay error={props.error.message} />
      ) : (
        // if neither error nor loading is true, show the rows using data from array of data fetched.
        props.data && props.data.map((post, index) => {
          // title --> busName
          // content --> busPlate
          // category --> busRoute
          // image_url --> arrayOfImageUrlsSaved
          // youtube_video_url --> youtube_Url
          return (
            <TableRow
              busName={post.title}
              busPlate={post.content}
              busRoute={post.category}
              post={post}
              id={post._id}
              // pass id automatically from the index to dispay the number of the operator currently rendere
              // on the screen
              number={index + 1}
              data_testid={`operator-row-${index + 1}`}
              onSaveData={captureData}
              onDelete={captureIdtoDelete}
              setOpenModalRow={props.setOpenModal}
              key={index}
            />
          );
        })
      )}
    </>
  );
};

export default TableGenerator;
