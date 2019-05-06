import Navbar from './Navbar'
import Footer from './Footer'

const Layout = (props) => {
    return(
        <div className='body'>
            <Navbar/>
            <div className='container'>
                {props.children}
            </div>
            <Footer/>
            <style global jsx>{`
                *{
                    margin: 0;
                    padding: 0;
                    font-family: helvetica;
                }
                .container{
                    min-height: 90vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
            `}</style>
        </div>
    )
}

export default Layout