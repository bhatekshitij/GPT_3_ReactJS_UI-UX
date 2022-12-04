import React from 'react'
import './article.css'



const Article = ({ imgUrl, Date, Text }) => {
    return (
        <div className='gpt3__blog-container_article'>
            <div className="gpt3__blog-container_article-image">
                <img src={imgUrl} alt="Blog Image" />
            </div>
            <div className="gpt3__blog-container_article-content">
                <div>
                    <p>{Date}</p>
                    <h3>{Text}</h3>
                </div>
                <p>Read Full Article</p>
            </div>
        </div>
    )
}

export default Article