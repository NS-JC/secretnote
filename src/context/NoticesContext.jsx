import React, { createContext, useState } from 'react';
import profile_default from '../img/profile_default.png';

export const NoticesContext = createContext();

export const NoticesProvider = ({ children }) => {
  const [notices, setNotices] = useState([
    {
      id: '1',
      profilePicture: profile_default,
      title: 'Fetch Title',
      content: 'Fetch Content',
      date: 'Fetch Date',
      userId: '아이디1',
      likes: 1,
      comments: 1,
      board: '인기글 게시판',
    },
    {
      id: '2',
      profilePicture: profile_default,
      title: 'New Policy Update',
      content: 'Check the new policy update.',
      date: '7/29/19',
      userId: '아이디2',
      likes: 5,
      comments: 3,
      board: '자유 게시판',
    },
    {
      id: '3',
      profilePicture: profile_default,
      title: 'Holiday Announcement',
      content: 'We will have a holiday on Friday.',
      date: '7/29/19',
      userId: '아이디3',
      likes: 3,
      comments: 2,
      board: '공부 게시판',
    },
  ]);

  const addNotice = (title, content, profilePicture, userId, board) => {
    const newNotice = {
      id: (notices.length + 1).toString(),
      title: title,
      content: content,
      date: new Date().toLocaleDateString(),
      profilePicture: profilePicture || profile_default, // Temporary image URL // Use a default profile picture if not provided
      userId,
      likes: 0,
      comments: 0,
      board, // Assign to the selected board
    };
    setNotices([newNotice, ...notices]);
  };

  return (
    <NoticesContext.Provider value={{ notices, addNotice }}>
      {children}
    </NoticesContext.Provider>
  );
};
