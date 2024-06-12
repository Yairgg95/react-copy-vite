import Menu from "./Menu"

export default function Principal(){
    return (
        <div id="principal-container">
            <div id="main">
                <h1 className="name">Vite</h1>
                <p className="text">Next Generation Frontend Tooling</p>
                <p className="tagline">Get ready for a development environment that can finally catch up with you.</p>
                <Menu />
            </div>
            <div className="image">
                <div className="image-container">
                    <div className="image-bg"></div>
                    <img className="img-src" src="https://vitejs.dev/logo-with-shadow.png" alt="Vite-logo" />
                </div>
            </div>
        </div>
    )
}