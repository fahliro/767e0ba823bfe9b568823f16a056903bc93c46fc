import React, { useState, createContext, useContext } from "react";

const MyContext = createContext();

export const useMyContext = () => {
  const context = useContext(MyContext);
  const [modalVisible, setModalVisible] = context.modalVisible;
  const [activeTab, setActiveTab] = context.activeTab;
  const [data, setData] = context.data;

  const handleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  const handleActiveTab = (value) => {
    setActiveTab(value);
  };

  const handleData = (item) => {
    setData([...data, item]);
  };

  return {
    handleModalVisible,
    modalVisible,
    handleActiveTab,
    activeTab,
    handleData,
    data,
  };
};

export const MyProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState([]);

  return (
    <MyContext.Provider
      value={{
        modalVisible: [modalVisible, setModalVisible],
        activeTab: [activeTab, setActiveTab],
        data: [data, setData],
      }}
    >
      {children}
    </MyContext.Provider>
  );
};
