import VoteRound from "../models/voteRound.js";

const createVoteRound = async (req, res) => {
  const body = req.body;

  if (!body.voteId || !body.startDate || !body.endDate || !body.voteOptions) return res.status(400).json({ message: "fields are missing", success: false });

  const data = {
    voteId: body.voteId,
    startDate: body.startDate,
    endDate: body.endDate,
    voteOptions: body.voteOptions    
  }

  try {
    const vote = await VoteRound.createRound(data);
    res.status(201).json({ message: "Vote created successfully", success: true, data: vote });
  } catch (err) {
    res.status(500).json({ message: "Error creating Vote", success: false, error: err.message });
  }
}

export { createVoteRound };
