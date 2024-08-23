import React, { createContext, useState } from 'react';

export const NoticesContext = createContext();

export const NoticesProvider = ({ children }) => {
  const [notices, setNotices] = useState([
    { id: '1', title: 'Fetch Title', content: 'Fetch Content', date: 'Fetch Date' },
    { id: '2', title: 'New Policy Update', content: 'Check the new policy update.', date: '7/29/19' },
    { id: '3', title: 'Holiday Announcement', content: 'We will have a holiday on Friday.', date: '7/29/19' },
  ]);

  const addNotice = (title, content) => {
    const newNotice = {
      id: (notices.length + 1).toString(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString(),
    };
    setNotices([newNotice, ...notices]);
  };

  return (
    <NoticesContext.Provider value={{ notices, addNotice }}>
      {children}
    </NoticesContext.Provider>
  );
};
