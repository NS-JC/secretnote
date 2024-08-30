import React, { createContext, useState } from 'react';
import Camera from '../img/Camera.png';

export const NoticesContext = createContext();

export const NoticesProvider = ({ children }) => {
  const [notices, setNotices] = useState([
    { id: '1', profilePicture: Camera, title: 'Fetch Title', content: 'Fetch Content', date: 'Fetch Date' },
    { id: '2', profilePicture: Camera, title: 'New Policy Update', content: 'Check the new policy update.', date: '7/29/19' },
    { id: '3', profilePicture: Camera, title: 'Holiday Announcement', content: 'We will have a holiday on Friday.', date: '7/29/19' },
  ]);

  const addNotice = (title, content, profilePicture) => {
    const newNotice = {
      id: (notices.length + 1).toString(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString(),
      profilePicture: profilePicture || Camera, // Temporary image URL // Use a default profile picture if not provided
    };
    setNotices([newNotice, ...notices]);
  };

  return (
    <NoticesContext.Provider value={{ notices, addNotice }}>
      {children}
    </NoticesContext.Provider>
  );
};
