import React, { useEffect, useState } from 'react';
import { Container } from 'semantic-ui-react';
import FlashcardList from './components/FlashcardList';
import './index.css';
import axios from 'axios';

export default function Index() {
  const [flashcards, setFlashcards] = useState([]);
  useEffect(() => {
    axios.get('https://opentdb.com/api.php?amount=10').then((res) => {
      const data = res.data.results.map((row, index) => {
        // console.log(index+'-'+Date.now())
        const id = `${index}-${Date.now()}`;
        const options = [...row.incorrect_answers, row.correct_answer];
        return {
          id,
          question: row.question,
          answer: row.correct_answer,
          options,
        };
      });
      setFlashcards(data);

      console.log(data);
    });
  }, []);
  // const flashcards = [
  //   {
  //     id:'1',
  //     question:'what is 2 + 2?',
  //     answer:'4',
  //     options:[
  //       '1','2','3','4'
  //     ]
  //   },
  //   {
  //     id:'2',
  //     question:'q2',
  //     answer:'a2',
  //     options:[
  //       '2','4','6','8'
  //     ]
  //   }
  //   ,
  //   {
  //     id:'3',
  //     question:'Bird',
  //     answer:'鳥',
  //     options:[
  //       '狗','獅子','老虎','狒狒'
  //     ]
  //   }
  // ]

  return (
    <Container>
      <FlashcardList flashcards={flashcards} />
    </Container>
  );
}
