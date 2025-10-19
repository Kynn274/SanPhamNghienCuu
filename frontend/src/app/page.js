import Footer from '../components/footer';
import Sidebar from '../components/sidebar_unlog';
import Hero from '../components/hero';
import Courses from '@/components/courses';
import { Container } from 'postcss';

export default function Home() {
  return (
    <>
      <body>
        <div id="container" className="flex flex-row items-start justify-between min-h-screen">
          <Sidebar />
          <main className="bg-white w-[calc(100%-60px)] z-2">
            <Hero />
            <Courses />
          </main>
        </div>
        <Footer />
      </body>
    </>
  );
}