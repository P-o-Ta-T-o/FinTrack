import {useState} from "react";
import {useUser} from '@clerk/clerk-react'

export const FinRecordForm = () => {

    const [description, setDescription] = useState<string>("");
    const [amount, setAmount] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [paymentMode, setPaymentMode] = useState<string>("");

    const {user} = useUser();

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const newRecord = {
            userId: user?.id,
            date: new Date(),
            description: description,
            amount: parseFloat(amount),
            category: category,
            paymentMode: paymentMode,
        };

        // addRecord(newRecord)

        setDescription("")
        setAmount("")
        setCategory("")
        setPaymentMode("")
    };

    return (
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <div className="form-field">
                    <label>Description:</label>
                    <input 
                        type="text" 
                        required className="input" 
                        value={description} 
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>
                <div className="form-field">
                    <label>Amount:</label>
                    <input type="number" required className="input" value={amount} onChange={(e) => setAmount(e.target.value)}/>
                </div>
                <div className="form-field">
                    <label>Category:</label>
                    <select required className="input" value={category} onChange={(e) => setCategory(e.target.value)}>
                        <option value="">Select a category</option>
                        <option value="Pocket-money">Pocket money</option>
                        <option value="Food">Food</option>
                        <option value="Entertainment">Entertainment</option>
                        <option value="Sports">Sports</option>
                        <option value="Outing">Outing</option>
                        <option value="Others">Others</option>
                    </select>
                </div>
                <div className="form-field">
                    <label>Payment Mode:</label>
                    <select required className="input" value={paymentMode} onChange={(e) => setPaymentMode(e.target.value)}>
                        <option value="">Select payment mode</option>
                        <option value="UPI">UPI</option>
                        <option value="Cash">Cash</option>
                        <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                </div>
                <button type="submit" className="button">Add Record</button>
            </form>
        </div>
    );
};