import { useState } from "preact/hooks";

export interface Tab {
  label: string;
  questions: Question[];
}

export interface Question {
  question: string;
  answer: string;
}

export function useTabs(initialTabs: Tab[], initialMaxVisibleTabs: number) {
  const [activeTab, setActiveTab] = useState(0);
  const [visibleTabs, setVisibleTabs] = useState<number[]>(
    initialTabs?.map(() => initialMaxVisibleTabs) || []
  );

  const handleShowMore = () => {
    setVisibleTabs((prevVisibleTabs) => {
      const newVisibleTabs = [...prevVisibleTabs];
      newVisibleTabs[activeTab] += initialMaxVisibleTabs;
      return newVisibleTabs;
    });
  };

  return {
    activeTab,
    setActiveTab,
    visibleTabs,
    handleShowMore,
  };
}
