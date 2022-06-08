import { format, formatDistanceToNow } from 'date-fns';
import ptBr from 'date-fns/locale/pt-BR';
import { useState } from 'react';

import { Avatar } from '../avatar';
import { Comment } from '../comment';

import styles from './styles.module.css';

export const Post = ({ author, content, publishedAt }) => {
  const [comments, setComments] = useState(['Post muito banaca, hein?!']);
  const [newComment, setNewComment] = useState('');

  const handleCreateNewComment = e => {
    e.preventDefault();

    setComments(state => [...state, newComment]);
    setNewComment('');
  };

  const handleNewCommentChange = e => {
    e.target.setCustomValidity('');
    setNewComment(e.target.value);
  };

  const handleNewCommentInvalid = e => {
    e.target.setCustomValidity('Esse campo é obrigatório');
  };

  const handleDeleteComment = commentToDelete => {
    const commentsWithoutDeletedOne = comments.filter(
      comment => comment !== commentToDelete,
    );

    setComments(commentsWithoutDeletedOne);
  };

  const dateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {
    locale: ptBr,
  });

  const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true,
  });

  const isNewCommentEmpty = newComment.length === 0;

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time title={dateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>

      <div className={styles.content}>
        {content.map(line => {
          if (line.type === 'link') {
            return (
              <a key={line.content} href="#">
                {line.content}
              </a>
            );
          }

          return <p key={line.content}>{line.content}</p>;
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>
        <textarea
          name="comment"
          placeholder="Deixe um comentário"
          value={newComment}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />
        <footer>
          <button type="submit" disabled={isNewCommentEmpty}>
            Publicar
          </button>
        </footer>
      </form>

      <div className={styles.commentsList}>
        {comments.map(comment => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={() => handleDeleteComment(comment)}
          />
        ))}
      </div>
    </article>
  );
};
