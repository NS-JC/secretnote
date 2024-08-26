import React, { createContext, useState } from 'react';

export const StudyContext = createContext();

export const StudyProvider = ({ children }) => {
  const [studyNotes, setStudyNotes] = useState([
    { id: '1', title: '문제', content: 'Actually plan on our...', date: '2024/07/07' },
    { id: '2', title: '문제', content: 'bbb', date: '2024/07/07' },
    { id: '3', title: '문제', content: 'aaa', date: '2024/07/06' },
    { id: '4', title: '문제', content: 'ddd', date: '2024/07/05' },
    { id: '5', title: '문제', content: 'ccc', date: '2024/07/05' },
  ]);

  const addStudy = (title, content) => {
    const newStudy = {
      id: (studies.length + 1).toString(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString(),
    };
    setStudyNotes([newStudy, ...studies]);
  };

  return (
    <StudyContext.Provider value={{ studyNotes, addStudy }}>
      {children}
    </StudyContext.Provider>
  );
};
