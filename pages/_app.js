import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from '../components/Navbar';
import '@/styles/globals.css'; // si tu as un fichier global

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;