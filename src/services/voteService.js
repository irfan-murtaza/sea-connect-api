import Vote from "../models/vote.js"
import VoteRound from "../models/voteRound.js"

class VoteService {

  static async getActiveVotes() {
    const activeRounds = await VoteRound.getActiveRounds();
    const roundsByVoteId = new Map();

    activeRounds.forEach(round => {
      if (!roundsByVoteId.has(round.voteId)) {
        roundsByVoteId.set(round.voteId, []);
      }
      roundsByVoteId.get(round.voteId).push({
        id: round.id,
        roundNumber: round.roundNumber,
        startDate: round.startDate,
        endDate: round.endDate,
        voteOptions: round.voteOptions
      });
    });
  
    // Fetch votes and merge with their respective rounds
    const votesWithRounds = await Promise.all(Array.from(roundsByVoteId.entries()).map(async ([voteId, rounds]) => {
      const vote = await Vote.getVote(voteId);
      return {
        id: vote.id,
        title: vote.title,
        description: vote.description,
        totalRounds: vote.totalRounds,
        resultType: vote.resultType,
        rounds: rounds
      };
    }));
  
    return votesWithRounds;
  }
  
}

export default VoteService
