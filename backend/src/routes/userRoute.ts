import express from 'express'
import { allUsers, create, deleteData, getUserId, update } from '../controllers/useControllers';

const router = express.Router();

router.post('/create', create);
router.put('/update/:id', update);
router.get('/getUser/:id', getUserId);
router.get('/alldata', allUsers);
router.delete('/deleteData/:id', deleteData);

export default router;