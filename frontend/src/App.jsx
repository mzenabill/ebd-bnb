import { useState, useEffect } from "react";
import { Routes, Route } from "react-router";
import Header from "./components/Header.jsx";
import HomePage from "./pages/HomePage.jsx";
import AddListingPage from "./pages/AddListingPage.jsx";
import ListingPage from "./pages/ListingPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";
import initialListings from "./data/listings.js";

function App() {
  const [listings, setListings] = useState(initialListings);

  function addListing(listing) {
    setListings([...listings, listing]);
  }

  function deleteListing(id) {
    setListings(listings.filter((l) => l._id !== id));
  }

  useEffect(() => {
    document.title = `ebd bn'b (${listings.length} listings)`;
  }, [listings]);

  return (
    <main>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage listings={listings} onDelete={deleteListing} />} />
        <Route path="/listings/:id" element={<ListingPage listings={listings} />} />
        <Route path="/add" element={<AddListingPage onAdd={addListing} />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </main>
  );
}

export default App;