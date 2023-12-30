import { ModeloUsuario, ModeloUsuarioTipo, Modelocoleccion_de_comics, Modelocoleccion_de_comicsType, Modelocomics, ModelocomicsType } from "../db/Schema.ts";
import { GraphQLError } from "graphql";


export const Mutation = {
    crearusuario : async (_:unknown, args: {name: string, correo_electronico: string, coleccion_de_comics: string}): Promise<ModeloUsuarioTipo> => {
        const usuario = {
            name: args.name,
            correo_electronico: args.correo_electronico,
            coleccion_de_comics: args.coleccion_de_comics
        }

        const nuevousuario= await ModeloUsuario.create(usuario);

        return nuevousuario;
    },

    eliminarusuario: async(_:unknown, args: {id: string}): Promise<ModeloUsuarioTipo> => {

        const usuario= await ModeloUsuario.findByIdAndDelete(args.id).exec();

        if (!usuario) {
            throw new GraphQLError("Usuario no encontrado");
        }

        return usuario;
    },

    modificarusuario: async(_:unknown, args: {id: string, name: string, correo_electronico:string, coleccion_de_comics: string}): Promise<ModeloUsuarioTipo> => {
        const usuario= await ModeloUsuario.findByIdAndUpdate(args.id,{
            name: args.name,
            correo_electronico: args.correo_electronico,
            coleccion_de_comics: args.coleccion_de_comics
        }, {new:true});

        if (!usuario) {
            throw new GraphQLError("No se han actualizado los datos");
        }

        return usuario;
    },

    crearcomic : async (_:unknown, args: {titulo: string, descripcion: string, formato: string}): Promise<ModelocomicsType> => {
        const comic = {
            titulo: args.titulo,
            descripcion: args.descripcion,
            formato: args.formato
        }

        const nuevocomic= await Modelocomics.create(comic);

        return nuevocomic;
    },

    eliminarcomic: async(_:unknown, args: {id:string}): Promise<ModelocomicsType> => {

        const comic= await Modelocomics.findByIdAndDelete(args.id).exec();

        if (!comic) {
            throw new GraphQLError("Usuario no encontrado");
        }

        return comic;
    },

    modificarcomic: async(_:unknown, args: {id: string, titulo: string, descripcion: string, formato: string}): Promise<ModelocomicsType> => {
       
        const comic= await Modelocomics.findOneAndUpdate({_id: args.id},{
            titulo: args.titulo,
            descripcion: args.descripcion,
            formato: args.formato
        }, {new: true});

        if (!comic) {
            throw new GraphQLError("No se han actualizado los datos");
        }

        return comic;
    },

    crearcoleccion_de_comic: async(_:unknown, args: {name:string, comics: [string]}): Promise<Modelocoleccion_de_comicsType> => {
        const coleccion_de_comics = {
            name: args.name,
            comics: args.comics
        }

        const nuevacoleccion_de_comics= await Modelocoleccion_de_comics.create(coleccion_de_comics)
   
        return nuevacoleccion_de_comics;
    },

    eliminarcolecciondecomics: async(_:unknown, args: {id:string}): Promise<Modelocoleccion_de_comicsType> => {
        
        const coleccion_de_comics= await Modelocoleccion_de_comics.findByIdAndDelete(args.id)

        if (!coleccion_de_comics) {
            throw new GraphQLError("No se ha encontado la coleccion de comics a eliminar")
        }

        return coleccion_de_comics;
    },

    modidicarcoleccion_de_comics: async(_:unknown, args: {id:string, name:string, comics: [string]}): Promise<Modelocoleccion_de_comicsType> =>{

        const coleccion_de_comics= await Modelocoleccion_de_comics.findByIdAndUpdate(args.id, {
            name: args.name,
            comics: args.comics
        }, {new:true})

        if (!coleccion_de_comics) {
            throw new GraphQLError("No encontrada la coleccion de comics")
        }

        return coleccion_de_comics;
    }

}