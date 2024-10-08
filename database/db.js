import mongoose from 'mongoose';

/**
 * 0 = disconnected
 * 1 = connected
 * 2 = connecting
 * 3 = disconnecting
 */
const mongoConnection = {
    isConnected: 0
}

export const connect = async () => {
    if (mongoConnection.isConnected) {
        console.log('Ya estábamos conectados');
        return;
    }

    if (mongoose.connections.length > 0) {
        mongoConnection.isConnected = mongoose.connections[0].readyState;

        if (mongoConnection.isConnected === 1) {
            console.log('Usando conexión anterior');
            return;
        }

        await mongoose.disconnect();
    }

    try {
        await mongoose.connect(process.env.MONGO_URL || '', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        mongoConnection.isConnected = 1;
        console.log('Conectado a MongoDB:', process.env.MONGO_URL);
    } catch (error) {
        console.error('Error conectando a MongoDB:', error);
        mongoConnection.isConnected = 0;
    }
}

export const disconnect = async () => {
    if (process.env.NODE_ENV === 'development') return;

    if (mongoConnection.isConnected === 0) return;

    try {
        await mongoose.disconnect();
        mongoConnection.isConnected = 0;
        console.log('Desconectado de MongoDB');
    } catch (error) {
        console.error('Error desconectando de MongoDB:', error);
    }
}