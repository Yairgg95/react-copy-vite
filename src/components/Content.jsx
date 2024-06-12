import Card from "./Card";


export default function Content() {
    const cards = [
        {emoji: "💡",
            title: "Instant Server Start",
            description: "On demand file serving over native ESM, no bundling required!",
        },
        { emoji: "⚡️",
          title: "Lightning Fast HMR",
          description: "Hot Module Replacement (HMR) that stays fast regardless of app size.",
        },
        { emoji: "⚒️",
          title: "Rich Features",
          description: "Out-of-the-box support for TypeScript, JSX, CSS and more.",  
        },
        { emoji: "📦",
            title: "Optimized Build",
            description: "Pre-configured Rollup build with multi-page and library mode support.",  
          },
          { emoji: "🔩",
            title: "Universal Plugins",
            description: "Rollup-superset plugin interface shared between dev and build.",  
          },
          { emoji: "🔑",
            title: "Fully Typed APIs",
            description: "Flexible programmatic APIs with full TypeScript typing.",  
          },
    ];

    return (
        <div id="content-cards">
            {cards.map((card) => {
                return (
                    <Card 
                    key= {`card-${card.title}`}
                    emoji= {card.emoji}
                    title= {card.title}
                    description= {card.description} 
                    />
                )
            })}
        </div>
    )
}