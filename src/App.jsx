import { Header } from './components/header';
import { Sidebar } from './components/sidebar';

import './styles/global.css';

import styles from './App.module.css';

function App() {
  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar />
        <main>Hello World</main>
      </div>
    </div>
  );
}

export default App;
