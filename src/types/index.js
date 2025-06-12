// Product interface structure:
// {
//   id: string,
//   name: string,
//   description: string,
//   price: string,
//   image: string,
//   category: string
// }

// ContactSubmission interface structure:
// {
//   id: string,
//   name: string,
//   email: string,
//   phone: string,
//   message?: string,
//   submittedAt: Date
// }

// AppContextType interface structure:
// {
//   products: Product[],
//   contactSubmissions: ContactSubmission[],
//   addProduct: (product) => void,
//   updateProduct: (id, product) => void,
//   deleteProduct: (id) => void,
//   addContactSubmission: (submission) => void
// }

export {};