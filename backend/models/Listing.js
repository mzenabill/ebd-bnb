import mongoose from "mongoose";

const listingSchema = new mongoose.Schema({
  title: { type: String, required: true },
  pricePerNight: { type: Number, required: true },
});

const Listing = mongoose.model("Listing", listingSchema);

export async function getAllListings() {
  return Listing.find();
}

export async function getListingById(id) {
  if (!mongoose.isValidObjectId(id)) return null;
  return Listing.findById(id);
}

export async function addListing(data) {
  return Listing.create(data);
}

export async function updateListing(id, data) {
  if (!mongoose.isValidObjectId(id)) return null;
  return Listing.findByIdAndUpdate(id, data, { new: true });
}

export async function removeListing(id) {
  if (!mongoose.isValidObjectId(id)) return null;
  return Listing.findByIdAndDelete(id);
}
