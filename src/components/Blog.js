import React from 'react'
import MenuBar from './MenuBar'
import ArticleSmall from './ArticleSmall'
import BottomSection from './BottomSection'



function Blog({ articles, setSingleArticle, setCategory }) {
  return (
    <React.Fragment>

      <MenuBar />

      <div style={{ marginTop: 120 + 'px' }}>

        {articles.map(article => (
          <ArticleSmall
            setSingleArticle={setSingleArticle}
            setCategory={setCategory}
            articleToSingle={article}
            articles={articles}
            image={article.image}
            title={article.title}
            category={article.category}
            date={article.date}
            short={article.short}
          />
        ))}

      </div>
      <BottomSection />
    </React.Fragment>
  );
}

export default Blog