export type usuario={
    id: string,
    name: string,
    correo_electronico: string,
    coleccion_de_comics: coleccion_de_comics
}

export type coleccion_de_comics={
    id: string,
    name: string,
    comics: comics[]
}

export type comics={
    id: string,
    titulo: string,
    descripcion: string,
    formato: string
}