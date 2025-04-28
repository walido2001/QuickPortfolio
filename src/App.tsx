import { Analytics } from '@vercel/analytics/react';
import { ViewProvider } from './context/ViewContext'
import Header from './components/Header'
import Profile from './components/Profile'
import Experience from './components/Experience'
import Education from './components/Education'
import Skills from './components/Skills'
import Contact from './components/Contact'
import Projects from './components/Projects'
import Awards from './components/Awards'
import Extracurriculars from './components/Extracurriculars'
import Navigation from './components/Navigation'

function App() {
  return (
    <ViewProvider>
      <Analytics />
      <div className="min-h-screen bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <Header />
          <Navigation />
          <div className="p-8">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
              <div className="lg:col-span-3 space-y-6">
                <div className="animate-slide-in-left [animation-delay:200ms] opacity-0 [animation-fill-mode:forwards]">
                  <section className="mb-8">
                    <p className="text-gray-600 leading-relaxed">
                      A dedicated Software Engineer with a strong academic foundation in Big Data and hands-on experience in full-stack development. 
                      Proven track record in developing data analysis tools, web applications, and contributing to enterprise-level projects. 
                      Demonstrated leadership as a Teaching Assistant and technical expertise across multiple internships at companies like UMMA and Holman Automotive. 
                      Passionate about leveraging technology to solve complex problems and create efficient solutions.
                    </p>
                  </section>
                </div>
                <div className="animate-slide-in-left [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                  <section id="education">
                    <Education />
                  </section>
                </div>
                <div className="animate-slide-in-left [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
                  <section id="experience">
                    <Experience />
                  </section>
                </div>
                <div className="animate-slide-in-left [animation-delay:800ms] opacity-0 [animation-fill-mode:forwards]">
                  <section id="awards">
                    <Awards />
                  </section>
                </div>
                <div className="animate-slide-in-left [animation-delay:1000ms] opacity-0 [animation-fill-mode:forwards]">
                  <section id="notable-projects">
                    <Profile />
                  </section>
                </div>
                <div className="animate-slide-in-left [animation-delay:1200ms] opacity-0 [animation-fill-mode:forwards]">
                  <section id="extracurriculars">
                    <Extracurriculars />
                  </section>
                </div>
                <div className="animate-slide-in-left [animation-delay:1400ms] opacity-0 [animation-fill-mode:forwards]">
                  <section id="other-projects">
                    <Projects />
                  </section>
                </div>
              </div>
              <div className="space-y-6">
                <div className="animate-slide-in-right [animation-delay:400ms] opacity-0 [animation-fill-mode:forwards]">
                  <Contact />
                </div>
                <div className="animate-slide-in-right [animation-delay:600ms] opacity-0 [animation-fill-mode:forwards]">
                  <Skills />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ViewProvider>
  )
}

export default App
