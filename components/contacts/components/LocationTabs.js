"use client";
import React, { useState } from "react";
import ContactForm from "./ContactForm";

const ContactQueryForm = () => {
  const [activeTab, setActiveTab] = useState(1);

  const tabsElement = [
    {
      id: 1,
      tabName: "Ask a question",
      tabContent: <ContactForm />,
    },
    {
      id: 2,
      tabName: "Help logging in",
      tabContent: (
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="First Name*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Last Name*"
            />
            <input
              type="email"
              className="p-2 border border-gray-300 rounded"
              placeholder="Work Email Address*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Company Name*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Job Title*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Phone Number*"
            />
          </div>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>India</option>
            <option>USA</option>
          </select>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="query" value="content" />
              <span>Content/Data Question</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="query" value="media" />
              <span>Media/Press Inquiries</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="query" value="other" />
              <span>Other</span>
            </label>
          </div>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Comments"
          ></textarea>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>
              Yes, I would like to receive marketing communications from AMR.
              AMR respects my data security as described in the Privacy Policy.
            </span>
          </label>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
          >
            Submit
          </button>
        </form>
      ),
    },
    {
      id: 3,
      tabName: "Membership Inquiries",
      tabContent: (
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="First Name*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Last Name*"
            />
            <input
              type="email"
              className="p-2 border border-gray-300 rounded"
              placeholder="Work Email Address*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Company Name*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Job Title*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Phone Number*"
            />
          </div>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>India</option>
            <option>USA</option>
          </select>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="query" value="content" />
              <span>Content/Data Question</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="query" value="media" />
              <span>Media/Press Inquiries</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="query" value="other" />
              <span>Other</span>
            </label>
          </div>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Comments"
          ></textarea>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>
              Yes, I would like to receive marketing communications from AMR.
              AMR respects my data security as described in the Privacy Policy.
            </span>
          </label>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
          >
            Submit
          </button>
        </form>
      ),
    },
    {
      id: 4,
      tabName: "Other",
      tabContent: (
        <form className="space-y-4">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="First Name*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Last Name*"
            />
            <input
              type="email"
              className="p-2 border border-gray-300 rounded"
              placeholder="Work Email Address*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Company Name*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Job Title*"
            />
            <input
              type="text"
              className="p-2 border border-gray-300 rounded"
              placeholder="Phone Number*"
            />
          </div>
          <select className="w-full p-2 border border-gray-300 rounded">
            <option>India</option>
            <option>USA</option>
          </select>
          <div className="flex space-x-4">
            <label className="flex items-center space-x-2">
              <input type="radio" name="query" value="content" />
              <span>Content/Data Question</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="query" value="media" />
              <span>Media/Press Inquiries</span>
            </label>
            <label className="flex items-center space-x-2">
              <input type="radio" name="query" value="other" />
              <span>Other</span>
            </label>
          </div>
          <textarea
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Comments"
          ></textarea>
          <label className="flex items-center space-x-2">
            <input type="checkbox" />
            <span>
              Yes, I would like to receive marketing communications from AMR.
              AMR respects my data security as described in the Privacy Policy.
            </span>
          </label>
          <button
            type="submit"
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded"
          >
            Submit
          </button>
        </form>
      ),
    },
  ];

  return (
    <div className="w-full overflow-hidden rounded shadow-lg bg-contact-form">
      <div className="flex mb-4">
        {tabsElement.map((tab) => (
          <button
            key={tab.id}
            className={`px-4 py-2 text-sm w-full ${
              activeTab === tab.id
                ? "bg-white text-black"
                : "bg-primary text-white"
            }
            ${tab.id !== tabsElement?.length && "border-r-2 border-success"}
            `}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.tabName}
          </button>
        ))}
      </div>
      <div className="p-4">
        {tabsElement.map(
          (tab) =>
            activeTab === tab.id && <div key={tab.id}>{tab.tabContent}</div>
        )}
      </div>
    </div>
  );
};

export default ContactQueryForm;
