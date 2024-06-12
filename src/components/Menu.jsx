export default function Menu() {
    const options = [
       {name: "Get Started",
       color: "purple",},
        {name: "Why Vite?",
        color: "grey"},
        {name: "View on GitHub",
        color: "grey"},
        {name: "🎉 ViteConf 2023",
        color: "purple"},
        
    ]
    return (<div className="options-list">
        {
            options.map((option) => {
                return (
                    <span key={`option-${option.title}`} className={`option button ${option.color}`}>
                        {option.name}
                        </span>
                )
            })
        }
    </div>)
}