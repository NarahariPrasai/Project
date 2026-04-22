import db from '../connection/db.js';
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const register = (req, res) => {
    const {username, email, phone, password} = req.body;

    const checkquery = "SELECT * FROM  user WHERE email = ?"

    db.query(checkquery, [email], async (err, data) => {
        if(err){
            return res.status(500).json({message: "Database error", error: err});
        }
        if(data.length >0){
            return res.status(409).json({message: "User already exists"});
        }
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrtpy.hash(password, salt);

        const insertQuery = "INSERT INTO user (username, email, phone, hashedPassword) VALUES (?,?,?,?)";
        db.query(insertQuery, [username, email, phone, password], (err, data) => {
            if(err){
                return res.status(500).json({message: "Error creating user", error: err});
            }
                return res.status(201).json({message: "User registered successfully"});
        });
    })
}

export const login = (req, res) => {
    const {email, password} = req.body;

    const checkquery = "SELECT * FROM user WHERE email = ?";

    db.query(checkquery, [email], async(err, data) => {
        if(err){
            return
                res.status(500).json({message: "Database error", error: err});
        }
        if (data.length ===0){
            return
                res.status(404).json({message: "User not found"});
        }

        const user = data[0];

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return res.status(400).json({message:"Invalid password"});
        }

        const token = jwt.sign();

        const {} = user;

        return res.status(200).json({
            status: 1,
            token: token,
            user: otherDetails,
            message: "Login successful"
        })
    })    
}