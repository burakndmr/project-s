//REACT
import { useState } from "react";

// ASSETS
import NoImage from "../../../assets/images/no-post-image.png";

const Image = (props) => {
  const { image } = props;

  const [showImage, setShowImage] = useState(true);

  const onErrorHandler = (e) => {
    setShowImage(false);
  };

  return showImage ? (
    <img src={image} onError={(e) => onErrorHandler(e)} alt="post" />
  ) : (
    <img className="mt-5" src={NoImage} alt="no post" />
  );
};

export default Image;
