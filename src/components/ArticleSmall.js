import React from 'react';
//Because I need ALL the articles, not just the one
//Could pass this from state
import articles from '../articles/articles'
import './stylesheets/ArticleSmall.css'
import { Link } from 'react-router-dom'

function ArticleSmall(
  { setSingleArticle, articleToSingle, setCategory,
    image, title, category, date, short }) {
  return (
    <React.Fragment>

      <article id='articleSmall'>
        {/* There must be a better way... */}
        <Link to={`/blog/category/${category}`}>

          {category === 'JavaScript' && <i
            onClick={() => setCategory(articles.filter(article => article.category === category))}
            class="fab fa-js-square fa-3x"></i>}

          {category === 'Python' && <i
            onClick={() => setCategory(articles.filter(article => article.category === category))}
            class="fab fa-python fa-3x"></i>}

          {category === 'env' && <i
            onClick={() => setCategory(articles.filter(article => article.category === category))}
            class="fab fa-laptop-code fa-3x"></i>}
        </Link>

        <div id="titleDate">
          <Link to={`/blog/${title}`}>
            <h1 onClick={() => setSingleArticle([articleToSingle])}>
              {title}</h1>
          </Link>

          <p className='specialPositionSmall'>
            <small><i><span className='color'>Posted: </span>
              {date}</i></small></p>
        </div>

        <p id='articleShort'>{short}</p>
      </article>
    </React.Fragment >
  );
}

export default ArticleSmall;