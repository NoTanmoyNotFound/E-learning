import LikeDislikes from "../models/likeDislike.model.js";

// to post likes
export const postLikes = async (req, res) => {
    const { courseID, userID } = req.body;

    try {
        const updated = await LikeDislikes.findOneAndUpdate(
            { courseID },
            { $addToSet: { likes: userID }, $pull: { dislikes: userID } },
            { new: true, upsert: true }
        );

        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: "Error posting like", error });
    }
};

// to post dislikes
export const postDisLikes = async (req, res) => {
    const { courseID, userID } = req.body;

    try {
        const updated = await LikeDislikes.findOneAndUpdate(
            { courseID },
            { $addToSet: { dislikes: userID }, $pull: { likes: userID } },
            { new: true, upsert: true }
        );

        res.status(200).json(updated);
    } catch (error) {
        res.status(500).json({ message: "Error posting dislike", error });
    }
};



// to get likes and dislikes
export const getLikesDisLikes = async (req, res) => {
    const { courseID } = req.query;

    try {
        const likeDislikeData = await LikeDislikes.findOne({ courseID });

        if (!likeDislikeData) {
            return res.status(404).json({ message: "Course not found" });
        }

        res.status(200).json(likeDislikeData);
    } catch (error) {
        res.status(500).json({ message: "Error fetching likes and dislikes", error });
    }
};
