import styles from './NewsItem.module.css';

const NewsItem = ({ article }) => {
    if (!article) return null; // 데이터가 없으면 렌더링 안 함

    const { title, description, url, urlToImage } = article;

    return (
        <div className={styles.block}>
            {urlToImage && (
                <div className={styles.thumbnail}>
                    <a href={url} target="_blank" rel="noopener noreferrer">
                        <img src={urlToImage} alt="thumbnail" />
                    </a>
                </div>
            )}
            <div className={styles.contents}>
                <h2>
                    <a href={url} target="_blank" rel="noopener noreferrer">{title}</a>
                </h2>
                <p>{description || '설명이 없습니다.'}</p>
            </div>
        </div>
    );
};

export default NewsItem;