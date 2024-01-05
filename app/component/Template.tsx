/* eslint-disable @next/next/no-sync-scripts */
"use client"
import '../../public/assets/css/style.css'
import ScriptJs from './ScriptJs';
import Header from './Header';
import Section from './home';
import Body from './Body';
import Footer from './Footer';

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
                <Section/>
                <Body/>
                <Footer/>
            </div>
            <ScriptJs />
        </div>
    )
}

export default Template