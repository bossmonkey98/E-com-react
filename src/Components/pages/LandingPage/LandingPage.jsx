import './LandingPage.css';
import '../index'
import { logo } from '../index';
import "../../products.json";

export function NavBar(){
    return(
        <div>
        <nav className="nav-bar">
            <div className="logo">
                <span> <img id="store-logo" src={logo} alt="logo"/></span>
                <span id="store-name">pex Store</span>
            </div>
            <div className="menu">
                <span><a href="index.html">Home</a></span>
                <span>
                    {/* <a href="./components/pages/prodcuts/products.html">Products</a> */}
                </span>
            </div>
            <div className="nav-content">
                <input className="query" type="search" id="query" placeholder="Search Product"/>
                <div className="user-icon">
                    {/* <a href="./components/pages/aunthentication/login.html"> */}
                        <i className="bi bi-person-circle"></i>
                    {/* </a> */}
                </div>
                <div className="wishlist-icon">
                    {/* <a href="./components/pages/wishlist/wishlist.html"> */}
                        <i className="bi bi-bag-heart-fill"></i>
                    {/* </a> */}
                </div>
                <div className="cart-icon">
                    {/* <a href="./components/pages/cart/cart.html"> */}
                        <i className="bi bi-cart"></i>
                    {/* </a> */}
                </div>
            </div>
        </nav>
        </div>
    );
}

export function LandingPage(){
    return(
    <div className="home-page-content">
        <div className="home-page-img">
          {/* <img className="promotion-img" src="../../assets/images/home-img.jpg" alt=""/> */}
        </div>
        <h1 >APPAREL</h1>
        {   products.map(product => {
            return (
                    <div className="home-products">
                        <div className="vertical-card">
                        { <img className="vertical-card-img" src={product.image} alt="image"/> }
                            <span className="card-badge">New</span>
                            <div className="vertical-card-content">
                                    {product.title}
                                    <p>{product.price}</p>
                            </div>
                        </div>
                    </div>
                    )
                }
            )    
        }
        <h1 >ACCESSORIES</h1>
        <div className="home-products">
            <div className="vertical-card">
              {/* <img className="vertical-card-img" src="../../assets/images/hat.webp" alt=""/> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                        Apex Hat
                        <p>$59.99</p>
                </div>
            </div>
            <div className="vertical-card">
              {/* <img className="vertical-card-img" src="../../assets/images/pin.webp" alt=""/> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                        Apex Pin
                        <p>$555.99</p>
                </div>
            </div>
            <div className="vertical-card">
            {/* <img className="vertical-card-img" src="../../assets/images/prdouct1.webp" alt=""/> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                        Octane Beanie
                        <p>$35.99</p>
                </div>
            </div>
            <div className="vertical-card">
              {/* <img className="vertical-card-img" src="../../assets/images/mousepad.webp" alt=""/> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                        Aniversary Sqad Mouse Pad
                        <p>$25.99</p>
                </div>
            </div>
            <div className="vertical-card">
              {/* <img className="vertical-card-img" src="../../assets/images/bottle.webp" alt=""/> */}
                <span className="card-badge">New</span>
                <div className="vertical-card-content">
                        Aniversary Sqad Mouse Pad
                        <p>$200.99</p>
                </div>
            </div>
        </div>
        <div className="subscribe">
            <h1>SIGN UP FOR THE MAILING</h1>
            <p> TO BE THE FIRST TO HEAR ABOUT EXCITING STORE ANNOUNCEMENT</p>
            <input type="text" placeholder="Enter Name"/>
            <input type="email" placeholder="Enter Email (e.g abc@mail.com)"/>
        </div>
     </div>
    )
}

export function Footer(){
    return(
        <div>
            <footer className="home-page-footer">
                <div><img id="store-logo" src="./components/assets/logo/apex-legends-symbol-white.png" alt="logo"/></div>
                <p>Made with <i className="bi bi-heart-fill"></i> by <strong>BOSSMONKEY</strong> </p>
                <div className="social-icons">
                    <span><i className="bi bi-instagram"></i></span><span><i className="bi bi-discord"></i></span><span><i className="bi bi-youtube"></i></span>
                </div>
            </footer>
        </div>
    )
}