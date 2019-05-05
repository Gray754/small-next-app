const Navbar = () =>{
    return(
        <div className='navbar-container'>
            <h2>Next Test</h2>
            <ul>
                <li><a href='/index'>Home</a></li>
                <li><a href='/about'>About</a></li>
            </ul>
            <style jsx>{`
                .navbar-container{
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    background: #000;
                    padding: 0 3rem;
                }
                h2{
                    color: #fff;
                    font-weight: 400;
                }
                ul{
                   display: flex;
                   justify-content: space-between;
                }
                li{
                    list-style-type: none;
                }
                a{
                    color: #fff;
                    text-decoration: none;
                    display: block;
                    padding: 1rem 1rem;
                }
                a:hover{
                    background: #fff;
                    color: #000;
                }
            `}</style>
        </div>
    )
}

export default Navbar