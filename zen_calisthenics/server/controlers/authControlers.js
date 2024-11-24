import User from '../models/user.model'


export const registro = async (req, res) => {
  const {nombre_usuario, nombre, correo, numero, contrasena, rol} = req.body;
    
 try{
    const newUser = new User({
        nombre_usuario,
        nombre,
        correo,
        numero,
        contrasena,
        rol
        })
    
      await newUser.save();
      res.send('pepe');

 }catch(error){
    console.log(error);
 }

 
};
export const login = (req, res) => res.send('login');