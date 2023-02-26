import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const camelize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  };
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);

  
  const update = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ba0c019f982f4064b60b68ad3121ade9&page=${page}&pageSize=${props.pageSize}`;
    setloading(true );
    let data = await fetch(url);
    props.setProgress(30);
    let predata = await data.json();
    props.setProgress(60);
    setarticles(predata.articles);
    settotalResults(predata.totalResults);
    setloading(false);
    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${camelize(props.category)} -Apna News `;
    update();
    // eslint-disable-next-line
  },[])
  
  

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ba0c019f982f4064b60b68ad3121ade9&page=${page+1}&pageSize=${props.pageSize}`;
    setpage(page + 1);
    let data = await fetch(url);
    let predata = await data.json();
    setarticles(articles.concat(predata.articles));
    settotalResults(predata.totalResults);
    // setloading(false);
  };
  // handonNext = async () => {
  //   setState({ page: page + 1 });
  //   update();
  // };
  // handonPre = async () => {
  //   setState({ page: page - 1 });
  //   update();
  // };

  return (
    <>
      <h1 className="mb-3 text-center">Top Latest News</h1>
      <div className=".container mb-3 text-center">
        {loading && <Loading />}
      </div>
 
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="container my-3">
          <div className="row">
            {
              articles.map((element) => {
                return (
                  <div className="col-md-3" style={{marginBottom:'5rem'}} key={element.url}>
                    <NewsItem
                      title={element.title ? element.title.slice(0, 45) : ""}
                      description={
                        element.description
                          ? element.description.slice(0, 88)
                          : ""
                      }
                      ImgUrl={element.urlToImage}
                      newsUrl={element.url}
                      author={element.author}
                      date={element.publishedAt}
                      source={element.source.name}
                    />
                  </div>
                );
              })}
          </div>
        </div>
      </InfiniteScroll>
      {/* <div className="container mb-5 d-flex justify-content-between">
          <button
            disabled={page <= 1}
            type="button"
            className="btn btn-dark "
            onClick={handonPre}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              page + 1 >
              Math.ceil(totalPage / props.pageSize)
            }
            type="button"
            className="btn btn-dark d-flex"
            onClick={handonNext}
          >
            Next &rarr;
          </button>
        </div> */}
    </>
  );
};
News.defaultProps = {
  country: "in",
  pageSize: 8,
  category: "sports",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
  ApiKey: PropTypes.string,
};

export default News;
