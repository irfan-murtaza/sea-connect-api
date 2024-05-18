import Vote from "../models/vote.js";

const createVote = async (req, res) => {
  const body = req.body;

  if (!body.title || !body.resultType) return res.status(400).json({ message: "fields are missing", success: false });

  const data = {
    title: body.title,
    description: body?.description, 
    totalRounds: body?.totalRounds || 1,
    resultType: body.resultType.toUpperCase(),
  }

  try {
    const vote = await Vote.createVote(data);
    res.status(201).json({ message: "Vote created successfully", success: true, data: vote });
  } catch (err) {
     console.log(err)
    res.status(500).json({ message: "Error creating Vote", success: false, error: err.message });
  }
}




export { createVote };
