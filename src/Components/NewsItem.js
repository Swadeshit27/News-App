import React from "react";

const NewsItem = (props) => {
  let { title, description, ImgUrl, newsUrl, author, date, source } = props;
  return (
    <div className="card">
      <img
        src={
          !ImgUrl
            ? "https://images.livemint.com/img/2023/02/16/600x338/oppo_flip_1676521640438_1676521648830_1676521648830.png"
            : ImgUrl
        }
        className="card-img-top"
        alt="..."
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