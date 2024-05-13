import { useState } from "react";
import { MAX_CHARACTERS } from "../lib/constants";

function FeedbackForm() {
  const [text, setText] = useState("");

  const charCount = MAX_CHARACTERS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if (newText.length > MAX_CHARACTERS) {
      return;
    }

    setText(newText);
  };

  return (
    <form className="form">
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
