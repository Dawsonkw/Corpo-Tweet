import FeedbackForm from "./FeedbackForm";
import Logo from "./Logo";
import PageHeading from "./PageHeading";
import Pattern from "./Pattern";


function Header() {
    return (
        <div >
            <Pattern />
            <Logo /> 
            <PageHeading />
            <FeedbackForm />
        </div>
    );
}

export default Header;