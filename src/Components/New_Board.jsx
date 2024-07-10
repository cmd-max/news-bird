import { useEffect, useState } from "react";
import { NewItems } from "./NewItems";


export const New_Board = ({}) => {
    const [articles,setArticle] = useState([]);
    useEffect(()=>{
        let url =` https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&apiKey=${import.meta.env.VITE_API_KEY}`;
        fetch(url).then(response=>response.json()).then(data=>setArticle(data.articles));
    },[])
  return (
    <div>
    
    {articles.map((news,index)=>{
        return<NewItems key={index} title={news.title}  description={news.description} src={news.urlToImage} url={news.url}/>
    })}
    </div>
  )
}
