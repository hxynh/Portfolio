
// @desc    Get Projects
// @route   GET /api/projects
// @access  Private
const getProjects = (req, res) => {
    res.status(200).json({message: 'Get Projects'})
}

module.exports = {
    getProjects
}