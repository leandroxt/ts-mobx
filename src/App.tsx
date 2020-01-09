import React, { FC, ReactElement, useContext, useState, ChangeEvent } from 'react';
import { observer } from 'mobx-react';
import './App.css';

import { SuggestionsStore } from './store';

const App: FC = observer((): ReactElement => {
  const { suggestions, fetchSuggestions } = useContext(SuggestionsStore);

  const [suggestionText, setSuggestionText] = useState('');

  function onChangeSuggestionText(e: ChangeEvent<HTMLInputElement>): void {
    const suggText = e.currentTarget.value;
    setSuggestionText(() => suggText);
    fetchSuggestions(suggText);
  }

  return (
    <div className="App">
      <div className="input">
        <input type="text" value={suggestionText} onChange={onChangeSuggestionText} />
        <div className="size">Quantidade de municípios: </div>
      </div>

      <ul>
        {suggestions.map(({ id, text }) => (
          <li key={id}>{text}</li>
        ))}
      </ul>

      {suggestions.length === 0 && (
        <h3>Não há dados</h3>
      )}
    </div>
  );
});

export default App;
