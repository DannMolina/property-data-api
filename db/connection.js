/**
 * Database connection
 */
const mongoose = require('mongoose');

/**
 * Connect to mongoDB
 * @collection propertyData
 */
const connectDb = async () => {
    try {
        // * init db connection
        const connection = await mongoose.connect(
            'mongodb+srv://admin:admin@dannmolina.xwcpo.mongodb.net/propertyData?retryWrites=true&w=majority', // * connection string
            {
                useNewUrlParser: true,
                useCreateIndex: true,
                useUnifiedTopology: true,
            },
        );
        console.log(`connected to mongoDB: ${connection.connection.host}`);
    } catch (error) {
        console.error(error, 'mongodb error');
    }
};

module.exports = connectDb;
