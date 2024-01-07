/* eslint-disable @next/next/no-sync-scripts */
"use client"
import '../../public/assets/css/style.css'
import ScriptJs from './ScriptJs';
import Header from './Header';
import Body from './Body';
import Footer from './Footer';
import Home from './home';
import About from './About';
import Servis from './Servis';
import Portofolio from './Portofolio';
import Team from './Team';
import Kontak from './Kontak';

function Template({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <div id="preloader">
                <div className="dz-ripple">
                    <div />
                    <div />
                </div>
            </div>
            <div id="main-wrapper">
                <Header />
                <Home/>
                <Body/>
                <About/>
                <Servis/>
                <Portofolio/>
                <Team/>
                <Kontak/>
                <Footer/>
            </div>
            <ScriptJs />
        </div>
    )
}

export default Template