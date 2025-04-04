import { useParams } from 'react-router';
import NewsList from './NewsList';
import { useEffect, useState } from 'react';

const NewsPage = () => {
    const [articles, setArticles] = useState([]);

    console.log(useParams());
    const param = useParams();
    const path = param['*'] || 'all';
    console.log(path);

    useEffect(() => {
        async function get() {
            const url = 'https://newsapi.org/v2/top-headlines?country=us&apiKey=9f5baf7d9f3f42879a20d7d19d9886e4';
            const res = await fetch(url);
            const data = await res.json();
            setArticles(data.articles);
        }
        get();
    }, []);

    return (
        <>
            <NewsList articles={articles}/>
        </>
    );
};

export default NewsPage;
