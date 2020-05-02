const Diary = require('../models/diary')

const getDiaries = function(req, res) {
    Diary.find({ createdBy: req.user._id }).then(function(diaries) {
        res.send(diaries)
    }).catch(function(error){
        res.status(500).send(error)
    })
}

const getDiary = function(req, res){
  const _id = req.params.id

  Diary.findOne({_id, createdBy: req.user._id, createdFor: req.beer._id}).then(function(diary){
    if(!diary){
      return res.status(404).send({ error: `Diary with id ${_id} not found.` })
    }
    return res.send(diary)
  }).catch(function(error){
    return res.status(404).send(error)
  })
}

const newDiary = function(req, res){
  const diary = new Diary({
        createdBy: req.user._id,
        text: req.body.text,
        createdFor: req.beer._id
  })
  diary.save().then(function(){
    return res.send(diary)
  }).catch(function(error){
    return res.status(400).send(error)
  })
}

const updateDiary = function(req, res){
  const _id = req.params.id
    Diary.findOneAndUpdate({ _id, createdBy: req.user._id, createdFor: req.beer._id}, req.body).then(function(diary) {
        if (!diary) {
            return res.status(404).send({ error: `Diary with id ${_id} not found.`})
        }
        return res.send(diary)
    }).catch(function(error) {
        res.status(500).send(error)
    })
}

const deleteDiary = function(req, res) {
    const _id = req.params.id
    Diary.findByIdAndDelete({ _id, createdBy: req.user._id, createdFor: req.beer._id }).then(function(diary){
        if (!diary) {
            return res.status(404).send('Diary not found')
        }
        return res.send(diary)
    }).catch(function(error) {
        res.status(505).send(error)
    })
}

module.exports = {
    getDiary,
    getDiaries,
    newDiary,
    updateDiary,
    deleteDiary
}
