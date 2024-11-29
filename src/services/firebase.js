// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, addDoc, query, where, limit } from "firebase/firestore";

import ImagemProduto1 from '../components/img/1.png'
import ImagemProduto2 from '../components/img/2.jpg'
import ImagemProduto3 from '../components//img/3.jpg'
import ImagemProduto4 from '../components/img/4.png'
import ImagemProduto5 from '../components/img/5.jpg'
import ImagemProduto6 from '../components/img/6.png'
import ImagemProduto7 from '../components//img/7.png'
import ImagemProduto8 from '../components/img/8.png'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA8h1z1T-L1HG_q8TxcFJkRYi8yJVHr4UM",
  authDomain: "turma-63745---react.firebaseapp.com",
  projectId: "turma-63745---react",
  storageBucket: "turma-63745---react.firebasestorage.app",
  messagingSenderId: "551470505509",
  appId: "1:551470505509:web:363bf558fa157bcb18a9cc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export default db; 

const produtos = [
    {
      titulo: 'Macaquinho Curto com Bolsos',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/1.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/2.jpg?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: 'principal',
      categoria: 'macaquinho'
    },
    {
      titulo: 'Saia Longa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/3.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/4.png?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: 'principal',
      categoria: 'saia'
    },
    {
      titulo: 'Blazer Alfaiataria de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/5.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/6.png?raw=true?raw=true",
      preco: 599.90,
      precoAvista: 539.90,
      parcela: 59.90,
      quantidade: 1,
      vitrine: 'principal',
      categoria: 'blazer'
    },
    {
      titulo: 'Vestido Longo de Malha Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/7.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/8.png?raw=true?raw=true",
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1,
      vitrine: 'principal',
      categoria: 'vestido'
    },
    {
      titulo: 'Camisa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/1.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/2.jpg?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: 'secundaria',
      categoria: 'camisa'
    },
    {
      titulo: 'Camisa Oversized Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/3.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/4.png?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: 'secundaria',
      categoria: 'camisa'
    },
    {
      titulo: 'Macaquinho Curto de Linho premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/5.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/6.png?raw=true?raw=true",
      preco: 399.90,
      precoAvista: 359.90,
      parcela: 39.90,
      quantidade: 1,
      vitrine: 'secundaria',
      categoria: 'macaquinho'
    },
    {      
      titulo: 'Top Cropped de Amarracao Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/7.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/8.png?raw=true?raw=true",
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1,
      vitrine: 'secundaria',
      categoria: 'cropped'
    },
    {
      titulo: 'Macaquinho Curto com Bolsos',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/1.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/2.jpg?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'macaquinho'
    },
    {
      titulo: 'Saia Longa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/3.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/4.png?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'saia'
    },
    {
      titulo: 'Blazer Alfaiataria de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/5.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/6.png?raw=true?raw=true",
      preco: 599.90,
      precoAvista: 539.90,
      parcela: 59.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'blazer'
    },
    {
      titulo: 'Vestido Longo de Malha Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/7.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/8.png?raw=true?raw=true",
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'vestido'
    },
    {
      titulo: 'Camisa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/1.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/2.jpg?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'camisa'
    },
    {
      titulo: 'Camisa Oversized Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/3.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/4.png?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'camisa'
    },
    {
      titulo: 'Macaquinho Curto de Linho premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/5.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/6.png?raw=true?raw=true",
      preco: 399.90,
      precoAvista: 359.90,
      parcela: 39.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'macaquinho'
    },
    {      
      titulo: 'Top Cropped de Amarracao Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/7.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/8.png?raw=true?raw=true",
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'cropped'
    },
    {
      titulo: 'Macaquinho Curto com Bolsos',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/1.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/2.jpg?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'macaquinho'
    },
    {
      titulo: 'Saia Longa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/3.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/4.png?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'saia'
    },
    {
      titulo: 'Blazer Alfaiataria de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/5.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/6.png?raw=true?raw=true",
      preco: 599.90,
      precoAvista: 539.90,
      parcela: 59.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'blazer'
    },
    {
      titulo: 'Vestido Longo de Malha Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/7.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/8.png?raw=true?raw=true",
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'vestido'
    },
    {
      titulo: 'Camisa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/1.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/2.jpg?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'camisa'
    },
    {
      titulo: 'Camisa Oversized Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/3.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/4.png?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'camisa'
    },
    {
      titulo: 'Macaquinho Curto de Linho premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/5.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/6.png?raw=true?raw=true",
      preco: 399.90,
      precoAvista: 359.90,
      parcela: 39.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'macaquinho'
    },
    {      
      titulo: 'Top Cropped de Amarracao Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/7.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/8.png?raw=true?raw=true",
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'cropped'
    },
    {
      titulo: 'Macaquinho Curto com Bolsos',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/1.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/2.jpg?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'macaquinho'
    },
    {
      titulo: 'Saia Longa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/3.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/4.png?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'saia'
    },
    {
      titulo: 'Blazer Alfaiataria de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/5.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/6.png?raw=true?raw=true",
      preco: 599.90,
      precoAvista: 539.90,
      parcela: 59.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'blazer'
    },
    {
      titulo: 'Vestido Longo de Malha Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/7.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/8.png?raw=true?raw=true",
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'vestido'
    },
    {
      titulo: 'Camisa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/1.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/2.jpg?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'camisa'
    },
    {
      titulo: 'Camisa Oversized Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/3.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/4.png?raw=true?raw=true",
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'camisa'
    },
    {
      titulo: 'Macaquinho Curto de Linho premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/5.jpg?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/6.png?raw=true?raw=true",
      preco: 399.90,
      precoAvista: 359.90,
      parcela: 39.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'macaquinho'
    },
    {      
      titulo: 'Top Cropped de Amarracao Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/7.png?raw=true?raw=true",
      imagem2: "https://github.com/vilela00/ecommerce-marcos-react/blob/master/src/components/img/8.png?raw=true?raw=true",
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1,
      vitrine: '',
      categoria: 'cropped'
    }
  ]

// console.log('firebase')
// // Popular a collection produtos
// produtos.forEach(async (obj) => {
//   const docRef = await addDoc(collection(db, "produtos"), obj);
//   console.log("Document written with ID: ", docRef.id);
// });