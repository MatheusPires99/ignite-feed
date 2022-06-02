import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

import './styles/global.css';

import styles from './App.module.css';
import { Post } from './components/post/post';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          <Post />
        </main>
      </div>
    </div>
  );
}

export default App;
