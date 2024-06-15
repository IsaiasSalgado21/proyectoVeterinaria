// src/context/ReportContext.js
import React, { createContext, useState } from 'react';

export const ReportContext = createContext();

export const ReportProvider = ({ children }) => {
  const [reports, setReports] = useState([]);

  const addReport = (report) => {
    setReports((prevReports) => [...prevReports, report]);
  };

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
};
