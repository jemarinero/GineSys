export interface Ocupacion {
    ocupacionId: number;
    descripcion: string;
    fechaCreacion: Date;
    fechaModificacion?: Date;
    usuarioCreacion: string;
    usuarioModificacion?: string;
}