import express from "express";
import { debug } from "winston";
import { ApiError2 } from "../errors/apiError2";
import userFacade from "../facades/user";
import authMiddleware from "../middlewares/basic-auth";

const router = express.Router();

router.post('/', async function (req, res, next) {
  try{
    let newUser = req.body;
    newUser.role = "user";  //Even if a hacker tried to "sneak" in his own role, this is what you get
    const status = await userFacade.addUser(newUser)
    res.json({status})
  } catch (err){
    next(err);
  }
})

// login needed after this middleware
//router.use(authMiddleware);

router.get('/:userName', async function (req, res, next) {
  try {
  const user_Name = req.params.userName;
  const user = await userFacade.getUser(user_Name);
  debug(user)
  const { name, userName } = user;
  const userDTO = { name, userName }
  res.json(userDTO);
  } catch(err){
    //throw new ApiError2(err.message, 404, res, next);
    res.json(err)
    next(err)
  }
});

router.get('/', async function (req, res, next) {
  try {
    const users = await userFacade.getAllUsers();
    const usersDTO = users.map((user) => { 
      const { name, userName } = user;
      return {name,userName}
    })
    res.json(usersDTO);
  } catch (err) {
    next(err)
  }
});

router.delete('/:userName', async function (req, res, next) {
  try{
    const user_name = req.params.userName;
    const status = await userFacade.deleteUser(user_name)
    res.json({status})
  } catch (err){
    next(err);
  }
})

module.exports = router;