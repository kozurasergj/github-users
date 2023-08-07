import axios from 'axios';
import { useState } from 'react';
import UserCard from './components/UserCard/UserCard';
import { User } from './interfaces';

const App = () => {
  const [username, setUsername] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<boolean>(false);

  const handleSearch = async () => {
    try {
      const response = await axios.get<User>(`https://api.github.com/users/${username}`);
      setUser(response.data);
      setError(false);
    } catch (error) {
      setUser(null);
      setError(true);
    }
  };

  const handleUserName = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(e.target.value)
  }

  return (
    <section>
      <header className='heading'>GitHub User Search</header>
      <main>
        <input
          className='input'
          type="text"
          value={username}
          onChange={(e) => handleUserName(e)}
        />
        {error && <h2 className='error'>User not found</h2>}
        <button
          className='button'
          onClick={handleSearch}>
          Search
        </button>
        {user && <UserCard user={user} />}
      </main>
    </section>
  );
};

export default App;
