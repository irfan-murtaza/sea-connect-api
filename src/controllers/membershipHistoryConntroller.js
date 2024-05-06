import MemberShipHistory from '../models/membershipHistory.js';

const getMemberShipHistory = async (req, res) => {
  const userEmail = req.query.email;
  if (!userEmail) return res.status(400).json({ message: "Member Email is required", success: false });

  try {
    const memberShipHistory = await MemberShipHistory.getMembershipHistory(userEmail);
    res.status(200).json({ message: "Members retrieved successfully", success: true, data: memberShipHistory });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving members", success: false, error: err.message });
  }
}


export { getMemberShipHistory };
