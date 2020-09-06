import React from "react";
import PropTypes from "prop-types";
import Img from "gatsby-image";

const PreviewCompatibleImage = ({ imageInfo, immageClass, alt }) => {
  const { childImageSharp, image, url } = imageInfo;

  if (!!image && !!image.childImageSharp) {
    return (
      <Img
        className={immageClass}
        fluid={image.childImageSharp.fluid}
        alt={alt}
      />
    );
  }

  if (!!childImageSharp) {
    return (
      <Img className={immageClass} fluid={childImageSharp.fluid} alt={alt} />
    );
  }

  if (!!image && typeof image === "string")
    return <img className={immageClass} src={image} alt={alt} />;

  if (!!url && typeof url === "string")
    return <img className={immageClass} src={url} alt={alt} />;

  if (!!imageInfo && typeof imageInfo === "string")
    return <img className={immageClass} src={imageInfo} alt={alt} />;

  return null;
};

PreviewCompatibleImage.propTypes = {
  imageInfo: PropTypes.shape({
    alt: PropTypes.string,
    childImageSharp: PropTypes.object,
    image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
    style: PropTypes.object,
  }),
  immageClass: PropTypes.string,
  alt: PropTypes.string,
};

export default PreviewCompatibleImage;
