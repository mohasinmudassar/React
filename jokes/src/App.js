import React from 'react';
import './index.css';
import Jokes from './Jokes';

export default function App() {
  return (
    <div >
      <Joke
        setup: "How did the hacker escape the police?"
        punchline: "He just ransomware!"
      />
      <Joke
        setup: "Why don't pirates travel on mountain roads?"
        punchline: "Scurvy."
      />
      <Joke
        setup: "Why do bees stay in the hive in the winter?"
        punchline: "Swarm."
      />
      <Joke
        setup: "What's the best thing about Switzerland?"
        punchline: "I don't know, but the flag is a big plus!"
      />
    </div>
  );
}
