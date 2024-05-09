import mongoose from "mongoose";
import config from 'config';

const { HOST, PORT, DATABASE, USERNAME, PASSWORD, AUTH } = config.get('DB')

const defaultUrl = AUTH
    ? `mongodb://${USERNAME}:${encodeURIComponent(PASSWORD)}@${HOST}:${PORT}/${DATABASE}`
    : `mongodb://${HOST}:${PORT}/${DATABASE}`;

const databaseConnection = async () => {
    try {
        console.log(defaultUrl);
        const connection = await mongoose.connect(defaultUrl);
        if (connection) {
            console.log("Successfully connected!");
        }
    } catch (err) {
        console.log(err)
        process.exit();
    }
}

export default databaseConnection;