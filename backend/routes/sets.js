const express = require('express')
const {
  createSet,
  getSets,
  getSet,
  deleteSet,
  updateSet
} = require('../controllers/setController')
const requireAuth = require('../middleware/requireAuth')

const router = express.Router()

// require auth for all set routes
router.use(requireAuth)

// GET all set
router.get('/', getSets)

//GET a single set
router.get('/:id', getSet)

// POST a new set
router.post('/', createSet)

// DELETE a set
router.delete('/:id', deleteSet)

// UPDATE a set
router.patch('/:id', updateSet)


module.exports = router