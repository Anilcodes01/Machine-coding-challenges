import { useState } from "react";
import Profile from "./Profile";
import Interests from "./Interests";
import Settings from "./Settings";

export default function Tabform() {
  const [data, setData] = useState({
    name: "Anil",
    age: "20",
    email: "anilcodes01@gmail.com",
    interests: [],
    theme: "dark",
  });

  const [activeTab, setActiveTab] = useState(0);
  const [errors, setErrors] = useState({});

  const validateInterests = (data, setErrors) => {
    const err = {};
    if (data.interests.length < 1) {
      err.interests = "Select at least one interest";
    }
    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: (data, setErrors) => {
        const err = {};
        if (!data.name || data.name.length < 2) {
          err.name = "Name is not valid";
        }
        if (!data.age || data.age < 12) {
          err.age = "Age is not valid";
        }
        if (!data.email || data.email.length < 5 || !data.email.includes("@")) {
          err.email = "Email is not valid";
        }
        setErrors(err);
        return Object.keys(err).length === 0;
      },
    },
    {
      name: "Interests",
      component: Interests,
      validate: (data, setErrors) => validateInterests(data, setErrors),
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => true,
    },
  ];

  const ActiveTabComp = tabs[activeTab].component;

  const handleNextClick = () => {
    if (!tabs[activeTab].validate || tabs[activeTab].validate(data, setErrors)) {
      setActiveTab((prev) => prev + 1);
    }
  };

  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };

  const handleSubmitClick = () => {
    const isValid = tabs.every((tab) => !tab.validate || tab.validate(data, setErrors));
    if (isValid) {
      console.log("Final Data:", data);
    } else {
      console.log("Fix errors before submitting");
    }
  };

  return (
    <div>
      <div className="flex gap-4">
        {tabs.map((t, index) => (
          <div
            key={index}
            onClick={() => setActiveTab(index)}
            className="border rounded-lg px-4 cursor-pointer"
          >
            {t.name}
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center mt-4 border p-5">
        <ActiveTabComp data={data} setData={setData} errors={errors} />
      </div>

      <div className="flex gap-5 mt-5">
        {activeTab > 0 && (
          <button onClick={handlePrevClick} className="border px-2 rounded-lg ">
            Prev
          </button>
        )}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick} className="border px-2 rounded-lg ">
            Next
          </button>
        )}
        {activeTab === tabs.length - 1 && (
          <button
            onClick={handleSubmitClick}
            className="border px-2 rounded-lg "
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}
