import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import NewsItem from "./NewsItem";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios"

const News = (props) => {
  const camelize = (str) => {
    return str.slice(0, 1).toUpperCase() + str.slice(1).toLowerCase();
  };
  const [articles, setarticles] = useState([]);
  const [loading, setloading] = useState(true);
  const [page, setpage] = useState(1);
  const [totalResults, settotalResults] = useState(0);


  const update = async () => {
    props.setProgress(0);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=ba0c019f982f4064b60b68ad3121ade9&page=${page}&pageSize=${props.pageSize}`;
    setloading(true);
    const res = await axios.get(url);
    setarticles(res.data.articles);
    settotalResults(res.data.totalResults);
    setloading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${camelize(props.category)} -Apna News `;
    update();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.ApiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    const res = await axios.get(url);
    setpage(page + 1);
    setarticles(articles.concat(res.data.articles));
    settotalResults(res.data.totalResults);
    // setloading(false);
  };

  return (
    <>
      <h1 className="my-3 text-center">Top Latest News</h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Loading />}
      >
        <div className="col-12 px-4  my-3">
          {loading ? <Loading /> :
            <div className="row d-flex justify-between">
              {
                articles.map((element) => {
                  return (
                    <NewsItem key={element.url}
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

                  );
                })}
            </div>
          }
        </div>
      </InfiniteScroll>
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
