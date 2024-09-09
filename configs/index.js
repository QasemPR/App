const mongoose = require('mongoose')

const Connect = async () => {
    try {
        await mongoose.connect('mongodb+srv://Qasem:HUITS.1892s@react-tdb.dpipl.mongodb.net/?retryWrites=true&w=majority&appName=React-TDB')
        setTimeout(() => {
            console.log('Connected to Database !')
        }, 1500);
    } catch (error) {
        console.log("Error Connecting to Database !")
    }
}
module.exports = Connect
