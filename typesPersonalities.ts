// type Person = {
//     id:number,
//     name:string
// }

// type Teacher {
//     subjects:string[]
// }

// type Student = Person & {
//     age:number
// }

// let teacher:Teacher
// let student:Student

// INTERFACE x TYPE

// type TBaseProduct = {
//     price:number
// }

// interface IProduct extends TProduct {
//     id:number,
//     name:string
// }

// type TProduct = TBaseProduct & {
//     id:number,
//     name:string
// }

// let p1:IProduct
// let p2:TProduct

// p1.id = 0
// p2.id = 1

// INTERFACES SÃO SOBRESCRITAS

// =========================
// ASSERÇÃO DE TIPOS
// =========================

// type UserResponse = {
//     ui:number,
//     name:string,
//     avatar:string
// }

// let userResponse = {} as UserResponse

// =========================
// RESTRINGINDO VALORES
// =========================

// type Size = "small" | "big" | "medium"

// let size:string

// size = "dwdw"

// =========================
// ENUMS
// =========================

// enum Profile {
//     Admin = 1,
//     Client = 2,
//     Seller = 3
// }

// console.log(Profile.Admin)

// =========================
// GENERIC
// =========================

// function useState<T extends number | string = string>() {
//     let state: T

//     function get() {
//         return state
//     }

//     function set(newValue: T) {
//         state = newValue
//     }

//     return { get, set }
// }

// let newState = useState<string>()
// newState.get()
// newState.set('123')