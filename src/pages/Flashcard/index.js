import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import FlashcardList from './components/FlashcardList';
import './index.css';
import axios from 'axios';

export default function Index() {
  const [flashcards, setFlashcards] = useState([]);
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=15').then((res) => {
      const data = res.data.results.map((row, index) => {
        // console.log(index+'-'+Date.now())
        const id = `${index}-${Date.now()}`;
        const options = [
          ...row.incorrect_answers.map((a) => decodeString(a)),
          row.correct_answer,
        ];
        return {
          id,
          question: decodeString(row.question),
          answer: row.correct_answer,
          options: options.sort(() => Math.random()-0.5 ),
        };
      });
      setFlashcards(data);
      // Math.random() 產生 0-1的小數, -0.5 就會有一半是正,一半是負
      console.log(Math.random()-0.5);
    });
  }, []);

  // 將一些內容為 html 符號轉成純文字
  function decodeString(str) {
    const textArea = document.createElement('textarea');
    textArea.innerHTML = str;
    return textArea.value;
  }

  return (
    <Container>
      <FlashcardList flashcards={flashcards} />
    </Container>
  );
}
