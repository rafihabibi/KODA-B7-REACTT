function Footer() {
    return(
    <footer className="container bottom-0 left-0 w-full bg-gray-900 text-gray-300">
      {/* Copyright */}
      <div className="border-t border-gray-800 mt-8 py-6 text-center text-sm">
        <p>&copy; {new Date().getFullYear()} ReactProject. All rights reserved.</p>
      </div>
    </footer>
)}

export default Footer