import React from "react";

const NewsItem = (props) => {
  let { title, description, ImgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card col-10  col-md-6 col-lg-3 mx-auto p-0 my-4 shadow-sm" style={{width:'20rem', height:'28rem'}} >
      <img
        src={
          !ImgUrl
            ? "https://www.echollywell.co.uk/wp-content/uploads/blank-00cc00_040004000.png"
            : ImgUrl
        }
        className="card-img-top"
        alt="..."
        style={{maxHeight:"10rem", objectFit:"cover"}}
      />
      <div className="card-body">
        <h5 className="card-title">{title}......</h5>
        <p className="card-text">{description}......</p>
        <p className="card-text">
          By {author ? author : "Unknown"} on {new Date(date).toGMTString()}{" "}
          <span className="badge text-bg-success">{source}</span>
        </p>
        <a
          href={newsUrl}
          rel="noreferrer"
          target="_blank"
          className="btn btn-primary"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;