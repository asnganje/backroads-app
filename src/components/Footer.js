import { pageLinks, navicons } from "./data";
const Footer = ()=> {
    return (
        <footer className="section footer">
        <ul className="footer-links">
          {pageLinks.map((page)=> {
            const {id, href, text} = page
            return (
              <li key = {id}>
              <a href={href} className="footer-link">{text}</a>
            </li>
            )
          })}
        </ul>
        <ul className="footer-icons">
          {navicons.map((iceon)=> {
            const {id, href, icon} = iceon
            return (
              <li key ={id}>
              <a href={href} rel="noreferrer" target="_blank" className="footer-icon"
                ><i className={icon}></i
              ></a>
            </li>  
            )
          })}
        </ul>
        <p className="copyright">
          copyright &copy; Backroads travel tours company
          <span id="date">{new Date().getFullYear()}</span> all rights reserved
        </p>
      </footer>
    )
}
export default Footer;