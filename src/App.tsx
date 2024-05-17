import Container from "./components/layout/Container";
import HashtagList from "./components/hashtag/HashtagList";

import FeedbackItemsContextProvider from "./components/contexts/FeedbackItemsContextProvider";

function App() {
  return (
    <div className="app">
      <FeedbackItemsContextProvider>
        <Container />
        <HashtagList />
      </FeedbackItemsContextProvider>
    </div>
  );
}

export default App;
