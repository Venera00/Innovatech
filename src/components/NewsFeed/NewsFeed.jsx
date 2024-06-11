import React, { useState, useEffect } from "react";
import "./NewsFeed.css";

const NewsFeed = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    // Fetch news from an API or use static data for now
    setNews([
      {
        id: 1,
        title: "Launch Event",
        content: "Join us for the Innovatech VR Pro launch event!",
      },
      {
        id: 2,
        title: "Software Update",
        content: "New features added in the latest update.",
      },
    ]);
  }, []);

  return (
    <div className="news-feed">
      <h2>Latest Updates</h2>
      <ul>
        {news.map((item) => (
          <li key={item.id}>
            <h3>{item.title}</h3>
            <p>{item.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsFeed;
