import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {
    return(
        <div>
            <Navbar/>
            {props.children}
            <Footer/>
            <style global jsx>{`
                *{
                    margin: 0;
                    padding: 0;
                    font-family: helvetica;
                }
            `}</style>
        </div>
    )
}

export default Layout