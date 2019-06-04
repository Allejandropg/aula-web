module.exports = app => {
    const save = function (req,res){
        res.send("User save")
    }
    return { save}
}