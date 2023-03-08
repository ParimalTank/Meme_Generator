import logo from '../Images/Meme-Logo-Image.jpeg'


const Header = () =>{

    return(
        <div>
            <header className='header'>        
                <img className="logo-img" src={logo}></img>
                <h2 className="header-title">Meme Generator</h2>
            </header>
        </div>
    )
}


export default Header;