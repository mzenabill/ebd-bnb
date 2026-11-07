import {
  getAllListings,
  getListingById,
  addListing,
  updateListing,
  removeListing,
} from "../models/Listing.js";

export async function handleGetAll(req, res) {
  res.json(await getAllListings());
}

export async function handleGetOne(req, res) {
  const listing = await getListingById(req.params.id);
  if (!listing) return res.status(404).json({ error: "Listing not found" });
  res.json(listing);
}

export async function handleCreate(req, res) {
  try {
    const newListing = await addListing(req.body);
    res.status(201).json(newListing);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function handleUpdate(req, res) {
  try {
    const updated = await updateListing(req.params.id, req.body);
    if (!updated) return res.status(404).json({ error: "Listing not found" });
    res.json(updated);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function handleDelete(req, res) {
  const deleted = await removeListing(req.params.id);
  if (!deleted) return res.status(404).json({ error: "Listing not found" });
  res.sendStatus(204);
}
