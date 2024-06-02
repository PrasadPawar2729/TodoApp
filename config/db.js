const mongoose = require("mongoose")


const connection = mongoose.connect("mongodb+srv://prasadpawarpp2002:kanban@cluster0.y6nijti.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

module.exports = {connection}