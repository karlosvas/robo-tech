'use strict'
import { modelUser } from '../../models/User.js'

export async function deleteUser(user) {
    const result = await modelUser.findOneAndDelete({ username: user })
    // Elimina el primer dato que coincida datos que coincidan con el argumento.
    return result;
}

export async function deleteAllUser(user) {
    const result = await modelUser.deleteMany({ username: user })
    // Elimina todos los datos que coincidan con el argumento.
    return result;
}

// deleteProduct("")
//     .then((result) => console.log(result));

// Podremos borrarlo por id utilizando findByIdAndDelate("id")