import mongoose, { Schema } from 'mongoose';

const botConfigSchema = new Schema({
    _id: {
        type: Schema.Types.ObjectId,
        required: true,
        auto: true,
    },
    walletAddress: { type: String, required: true },
    privateKey: { type: String, required: true },
    proxyWallet: { type: String, required: false },
    userAddress: { type: String, required: false },
    fullEnv: { type: Schema.Types.Mixed, required: false },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
});

botConfigSchema.pre('save', function (next) {
    this.updatedAt = new Date();
    next();
});

const BotConfig = mongoose.model('BotConfig', botConfigSchema, 'bot_config');

export default BotConfig;

