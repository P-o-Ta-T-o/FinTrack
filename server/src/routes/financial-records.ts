import express, {Request, Response} from "express";
import financialRecordModel from "../schema/financial-record";

const router = express.Router();

router.get("/getAllByUserID/:UserId", async (req: Request, res: Response) => {
    try{
        const userID = req.params.userId;
        const records = await financialRecordModel.find({userId: userID})
        if(records.length === 0){
            return res.status(404).send("No Records for the user.");
        }
        res.status(200).send(records);
    } catch (err) {
        res.status(500).send(err);
    }
});

// input of a new entry
router.post("/", async (req: Request, res: Response) => {
    try{
        const newRecordBody = req.body;
        const newRecord = new financialRecordModel(newRecordBody);
        const savedRecord = await newRecord.save();

        res.status(200).send(savedRecord);
    } catch (err) {
        res.status(500).send(err);
    }
});

// updating an entry
router.put("/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const newRecordBody = req.body;
        const record = await financialRecordModel.findByIdAndUpdate(
            id, 
            newRecordBody, 
            {new: true}
        );

        if(!record) return res.status(404).send();

        res.status(200).send(record);
    } catch (err) {
        res.status(500).send(err);
    }
});

// deleting an entry
router.delete("/:id", async (req: Request, res: Response) => {
    try{
        const id = req.params.id;
        const record = await financialRecordModel.findByIdAndDelete(id);

        if(!record) return res.status(404).send();
        res.status(200).send(record);
    } catch (err) {
        res.status(500).send(err);
    }
});

export default router;