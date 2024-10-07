import { Request, Response } from 'express';

import User from '../models/User';

export const allUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find();

        if (!users) {
            res.status(404).json({message: "No Data"});
        }

        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
}

export const getUserId = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;

    try {
        const user = await User.findById(id);
        if (!user) {
            res.status(404).json({message: "User not found"})
        }

        res.status(200).json(user)
    } catch(error) {
        res.status(500).json({message: "Internal server error"})
    }
}

export const create = async (req: Request, res: Response): Promise<void> => {
    const { name, lastname, email, hobby } = req.body;

    if (!name || !lastname || !email || !hobby) {
        res.status(400).json("All fields are required")
    }

    const userDetails = new User({ name, lastname, email, hobby })

    try {
        await userDetails.save();
        res.status(200).json(userDetails)
    } catch (error) {
        res.status(500).json(error)
    }
}

export const update = async (req: Request, res: Response): Promise<void> => {
    const {id} = req.params;
    try {
        const updatedUser = await User.findByIdAndUpdate(id, req.body, {new: true});

        if (!updatedUser) {
            res.status(404).json({ message: "User not found"});
        }

        res.status(200).json({updatedUser})
    } catch(error) {
        res.status(500).json("Internal server error")
    }
}

export const deleteData = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;

    try {
        const deleteUser = User.findByIdAndDelete(id);
        
        if (!deleteUser) {
            res.status(403).json({message: "User not found"})
        }

        res.status(200).json({message: "User deleted successfully"})
    } catch(error) {
        res.status(404).json(error)
    }

}