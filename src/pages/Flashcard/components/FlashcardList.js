import React from 'react';
import Flashcard from './Flashcard';

export default function FlashcardList({ flashcards }) {
  return (
    <div>
      {flashcards.map((flashcard) => {
        return <div><Flashcard flashcard={flashcard}/></div>;
      })}
    </div>
  );
}
