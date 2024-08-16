import { useState, useEffect } from 'react';

const useBookmark = (storageKey = 'bookmarks') => {
  const [bookmarkedItems, setBookmarkedItems] = useState([]);

  // Load bookmarked items from local storage when the hook is initialized
  useEffect(() => {
    const savedBookmarks = JSON.parse(localStorage.getItem(storageKey)) || [];
    setBookmarkedItems(savedBookmarks);
  }, [storageKey]);

  const toggleBookmark = (itemId) => {
    let updatedBookmarks;

    if (bookmarkedItems.includes(itemId)) {
        // Remove the item from bookmarks
        updatedBookmarks = bookmarkedItems.filter(id => id !== itemId);
    } else {
        // Add the item to bookmarks
        updatedBookmarks = [...bookmarkedItems, itemId];
    }

    // Save updated bookmarks to local storage
    localStorage.setItem(storageKey, JSON.stringify(updatedBookmarks));
    setBookmarkedItems(updatedBookmarks);
  };

  return { bookmarkedItems, toggleBookmark };
}

export default useBookmark;
