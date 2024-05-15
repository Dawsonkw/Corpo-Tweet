import { ArrowUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../lib/types";


type FeedbackItemProps = { feedbackItems: TFeedbackItem };

function FeedbackItem({ feedbackItems }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <ArrowUpIcon />
        <span>{feedbackItems.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItems.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItems.companyName}</p>
        <p>{feedbackItems.text}</p>
      </div>
      <p>{feedbackItems.daysAgo}d</p>
    </li>
  );
}

export default FeedbackItem;
