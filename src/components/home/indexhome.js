import React from 'react';
import './home.css';
import Header from '../header/indexheader';
import Body from '../body/indexbody';
import Footer from '../footer/indexfooter';

function Home(){
    return(
        <>
            <div className="home">
               <div>
                   <Header/>
               </div> 
               <div>
                   <Body/>
               </div>
               <div>
                   <Footer/>
               </div>
            </div>
        </>
    );
};

export default Home;