import { ArrowUpIcon } from "@radix-ui/react-icons";

function FeedbackList() {
    return (
        <ol className="feedback-list">
            <li className="feedback">
                <button>
                    <ArrowUpIcon />
                    <span>593</span>
                </button>
                <div>
                    <p>B</p>
                </div>
                <div>
                    <p>Bytegrad</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus expedita facilis odit in, iste architecto.</p>
                </div>
                <p>4d</p>
            </li>
        </ol>
    );
}

export default FeedbackList;