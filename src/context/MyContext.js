import React, { useState, createContext, useContext } from "react";

const MyContext = createContext();

export const useMyContext = () => {
  const context = useContext(MyContext);
  const [modalVisible, setModalVisible] = context.modalVisible;
  const [activeTab, setActiveTab] = context.activeTab;

  const handleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  const handleActiveTab = (value) => {
    setActiveTab(value);
  };

  return {
    handleModalVisible,
    modalVisible,
    handleActiveTab,
    activeTab,
  };
};

export const MyProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);

  return (
    <MyContext.Provider
      value={{
        modalVisible: [modalVisible, setModalVisible],
        activeTab: [activeTab, setActiveTab],
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
