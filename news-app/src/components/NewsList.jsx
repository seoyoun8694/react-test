import NewsItem from './NewsItem';
import styles from './NewsList.module.css';

const NewsList = ({articles}) => {
    return (
        <div className={styles.block}>
            {articles.map((article, index) => (
                <NewsItem key={index} article={article} />
            ))}
        </div>
    );
};

export default NewsList;
