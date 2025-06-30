export const sliceTheStringTofit = (title, content, titleLength, contentLength) => {
    let title1 = "";
    let content1 = "";
    if (title.length > titleLength) {
      title1 = title.slice(0, titleLength-5) + "... ";
    } else {
      title1 = title;
    }
    if (content.length > contentLength) {
      content1 = content.slice(0, contentLength-5) + "... ";
    } else {
      content1 = content;
    }
    return {
      slicedTitle: title1,
      slicedContent: content1,
    };
  };