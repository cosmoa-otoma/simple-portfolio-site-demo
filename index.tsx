import React from 'react';
import ReactDOM from 'react-dom/client';

const ACCENT_COLOR = '#D9824F';

// --- SVG Icon Components ---
const PhoneIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
);
const MenuIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" /></svg>
);
const TwitterIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-.424.727-.666 1.581-.666 2.477 0 1.921 1.037 3.593 2.544 4.545-.966-.03-1.843-.296-2.6-.704v.052c0 2.683 1.903 4.917 4.426 5.42-.464.126-.95.193-1.455.193-.356 0-.702-.034-1.04-.096.716 2.2 2.784 3.803 5.235 3.847-1.89 1.479-4.27 2.36-6.86 2.36-.444 0-.88-.026-1.31-.076 2.44 1.56 5.35 2.47 8.55 2.47 9.85 0 15.24-8.16 15.24-15.24 0-.23-.005-.46-.015-.688.94-.678 1.75-1.52 2.4-2.5z" /></svg>
);
const InstagramIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07m0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948s.014 3.667.072 4.947c.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072s3.667-.014 4.947-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.947s-.014-3.667-.072-4.947c-.196-4.354-2.617-6.78-6.979-6.98-1.28-.059-1.688-.073-4.948-.073h.001z M12 6.845c-2.839 0-5.155 2.316-5.155 5.155s2.316 5.155 5.155 5.155 5.155-2.316 5.155-5.155-2.316-5.155-5.155-5.155zm0 8.308c-1.741 0-3.153-1.412-3.153-3.153s1.412-3.153 3.153-3.153 3.153 1.412 3.153 3.153-1.412 3.153-3.153 3.153zm6.308-9.452c-.777 0-1.409.631-1.409 1.408s.632 1.409 1.409 1.409c.777 0 1.408-.632 1.408-1.409s-.631-1.408-1.408-1.408z"/></svg>
);
const BehanceIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 5.5h-5.5v1.5h5.5v-1.5zM15 12.5c0-1.657-1.343-3-3-3s-3 1.343-3 3 1.343 3 3 3 3-1.343 3-3zM2.5 13.5h5v-1h-5v1zM21 12.5h-3.5v-1h3.5v1zM17 5.5h-3.5v1.5h3.5v-1.5zM13.5 5.5h-2v1.5h2v-1.5zM9.5 5.5h-8v1.5h8v-1.5zM12 11c-.552 0-1 .448-1 1s.448 1 1 1 1-.448 1-1-.448-1-1-1zM2.5 17.5h5v-1h-5v1zM21 17.5h-3.5v-1h3.5v1zM17 17.5h-3.5v-1h3.5v1zM13.5 17.5h-2v-1h2v1zM9.5 17.5h-8v-1h8v1zM24 0h-24v24h24v-24zM1 3h22v2h-22v-2zM1 21h22v-2h-22v2zM21.5 7h-2.5v-1.5h2.5v1.5zM7.5 7h-2.5v-1.5h2.5v1.5zM17.5 7h-2.5v-1.5h2.5v1.5zM12.5 7h-2.5v-1.5h2.5v1.5zM7.5 19h-2.5v-1.5h2.5v1.5zM17.5 19h-2.5v-1.5h2.5v1.5zM12.5 19h-2.5v-1.5h2.5v1.5zM21.5 19h-2.5v-1.5h2.5v1.5zM7.5 14.5h-2.5v-1.5h2.5v1.5zM17.5 14.5h-2.5v-1.5h2.5v1.5z"/></svg>
);
const FacebookIcon = () => (
    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z"/></svg>
);
const ScrollDownIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M19 14l-7 7m0 0l-7-7m7 7V3" /></svg>
);
const WebDesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
);
const GraphicDesignIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>
);
const BrandingIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" /></svg>
);
const ContentCreationIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>
);
const ArrowLeftIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
);
const ArrowRightIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
);


// --- Page Components ---

const Header = () => (
    <header className="absolute top-0 left-0 right-0 z-20 p-6 md:p-8 text-white">
        <div className="container mx-auto flex justify-between items-center">
            <a href="#home" className="text-xl font-bold tracking-wider uppercase">
                Your Name <span className="font-light text-gray-300">Professional Portfolio Template</span>
            </a>
            <nav className="hidden md:flex items-center space-x-8 text-sm">
                <a href="tel:+11234567890" className="flex items-center space-x-2 hover:text-gray-300 transition-colors">
                    <PhoneIcon />
                    <span>+1 (123) 456-7890</span>
                </a>
                <div className="flex space-x-3">
                    <button className="text-gray-400 hover:text-white transition-colors">UA</button>
                    <button className="font-semibold text-white">EN</button>
                    <button className="text-gray-400 hover:text-white transition-colors">RU</button>
                </div>
                <button aria-label="Open menu">
                    <MenuIcon />
                </button>
            </nav>
            <button aria-label="Open menu" className="md:hidden">
                <MenuIcon />
            </button>
        </div>
    </header>
);

const SocialLinks = () => (
    <aside className="fixed left-0 top-1/2 -translate-y-1/2 z-20 hidden lg:block">
        <div className="flex flex-col items-center space-y-6 bg-black/30 p-4 rounded-r-lg">
           <div className="w-px h-16 bg-white/20"></div>
            <a href="#" aria-label="Twitter" className="text-gray-400 hover:text-white transition-colors"><TwitterIcon /></a>
            <a href="#" aria-label="Instagram" className="text-gray-400 hover:text-white transition-colors"><InstagramIcon /></a>
            <a href="#" aria-label="Behance" className="text-gray-400 hover:text-white transition-colors"><BehanceIcon /></a>
            <a href="#" aria-label="Facebook" className="text-gray-400 hover:text-white transition-colors"><FacebookIcon /></a>
            <div className="w-px h-16 bg-white/20"></div>
        </div>
    </aside>
);

const Hero = () => (
    <section id="home" className="h-screen bg-cover bg-center flex items-center relative text-white" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1520243285796-35b9b61a35cb?q=80&w=2000&auto=format&fit=crop')" }}>
        <div className="absolute inset-0" 
        style={{
            backgroundImage: "url('https://i.imgur.com/iSJgVZG.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
        }}></div>
        <div className="container mx-auto px-6 relative z-10 flex">
            <div className="w-full md:w-1/2 lg:w-2/5">
                <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-4">Creative Portfolio Template</h1>
                <p className="max-w-md text-gray-300 mb-8 leading-relaxed">
                    A modern and clean template for showcasing your creative work. Perfect for photographers, designers, and artists to present their projects in a stylish and beautiful way.
                </p>
                <a href="#contact" className="inline-block px-8 py-3 border-2 transition-colors duration-300" style={{borderColor: ACCENT_COLOR}} 
                   onMouseOver={e => e.currentTarget.style.backgroundColor = ACCENT_COLOR}
                   onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                    Hire me
                </a>
            </div>
        </div>
        <a href="#services" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white">
            <ScrollDownIcon />
        </a>
    </section>
);

const Services = () => (
    <section id="services" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-semibold mb-12">What We Can Do For You</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col items-center">
                    <WebDesignIcon />
                    <h3 className="font-semibold text-lg mb-2">Web Design</h3>
                    <p className="text-gray-600 text-sm">Crafting beautiful and functional websites tailored to your needs.</p>
                </div>
                <div className="flex flex-col items-center">
                    <GraphicDesignIcon />
                    <h3 className="font-semibold text-lg mb-2">Graphic Design</h3>
                    <p className="text-gray-600 text-sm">Creating stunning visuals that communicate your brand's message effectively.</p>
                </div>
                <div className="flex flex-col items-center">
                    <BrandingIcon />
                    <h3 className="font-semibold text-lg mb-2">Branding</h3>
                    <p className="text-gray-600 text-sm">Developing strong brand identities that resonate with your target audience.</p>
                </div>
                <div className="flex flex-col items-center">
                    <ContentCreationIcon />
                    <h3 className="font-semibold text-lg mb-2">Content Creation</h3>
                    <p className="text-gray-600 text-sm">Producing high-quality content that engages and inspires your audience.</p>
                </div>
            </div>
            <div className="mt-12 w-1/3 mx-auto h-px" style={{backgroundColor: ACCENT_COLOR}}></div>
        </div>
    </section>
);

const Works = () => (
    <section id="works" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6">
            <h2 className="text-3xl font-semibold text-center mb-12">Our Latest Projects</h2>
        </div>
        <div className="flex items-center">
            <button className="hidden md:block p-4" aria-label="Previous work"><ArrowLeftIcon /></button>
            <div className="flex-grow grid grid-cols-1 md:grid-cols-3 gap-1 overflow-hidden">
                 <img src="https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?q=80&w=800&auto=format&fit=crop" alt="Forest stream" className="w-full h-96 object-cover" />
                 <img src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=800&auto=format&fit=crop" alt="Forest path" className="w-full h-96 object-cover" />
                 <img src="https://images.unsplash.com/photo-1473448912268-2022ce9509d8?q=80&w=800&auto=format&fit=crop" alt="Forest waterfall" className="w-full h-96 object-cover" />
            </div>
            <button className="hidden md:block p-4" aria-label="Next work"><ArrowRightIcon /></button>
        </div>
        <div className="text-center mt-12">
            <button className="px-10 py-3 text-white transition-colors duration-300" style={{backgroundColor: ACCENT_COLOR, borderColor: ACCENT_COLOR}}
                onMouseOver={e => e.currentTarget.style.backgroundColor = '#C76A3A'}
                onMouseOut={e => e.currentTarget.style.backgroundColor = ACCENT_COLOR}>
                View All Projects
            </button>
        </div>
    </section>
);

const About = () => (
    <section id="about" className="py-20 bg-gray-100 text-gray-800">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2 relative">
                <div className="absolute -left-4 top-10 h-3/4 w-1" style={{backgroundColor: ACCENT_COLOR}}></div>
                <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop" alt="A creative team working together" className="w-full h-auto object-cover" />
            </div>
            <div className="md:w-1/2">
                <h2 className="text-3xl font-semibold mb-4">About Us</h2>
                <p className="text-gray-600 mb-4">We are a passionate team of creatives dedicated to delivering exceptional results. Our mission is to combine art and technology to create experiences that are both beautiful and meaningful.</p>
                <p className="text-gray-600 mb-4">We believe in collaboration, transparency, and a client-first approach. We work closely with you to understand your vision and bring it to life with precision and creativity.</p>
                <h3 className="font-semibold mb-2">Our Core Values:</h3>
                <ul className="list-disc list-inside text-gray-600">
                    <li>Creativity</li>
                    <li>Integrity</li>
                    <li>Excellence</li>
                    <li>Collaboration</li>
                    <li>Innovation</li>
                </ul>
            </div>
        </div>
    </section>
);

const Achievements = () => (
    <section id="achievements" className="py-20 bg-white text-gray-800">
        <div className="container mx-auto px-6 text-center">
            <div className="flex items-center justify-center mb-12">
                 <div className="flex-grow h-px " style={{backgroundColor: ACCENT_COLOR}}></div>
                 <h2 className="text-3xl font-semibold mx-8">Our Achievements</h2>
                 <div className="flex-grow h-px " style={{backgroundColor: ACCENT_COLOR}}></div>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold mb-2" style={{color: ACCENT_COLOR}}>1,200+</p>
                    <h3 className="font-semibold text-lg mb-2">Projects Completed</h3>
                    <p className="text-gray-600 text-sm">Successfully delivering high-quality projects to satisfied clients worldwide.</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold mb-2" style={{color: ACCENT_COLOR}}>8+</p>
                    <h3 className="font-semibold text-lg mb-2">Years of Experience</h3>
                    <p className="text-gray-600 text-sm">Years of combined experience in the creative industry, pushing boundaries.</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold mb-2" style={{color: ACCENT_COLOR}}>25+</p>
                    <h3 className="font-semibold text-lg mb-2">Industry Awards</h3>
                    <p className="text-gray-600 text-sm">Recognized for excellence and innovation by major industry awards.</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-5xl font-bold mb-2" style={{color: ACCENT_COLOR}}>Featured</p>
                    <h3 className="font-semibold text-lg mb-2">In The Press</h3>
                    <p className="text-gray-600 text-sm">Our work has been recognized and featured in leading industry publications.</p>
                </div>
            </div>
        </div>
    </section>
);


const Contact = () => (
    <section id="contact" className="py-20 bg-cover bg-center text-white" style={{backgroundImage: "url('https://images.unsplash.com/photo-1454496522488-7a8e488e8606?q=80&w=2000&auto=format&fit=crop')"}}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="container mx-auto px-6 relative z-10">
            <div className="md:w-2/3 mx-auto text-center">
                <div className="flex items-center justify-center mb-12">
                     <h2 className="text-3xl font-semibold mr-8">Get In Touch</h2>
                     <div className="flex-grow h-px " style={{backgroundColor: ACCENT_COLOR}}></div>
                </div>
                <form>
                    <div className="mb-4">
                        <input type="email" id="email" name="email" placeholder="E-mail" className="w-full p-3 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2" style={{"--tw-ring-color": ACCENT_COLOR} as React.CSSProperties} required />
                    </div>
                    <div className="mb-6">
                        <textarea id="message" name="message" placeholder="Your message" rows={5} className="w-full p-3 bg-white/90 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2" style={{"--tw-ring-color": ACCENT_COLOR} as React.CSSProperties} required></textarea>
                    </div>
                    <button type="submit" className="px-12 py-4 text-white font-semibold transition-colors duration-300" style={{backgroundColor: ACCENT_COLOR, borderColor: ACCENT_COLOR}}
                        onMouseOver={e => e.currentTarget.style.backgroundColor = '#C76A3A'}
                        onMouseOut={e => e.currentTarget.style.backgroundColor = ACCENT_COLOR}>
                        Send message
                    </button>
                </form>
            </div>
        </div>
    </section>
);

const Footer = () => (
    <footer className="bg-[#181818] text-gray-400 py-8">
        <div className="container mx-auto px-6 flex flex-wrap justify-between items-center text-sm">
            <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                 <a href="#home" className="text-lg font-bold tracking-wider uppercase text-white">Your Name</a>
                 <p className="text-xs">Creative Portfolio</p>
            </div>
            <div className="flex space-x-4 mb-4 md:mb-0 order-first md:order-none w-full justify-center md:w-auto">
                <a href="#" aria-label="Twitter" className="hover:text-white transition-colors"><TwitterIcon /></a>
                <a href="#" aria-label="Instagram" className="hover:text-white transition-colors"><InstagramIcon /></a>
                <a href="#" aria-label="Behance" className="hover:text-white transition-colors"><BehanceIcon /></a>
                <a href="#" aria-label="Facebook" className="hover:text-white transition-colors"><FacebookIcon /></a>
            </div>
            <div className="text-center md:text-left mb-4 md:mb-0">
                 <a href="tel:+11234567890" className="block hover:text-white transition-colors">+1 (123) 456-7890</a>
            </div>
             <div className="w-full md:w-auto text-center md:text-left mb-4 md:mb-0">
                <a href="#" className="hover:text-white transition-colors">Privacy policy</a>
                <span className="mx-2">|</span>
                <span>© Rights reserved</span>
            </div>
            <div>
                 <a href="#contact" className="inline-block px-6 py-2 border-2 transition-colors duration-300 text-white" style={{borderColor: ACCENT_COLOR}}
                   onMouseOver={e => e.currentTarget.style.backgroundColor = ACCENT_COLOR}
                   onMouseOut={e => e.currentTarget.style.backgroundColor = 'transparent'}>
                    Hire me
                </a>
            </div>
        </div>
    </footer>
);

function App() {
    return (
        <div className="bg-white">
            <Header />
            <SocialLinks />
            <main>
                <Hero />
                <Services />
                <Works />
                <About />
                <Achievements />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);