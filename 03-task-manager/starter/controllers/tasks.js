const getAllTasks = (req, res) =>{
    res.send('all items')
}

const createTask = (req, res) =>{
    res.send('new item created')
}

const getTask = (req, res) =>{
    res.send('get one task')
}

const updateTask = (req, res) =>{
    res.send('update task')
}

const deleteTask = (req, res) =>{
    res.send('delete task')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}