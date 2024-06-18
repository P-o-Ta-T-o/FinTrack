import mongoose from 'mongoose'

interface FinancialRecord{
    userId: string;
    date: Date;
    description: string
    amount: number;
    category: string;
    paymentMode: string;
}

const financialRecordSchema = new mongoose.Schema<FinancialRecord>({
    userId: {type: String, required: true},
    date: {type: Date, required: true},
    description: {type: String, required: true},
    amount: {type: Number, required: true},
    category: {type: String, required: true},
    paymentMode: {type: String, required: true},
});

const financialRecordModel = mongoose.model<FinancialRecord>(
    "FinancialRecord",
    financialRecordSchema
);

export default financialRecordModel;