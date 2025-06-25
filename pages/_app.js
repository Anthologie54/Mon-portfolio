import 'bootstrap/dist/css/bootstrap.min.css';
import '@/styles/globals.css'; // Garde ceci si tu as un fichier global
import Navbar from '../components/Navbar';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;