import { useState } from "react";
import "./Story.css";

export default function Story({ stories }) {
  //   const [userStories, setUserStories] = useState(stories);
  return (
    <section className="stories">
      {stories.map((user_content, i) => {
        return (
          <div className="story-section" key={i}>
            <h3 key={i}>{user_content.content}</h3>
            <footer>
              Posted on {new Date(user_content.date_column).toLocaleString()}
            </footer>
          </div>
        );
      })}
    </section>
  );
}
