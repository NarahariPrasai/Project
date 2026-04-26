import bcrypt from 'bcrypt'
import db from './connection/db.js'
import dotenv from 'dotenv'
import jwt from 'jsonwebtoken'

dotenv.config();

export const register =(req, res) =>{
    const { username, email, phone, password } = req.body;

    const query = "SELECT * FROM user WHERE email = ?";
    db.query(query, [email], async (err, data)=>{
        if(err){
            return res.status(500).json({message:"Database error", error: err});
        }

        if(data.length > 0)
            return res.status(409).json({message:"User already exists" });


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash( password, salt);

        const q = "INSERT INTO user( username, emil, phone, password ) VALUES (?, ?, ?, ?)";
        db.query( q, [username, email, phone, hashedpassword ], (err) =>{
            if( err )
                return res.status(500).json({message: "Error creating user" , error: err});
            return res.status(201).json({message: "Successfully registered", status: 1});
        })
    });
};

export const login = (req, res) => {
    const [email, password ] = req.body;

    const query = "SELECT * FROM user WHERE email = ?"
    db.query(query, [email], async(err, data) =>{

        if(err){
            return res.status(500).json({message:"Database error", error: err});
        }

        if(data.length === 0){
            return res.status(404).json({message:"User not found", error: err});
        }

        const user = data[0];

        const isPasswordCorrect =await bcrypt.compare( password, user.password);

        if(!isPasswordCorrect){
            return res.status(400).json({message: "Incorrect Password"});
        }

        const { password: userPassword, ...otherDetails } = user;

        const token = jwt.sign({id: user.user_id}, process.env.JWT_SECRET, { expiresIn: "1d"});

        return res.status(200).json({
            message: "Login successful",
            status: 1,
            user: otherDetails,
            token: token
        })
    })
};
