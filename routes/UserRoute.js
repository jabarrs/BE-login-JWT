import express from 'express';
import { refreshToken } from '../controllers/RefreshToken.js';
import { getUsers, Login, Logout, Register } from '../controllers/UserController.js';
import { VerifyToken } from '../middleware/VerifyToken.js';

const router = express.Router();

router.get('/users', VerifyToken, getUsers);
router.post('/register', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

export default router;
