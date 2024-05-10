function FeedbackForm() {
  return (
    <form className="form">
      <textarea
        id="feedback-textarea"
        placeholder="feedbackPlaceholder"
        spellCheck={false}
      />
      <label htmlFor="feedback-textarea">
        enter your feedback here, remember to #hashtag the company!
      </label>
      <div>
        <p className="u-italic">150</p>
        <button>
          <span>Submit</span>
        </button>
      </div>
    </form>
  );
}

export default FeedbackForm;
