import axios from 'axios';
import { useState } from 'react';
import UserCard from './components/UserCard/UserCard';
import { User } from './interfaces';

const App = () => {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);


  const handleSearch = async () => {
    try {
      const response = await axios.get<User>(`https://api.github.com/users/${username}`);
      setUser(response.data);
    } catch (error) {
      setUser(null);
      console.log('User not found:', error);
    }
  };

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <input
        type="text"
        value={username}
        onChange={(e) => handleUserName(e)}
      />
      <button onClick={handleSearch}>Search</button>
      {user && <UserCard user={user} />}
    </div>
  );
};

export default App;
