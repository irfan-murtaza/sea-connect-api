import VoteRound from "../models/voteRound.js";
import VoteCast from "../models/voteCast.js";

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


const castVote = async (req, res) => {
  const body = req.body;
  const vote = await VoteCast.exists(req.user.email)
  console.log("vote", vote)
  if (vote) return res.status(400).json({ message: "You have already casted your vote", success: false });
  if (!body.voteId || !body.roundId || !body.voteOption) return res.status(400).json({ message: "fields are missing", success: false });

  const data = {
    voteId: body.voteId,
    roundId: body.roundId,
    voteOption: body.voteOption,
    voterId: req.user.id,
    voterEmail: req.user.email
  }

  try {
    const vote = await VoteCast.castVote(data);
    res.status(201).json({ message: "Vote casted successfully", success: true, data: vote });
  } catch (err) {
    res.status(500).json({ message: "Error casting Vote", success: false, error: err.message });
  }
}



export { createVoteRound, castVote };
