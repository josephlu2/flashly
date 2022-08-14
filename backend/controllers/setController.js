const Set = require('../models/setModel')
const mongoose = require('mongoose')
const { response } = require('express')

// get all set
const getSets = async (req, res) => {
    const user_id = req.user._id
    const set = await Set.find({ user_id }).sort({createdAt: -1})

    res.status(200).json(set)
}


// get a single set
const getSet = async (req, res) => {
    const { id } = req.params
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'No such set'})
    }

    const set = await Set.findById(id)
    //convert set to object
    const setObject = set.toObject()

    if (!set) {
        return res.status(404).json({error: 'No such set'})
    }

    if (set.user_id.toString() !== req.user._id.toString() && set.visibility == false) {
        return res.status(401).json({error: 'Unauthorized'})
    }

    if (set.user_id.toString() === req.user._id.toString()) {
        setObject.owner = true
        console.log('same')
    } else {
        setObject.owner = false
    }

    res.status(200).json(setObject)
}



// create new set
const createSet = async (req, res) => {
    const {title, desc, cards, visibility, category} = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if(!desc) {
        emptyFields.push('desc')
    }
    if(!cards) {
        emptyFields.push('cards')
    }
    if(!visibility) {
        emptyFields.push('visibility')
    }
    if(!category) {
        emptyFields.push('category')
    }
    if(emptyFields.length > 0) {
        return res.status(400).json({error: "Please fill in all the fields", emptyFields})
    }

    // add doc to db
    try {
        const user_id = req.user._id
        const set = await Set.create({title, desc, category, cards, user_id, visibility})
        res.status(200).json(set)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
}


// delete a set
const deleteSet = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such set"})
    }

    const set = await Set.findOneAndDelete({_id: id})

    if (!set) {
        return res.status(404).json({erorr: "No such set"})
    }

    res.status(200).json(set)

}

// update a set
const updateSet = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: "No such set"})
    }

    const set = await Set.findOneAndUpdate({_id: id}, {
        ...req.body 
    })

    if (!set) {
        return res.status(400).json({error: "No such set"})
    }

    res.status(200).json(set)
}


module.exports = {
    createSet,
    getSets,
    getSet,
    deleteSet,
    updateSet
}

