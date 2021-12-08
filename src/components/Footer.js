import { Link } from 'react-router-dom'
import '../styles/layouts/footer.css'; 

function Footer() {
    return (
        <div className="footer-container">
                        <Link className="link-developer" to={{ pathname: "https://tonyrodriguez10.github.io/portafolio/" }} target="_blank" >
                        <p> Created and designed by Anthony Rodríguez Muñoz.</p>
                        </Link>
                        <p>Not official page, only for practice purposes!</p>
            <section className="partner-rights">
                <small className="partner-rights--font">C.A.S®2022.</small>
            </section>
        </div>
    )
}

export default Footer
