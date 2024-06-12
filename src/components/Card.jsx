export default function Card({ emoji, title, description }) {
    return (
        <div className="card-container">
            <article className="card">
            <div className="box">
        <div className="icon">{emoji}</div>
        <h2 className="title">{title}</h2>
        <p className="details">{description}</p>
    </div>
        </article>
        </div>
    )
}