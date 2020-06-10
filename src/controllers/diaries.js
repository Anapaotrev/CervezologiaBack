const Diary = require("../models/diary");
const User = require("../models/user");

const getDiaries = function (req, res) {
  Diary.find({})
    .populate("beer")
    .populate("createdBy")
    .then(function (diaries) {
      res.send(diaries);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
};

const getUserDiaries = function (req, res) {
  Diary.find({ createdBy: req.user._id })
    .populate("beer")
    .populate("createdBy")
    .then(function (diaries) {
      res.send(diaries);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
};

const getUsernameDiaries = function (req, res) {
  User.findOne({ name: req.params.username })
    .then(function (user) {
      Diary.find({ createdBy: user._id })
        .populate("beer")
        .populate("createdBy")
        .then((diaries) => {
          res.send(diaries);
        })
        .catch((error) => {
          res.status(500).send(error);
        });
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
};

const addCommentToDiary = function (req, res) {
  const _id = req.params.id;
  const { comment } = req.body;
  Diary.findOneAndUpdate(_id, {
    $push: { comments: { comment, user: req.user._id } },
  })
    .then(function (diary) {
      if (!diary) {
        return res
          .status(404)
          .send({ error: `Diary with id ${_id} not found.` });
      }
      return res.send(diary);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
};

const getDiary = function (req, res) {
  const _id = req.params.id;

  Diary.findOne({ _id })
    .populate("beer")
    .populate("createdBy")
    .then(function (diary) {
      if (!diary) {
        return res
          .status(404)
          .send({ error: `Diary with id ${_id} not found.` });
      }
      return res.send(diary);
    })
    .catch(function (error) {
      return res.status(404).send(error);
    });
};

const newDiary = function (req, res) {
  const diary = new Diary({
    createdBy: req.user._id,
    beer: req.body.beer,
    newBeer: req.body.newBeer,
    rating: req.body.rating,
    notes: req.body.notes,
  });

  diary
    .save()
    .then(function () {
      return res.send(diary);
    })
    .catch(function (error) {
      return res.status(400).send(error);
    });
};

const updateDiary = function (req, res) {
  const _id = req.params.id;
  Diary.findOneAndUpdate(_id, req.body)
    .then(function (diary) {
      if (!diary) {
        return res
          .status(404)
          .send({ error: `Diary with id ${_id} not found.` });
      }
      return res.send(diary);
    })
    .catch(function (error) {
      res.status(500).send(error);
    });
};

const deleteDiary = function (req, res) {
  const _id = req.params.id;
  Diary.findByIdAndDelete(_id)
    .then(function (diary) {
      if (!diary) {
        return res.status(404).send("Diary not found");
      }
      return res.send(diary);
    })
    .catch(function (error) {
      res.status(505).send(error);
    });
};

module.exports = {
  getDiary,
  getDiaries,
  getUserDiaries,
  newDiary,
  updateDiary,
  deleteDiary,
  getUsernameDiaries,
  addCommentToDiary,
};
