import express from 'express';
import {getMembers, createMember} from '../controllers/member.js';
import member from '../models/member.js';

const router = express.Router();

router.get('/', getMembers);
router.post('/', createMember);

export default router;