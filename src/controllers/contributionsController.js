import Contribution from "../models/contribution.js";

const getAllContributions = async (req, res) => {
  const userEmail = req.query.email;

  if (!userEmail) return res.status(400).json({ message: "Member Email is required", success: false });

  try {
    const contributions = await Contribution.getAllContributions(userEmail);
    res.status(200).json({ message: "Members retrieved successfully", success: true, data: contributions });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving members", success: false, error: err.message });
  }
}


export { getAllContributions };
