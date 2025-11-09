import "../Card.css";

export default function BlogCard({
  image,
  category,
  title,
  description,
  authorName,
  authorAvatar,
  date,
}) {
  return (
    <article className="blog-card">
      <img className="card-cover" src={image} alt={title} />

      <div className="card-body">
        <span className="badge">{category}</span>
        <time className="date">{date}</time>

        <h2 className="card-title">{title}</h2>
        <p className="card-desc">{description}</p>

        <div className="card-author">
          <img className="avatar" src={authorAvatar} alt={authorName} />
          <span className="name">{authorName}</span>
        </div>
      </div>
    </article>
  );
}
