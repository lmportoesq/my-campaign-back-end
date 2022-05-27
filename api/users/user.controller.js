const {
    createUser,
    getAllUsers,
    getUserByEmail,
    getUserById,
    updateUser,
    deleteUser,
  } = require('./user.services');
  
  //const crypto=require('crypto');
  //const { sendMailSendGrid } =require('../../utils/emails');
  
  async function handlerCreateUser(req, res) {
    const newUser = req.body;
    try {
      //const hash=crypto.createHash('sha256')
      //.update(newUser.email)
      //.digest('hex');
      //newUser.passwordResetToken=hash;
      //newUser.passwordResetExpires=Date.now()+3600000*24;
  
      const user = await createUser(newUser);

/*      const data={
        from:'"no-reply" <parkingappsince2022@gmail.com>',
        to: user.email,
        subject: 'Active your account template',
        template_id: 'd-dc043ce4c5df454fb0d9395636b058ea',
        dynamic_template_data:{
          firstName:user.firstName,
          lastName:user.lastName,
          url:`https://parkingappreal.netlify.app/activate/${hash}`
        },
      };
  
      await sendMailSendGrid(data); */
  
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  
  async function handlerGetAllUsers(req, res) {
    const filterConditions = req.query;
    if (Object.keys(filterConditions).length === 0) {
      const users = await getAllUsers();
      res.status(201).json(users);
    } else {
      const { email } = filterConditions;
      const users = await getUserByEmail(email);
      res.status(201).json(users);
    }
  }
  
  async function handlerGetUserByEmail(req, res) {
    const { email } = req.body;
    const user = getUserByEmail(email);
  
    if (!user) {
      return res.status(404);
    }
    return res.status(200).json(user);
  }
  
  async function handlerGetOneUser(req, res) {
    const { id } = req.params;
    try {
      const user = await getUserById(id);
      res.status(201).json(user);
    } catch (err) {
      res.status(400).json(err);
    }
  }
  
  async function handlerUpdateUser(req, res) {
    const { id } = req.params;
    const newInfo=req.body;
    const user = await updateUser(id,newInfo);
  
    if (!user) {
      return res.status(404);
    }
  
    return res.status(200).json(user);
  }
  
  async function handlerDeleteUser(req, res) {
    const { id } = req.params;
    const user = await deleteUser(id);
  
    if (!user) {
      return res.status(404);
    }
  
    return res.status(200).json({message:'Usuario fue eliminado...!'});
  }
  
  module.exports = {
    handlerCreateUser,
    handlerGetAllUsers,
    handlerGetUserByEmail,
    handlerGetOneUser,
    handlerUpdateUser,
    handlerDeleteUser,
  };
