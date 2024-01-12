const asyncHandler = require('express-async-handler')

// @desc    Get Projects
// @route   GET /api/projects
// @access  Private
const getProjects = asyncHandler (async (req, res) => {
    const {id} = req.body
    if(!id) {
        res.status(400)
        throw new Error('Project not found')
    }

    res.status(200).json({message: 'Get Projects'})
})

module.exports = {
    getProjects
}