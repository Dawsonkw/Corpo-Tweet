import { ArrowUpIcon } from "@radix-ui/react-icons";

type FeedbackItem = {
  upvoteCount: number;
  badgeLetter: string;
  companyName: string;
  text: string;
  daysAgo: number;
};

type FeedbackItemProps = { feedbackItem: FeedbackItem };

function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  return (
    <li className="feedback">
      <button>
        <ArrowUpIcon />
        <span>{feedbackItem.upvoteCount}</span>
      </button>
      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>
      <div>
        <p>{feedbackItem.companyName}</p>
        <p>{feedbackItem.text}</p>
      </div>
      <p>{feedbackItem.daysAgo}d</p>
    </li>
  );
}

export default FeedbackItem;
