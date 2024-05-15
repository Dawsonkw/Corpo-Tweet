import { useEffect, useState } from "react";
import Container from "./components/layout/Container";
import HashtagList from "./components/HashtagList";
import { TFeedbackItem } from "./lib/types";

function App() {
  const [feedbackItems, setFeedbackItems] = useState<TFeedbackItem[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleAddToList = async (text: string) => {
    const words = text.split(" ");
    const hashtagWord = words.find((word) => word.startsWith("#"));

    let companyName = "";
    if (hashtagWord) {
      companyName = hashtagWord.substring(1);
    }

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      badgeLetter: companyName.charAt(0).toUpperCase(),
      company: companyName,
    };


    setFeedbackItems([...feedbackItems, newItem]);

    await fetch("https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks", {
      method: "POST",
      body: JSON.stringify(newItem),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      }
    });
  };

  useEffect(() => {
    const fetchFeedbackItems = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(
          "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks"
        );

        if (!response.ok) {
          throw new Error();
        }

        const data = await response.json();
        setFeedbackItems(data.feedbacks);
      } catch (error) {
        setErrorMessage("Failed to load feedback items");
      }
      setIsLoading(false);
    };

    fetchFeedbackItems();
  }, []);

  return (
    <div className="app">
      <Container
        feedbackItems={feedbackItems}
        isLoading={isLoading}
        errorMessage={errorMessage}
        handleAddToList={handleAddToList}
      />

      <HashtagList />
    </div>
  );
}

export default App;
