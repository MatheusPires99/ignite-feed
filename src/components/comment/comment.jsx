import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from '../avatar';

import styles from './styles.module.css';

export const Comment = () => {
  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/MatheusPires99.png" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Matheus Pires</strong>

              <time title="11 de maio às 08:13" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button type="button" title="Deletar comentário">
              <Trash size={24} />
            </button>
          </header>

          <p>Lorem ipsum dolor sit amet, consectetur adip</p>
        </div>

        <footer>
          <button type="button">
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  );
};
