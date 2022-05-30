import { useState } from "react";
import { Tab } from "@headlessui/react";
import { useRecoilState } from "recoil";
import { tabAtom } from "../atoms/atomTabState";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function FilterType() {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [tabs] = useState(["All", "ReactJs", "GraphQL", "Blockchain"]);
  const [_, setSelectedTab] = useRecoilState(tabAtom);

  const handleTabChange = (index) => {
    setSelectedIndex(index);
    setSelectedTab(tabs[selectedIndex]);
  };

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={handleTabChange}>
      <Tab.List className="flex space-x-9 justify-center text-base">
        {tabs.map((tab) => (
          <Tab
            key={tab}
            className={({ selected }) =>
              classNames(
                "focus:outline-none p-2",
                selected ? "font-bold text-[1.6rem]" : "filterType"
              )
            }
          >
            {tab}
          </Tab>
        ))}
      </Tab.List>
    </Tab.Group>
  );
}

export default FilterType;
