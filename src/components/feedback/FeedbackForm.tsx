import { useState } from "react";
import { MAX_CHARACTERS } from "../../lib/constants";

type FeedbackFormProps = {
  onAddToList: (text: string) => void;
};

function FeedbackForm({ onAddToList }: FeedbackFormProps) {
  const [text, setText] = useState("");

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    setText(newText);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddToList(text);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit} className="form">
      {/* text area is a controlled input using the useState hook.*/}
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="feedbackPlaceholder"
        spellCheck={false}
      />

      <label htmlFor="feedback-textarea">
        enter your feedback here, remember to #hashtag the company!
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
