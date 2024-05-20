import Container from "./components/layout/Container";
import HashtagList from "./components/hashtag/HashtagList";
import { useEffect } from "react";
import { useFeedbackItemsStore } from "./stores/feedbackItemsStore";

function App() {
  const fetchFeedbackItems = useFeedbackItemsStore(
    (state) => state.fetchFeedbackItems
  );

  useEffect(() => {
    fetchFeedbackItems();
  }, [fetchFeedbackItems]);

  return (
    <div className="app">
      <Container />
      <HashtagList />
    </div>
  );
}

export default App;
