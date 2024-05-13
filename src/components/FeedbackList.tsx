import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 420,
    badgeLetter: "T",
    companyName: "Talor",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus expedita facilis odit in, iste architecto.",
    daysAgo: 69,
  },
  {
    upvoteCount: 69,
    badgeLetter: "G",
    companyName: "Garl",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus expedita facilis odit in, iste architecto.",
    daysAgo: 23,
  },
  {
    upvoteCount: 593,
    badgeLetter: "D",
    companyName: "Dawson",
    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus expedita facilis odit in, iste architecto.",
    daysAgo: 4,
  },
];

function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((feedbackItem) => {
        return <FeedbackItem feedbackItem={feedbackItem} />;
      })}
    </ol>
  );
}

export default FeedbackList;
