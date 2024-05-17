import { createContext, useMemo, useState } from "react";
import { TFeedbackItem } from "../../lib/types";
import { useFeedbackItems } from "../../lib/hooks";

type FeedbackItemsContextProviderProps = {
  children: React.ReactNode;
};
type TFeedbackItemsContext = {
  isLoading: boolean;
  errorMessage: string;

  companyList: string[];
  handleAddToList: (text: string) => void;
  filteredFeedbackItems: TFeedbackItem[];
  handleSelectCompany: (company: string) => void;
};

export const FeedbackItemsContext = createContext<TFeedbackItemsContext | null>(
  null
);

export default function FeedbackItemsContextProvider({
  children,
}: FeedbackItemsContextProviderProps) {
  const { feedbackItems, isLoading, setFeedbackItems, errorMessage } =
    useFeedbackItems();
  const [selectedCompany, setSelectedCompany] = useState<string>("");

  // maps the hashtag from the feedback items and filters out the duplicate companies
  const companyList = useMemo(
    () =>
      feedbackItems
        .map((item) => item.company)
        .filter((company, index, array) => {
          return array.indexOf(company) === index;
        }),
    [feedbackItems]
  );

  const filteredFeedbackItems = useMemo(
    () =>
      selectedCompany
        ? feedbackItems.filter(
            (feedbackItem) => feedbackItem.company === selectedCompany
          )
        : feedbackItems,
    [feedbackItems, selectedCompany]
  );

  const handleAddToList = async (text: string) => {
    const words = text.split(" ");
    const hashtagWord = words.find((word) => word.startsWith("#"));

    let companyName = "";
    if (hashtagWord) {
      companyName = hashtagWord.substring(1);
    }

    const newItem: TFeedbackItem = {
      id: new Date().getTime(),
      text: text,
      upvoteCount: 0,
      daysAgo: 0,
      badgeLetter: companyName.charAt(0).toUpperCase(),
      company: companyName,
    };

    setFeedbackItems([...feedbackItems, newItem]);

    await fetch(
      "https://bytegrad.com/course-assets/projects/corpcomment/api/feedbacks",
      {
        method: "POST",
        body: JSON.stringify(newItem),
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      }
    );
  };

  const handleSelectCompany = (company: string) => {
    setSelectedCompany(company);
  };

  return (
    <FeedbackItemsContext.Provider
      value={{
        isLoading,
        errorMessage,
        companyList,
        handleAddToList,
        filteredFeedbackItems,
        handleSelectCompany,
      }}
    >
      {children}
    </FeedbackItemsContext.Provider>
  );
}
