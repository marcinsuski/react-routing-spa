import {useHistory} from 'react-router-dom';
import React from 'react'
import QuoteForm from '../components/quotes/QuoteForm';


const NewQuote = () => {
  const history = useHistory();

  const addQUoteHandler = quoteData => {
    console.log(quoteData)

    history.push('/quotes');
  }

  return (
    <QuoteForm onAddQuote={addQUoteHandler}/>
  )
}

export default NewQuote