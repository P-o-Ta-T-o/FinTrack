export const FinRecordForm = () => {
    return (
        <div className="form-container">
            <form>
                <div className="form-field">
                    <label>Description:</label>
                    <input type="text" required className="input"/>
                </div>
                <div className="form-field">
                    <label>Amount:</label>
                    <input type="number" required className="input"/>
                </div>
                <div className="form-field">
                    <label>Category:</label>
                    <select required className="input">
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
                    <select required className="input">
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