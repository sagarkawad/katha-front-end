import { useState, useEffect } from "react";
import Story from "./components/Story";
import Input from "./components/Input";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  async function fetchData() {
    fetch("https://katha-1.onrender.com/api/data")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }

  useEffect(() => {
    // Fetch data from an API
    fetchData();
    // Cleanup function (optional)
    // return () => {
    //   // Perform cleanup tasks (if any)
    //   // For example, unsubscribe from subscriptions, clear timers, etc.
    // };
    const intervalId = setInterval(fetchData, 1000); // Fetch data every 1 second

    return () => {
      clearInterval(intervalId); // Cleanup function to clear the interval when component unmounts
    };
  }, []);

  // function clickHandler(ip) {
  //   // console.log(ip);
  //   if (ip.replace(/\s/g, "") != "") {
  //     setData((prevData) => {
  //       const newData = [
  //         { content: ip, date: new Date().toLocaleString() },
  //         ...prevData,
  //       ];
  //       console.log(newData);
  //       return newData;
  //     });
  //   }
  // }

  async function clickHandler(ip) {
    console.log(data);
    console.log(ip);

    if (ip.trim() != "") {
      try {
        const response = await fetch("https://katha-1.onrender.com/api/data", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ip }),
        });
        if (!response.ok) {
          throw new Error("Failed to post content");
        }

        // Optional: Display confirmation to user
        alert("Content posted successfully!");
      } catch (error) {
        console.error("Error posting content:", error);
        // Handle error (e.g., display error message to user)
      }
    }
  }

  console.log(data);

  return (
    <>
      <Story stories={data} />
      <Input onClickHandler={clickHandler} />
      {/* <p>hello world</p>
      <p>data</p> */}
    </>
  );
}

export default App;
