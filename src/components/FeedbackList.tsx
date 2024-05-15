import FeedbackItem from "./FeedbackItem";
import Spinner from "./Spinner";
import ErrorMessage from "./ErrorMessage";
import { TFeedbackItem } from "../lib/types";

type feedbackListProps = {
  feedbackItems: TFeedbackItem[];
  isLoading: boolean;
  errorMessage: string;
};


function FeedbackList({
  feedbackItems,
  isLoading,
  errorMessage
}: feedbackListProps) {

  return (
    <ol className="feedback-list">
      {isLoading && <Spinner />}
      {errorMessage && <ErrorMessage message={errorMessage} />}

      {feedbackItems.map((feedbackItems) => {
        return (
          <FeedbackItem key={feedbackItems.id} feedbackItems={feedbackItems} />
        );
      })}
    </ol>
  );
}

export default FeedbackList;
