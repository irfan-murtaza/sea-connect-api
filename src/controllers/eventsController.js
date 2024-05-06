import Event from "../models/event.js";

const getActiveEvents = async (req, res) => {
  try {
    const contributions = await Event.getActiveEvents();
    res.status(200).json({ message: "Events retrieved successfully", success: true, data: contributions });
  } catch (err) {
    res.status(500).json({ message: "Error retrieving Events", success: false, error: err.message });
  }
}


export { getActiveEvents };
