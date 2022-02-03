import React, { useState, createContext, useContext } from "react";

const MyContext = createContext();

export const useMyContext = () => {
  const context = useContext(MyContext);
  const [modalVisible, setModalVisible] = context.modalVisible;

  const handleModalVisible = () => {
    setModalVisible((prev) => !prev);
  };

  return {
    handleModalVisible,
    modalVisible,
  };
};

export const MyProvider = ({ children }) => {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <MyContext.Provider
      value={{ modalVisible: [modalVisible, setModalVisible] }}
    >
      {children}
    </MyContext.Provider>
  );
};
