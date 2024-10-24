// // =========================
// // PARTIAL
// // =========================

// interface User {
//     id: number,
//     name: string,
//     email: string // TRANSFORMA NUM CAMPO OPCIONAL
// }

// const newUser: Partial<User> = { // TRANSFORMA TODO OS CAMPOS EM OPCINIONAIS
//     id: 1,
//     name: 'vitor',
// }

// // =========================
// // PICK - PEGA APENAS UM CAMPO E DEIXA OBRIGATÓRIO
// // =========================

// interface Book {
//     title: string,
//     pages: number,
//     author: string
// }

// const book: Pick<Book, 'title' | 'pages'> = {
//     title: 'Goblins',
//     pages: 168
// }

// =========================
// OMIT - OMITE PROPRIEDADES
// =========================

// interface Book {
//     title: string,
//     pages: number,
//     author: string,
//     description: string    
// }

// const book: Omit<Book, 'title'> = {
//     pages: 3,
//     author: 'vitor',
//     description: "i can't breath"
// }

// =========================
// RECORD - DICIONÁRIOS
// =========================

// const scores: Record<string, number> = {
//     'Rodrigo': 10,
//     'Mayk': 15
// }

// // LIMITAR VALORES

// type Profile = 'admin' | 'user' | 'guest'

// const user: Record<Profile, number> = {
//     'admin': 25
// }

// =========================
// TYPEOF - PEGAR OS TIPOS
// =========================

// interface IProduct {
//     id: number,
//     name: string
// }

// const product1: IProduct = {
//     id: 1,
//     name: 'teclado'
// }

// const product2: typeof product1 = {
//     id: 7,
//     name: 'monitor'
// }

// =========================
// KEYOF
// =========================

const icons = {
    'home': './path/home.svg',
    'add': './path/add.svg',
    'remove': './path/remove.svg'
}

type Icon = typeof icons

const icon: keyof Icon = 'add'