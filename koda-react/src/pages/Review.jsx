import {useState} from 'react'

function Review() {
const [inputNama, setInputNama] = useState("");
const [inputIsi, setInputIsi] = useState("");
const [reviewLama, setReviewLama] = useState([]);
const [errorMessage, setErrorMessage] = useState("");
const [errorIsi, setErrorIsi] = useState("");

const handleKirimReview = (e) => {
    e.preventDefault();
    const reviewBaru = {nama: inputNama.trim(), isi:inputIsi.trim()};
    const kumpulanReview = [...reviewLama, reviewBaru];
    if(reviewBaru.nama === "" ){
        setErrorMessage("Nama Tidak Boleh Kosong!");
    }
    if(reviewBaru.isi === ""){
      setErrorIsi("Isi text tidak boleh kosong!")
    }
    if(reviewBaru.nama === "" || reviewBaru.isi === "") {
        return;
    }
    setErrorMessage("");
    setErrorIsi("");
    localStorage.setItem("simpanReview", JSON.stringify(kumpulanReview));
    setReviewLama(kumpulanReview);
    setInputNama("");
    setInputIsi("");
}
    return(
    <div className="max-w-2xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-8 text-black">MASUKKAN ULASAN ANDA</h2>
      <form onSubmit={handleKirimReview} className="flex flex-col gap-4 bg-white p-6 rounded-xl shadow-md mb-12">
        <input type="text" placeholder="Nama Kamu" value={inputNama} onChange={(e) => setInputNama(e.target.value)}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 "/>
          <p className='text-red-500 text-sm italic text-center '>{errorMessage}</p>
        <textarea placeholder="Isi Ulasan..."  value={inputIsi} onChange={(e) => setInputIsi(e.target.value)} 
         onKeyDown={(e) => {if(e.key === "Enter"){
            e.preventDefault();
            handleKirimReview(e);
         }}}
          className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:border-blue-500 focus:ring-1 "></textarea>
          <p className='text-red-500 text-sm italic text-center '>{errorIsi}</p>
        <button type="submit" className="bg-[#144BB8] hover:bg-blue-900 cursor-pointer text-white font-bold py-3 rounded-lg">Kirim</button>
      </form>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {reviewLama.map((rlama, index) => (
          <li key={index} className="bg-white p-5 rounded-xl shadow-md border border-black hover:shadow-lg transition">
            <h1 className="font-bold text-xl text-gray-800 mb-2">{rlama.nama}</h1>
            <p className="text-gray-600">{rlama.isi}</p>
          </li>
        ))}
      </ul>

    </div>
  );
}

export default Review;
