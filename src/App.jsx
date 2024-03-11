import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';
import { PrimaryButton } from './components/atoms/button/PrimaryButton';
import { SecondaryButton } from './components/atoms/button/SecondaryButton';
import { SearchInput } from './components/molecules/SearchInput';
import { UserCard } from './components/organisms/user/UserCard';

const user = {
  name: '太郎',
  image: 'https://source.unsplash.com/black-pug-with-gray-knit-scarf-Mv9hjnEUHR4',
  email: '12345@example.com',
  phone: '090-1234-5678',
  company: {
    name: 'test株式会社'
  },
  website: 'https://google.com'
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <PrimaryButton>test</PrimaryButton>
      <SecondaryButton>検索</SecondaryButton>
      <br />
      <SearchInput />
      <UserCard user={user}/>
    </div>
  );
}

export default App;
