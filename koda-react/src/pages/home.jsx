import { Link } from "react-router";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-4">
      
      <h1 className="text-4xl font-bold text-black mb-4">
        Selamat Datang di Project React Saya!
      </h1>
      
      <p className="text-lg text-black mb-8 text-center max-w-md">
        Ini adalah tugas react saya dan jangan lupa tinggalkan review tentang pengalamanmu menggunakan website ini.
      </p>
      
      <div className="flex space-x-4">
        <Link 
          to="/minitask3" 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Lihat Pokemon
        </Link>

        <Link 
          to="/minitask2" 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          List Produk
        </Link>
        
        <Link 
          to="/minitask1" 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Counter
        </Link>

        <Link 
          to="/review" 
          className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
        >
          Isi Review
        </Link>
      </div>

    </div>
  );
}

export default Home;