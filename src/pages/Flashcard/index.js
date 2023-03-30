import React from 'react'
import { Container } from 'semantic-ui-react'
import FlashcardList from './components/FlashcardList'
import './index.css'

export default function index() {

  const flashcards = [
    {
      id:'1',
      question:'what is 2 + 2?',
      answer:'4',
      options:[
        '1','2','3','4'
      ]
    },
    {
      id:'2',
      question:'q2',
      answer:'a2',
      options:[
        '2','4','6','8'
      ]
    }
  ]

  return (
    <Container><FlashcardList flashcards={flashcards}/></Container>
  )
}
