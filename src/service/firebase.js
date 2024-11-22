// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, doc, getDoc, collection, getDocs, addDoc, query, where, limit } from "firebase/firestore";
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
      imagem: ImagemProduto1,
      imagem2: ImagemProduto2,
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1
    },
    {
      titulo: 'Saia Longa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: ImagemProduto2,
      imagem2: ImagemProduto4,
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1
    },
    {
      titulo: 'Blazer Alfaiataria de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: ImagemProduto3,
      imagem2: ImagemProduto6,
      preco: 599.90,
      precoAvista: 539.90,
      parcela: 59.90,
      quantidade: 1
    },
    {
      titulo: 'Vestido Longo de Malha Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: ImagemProduto4,
      imagem2: ImagemProduto8,
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1
    },
    {
      titulo: 'Camisa de Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: ImagemProduto5,
      imagem2: ImagemProduto1,
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1
    },
    {
      titulo: 'Camisa Oversized Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: ImagemProduto6,
      imagem2: ImagemProduto2,
      preco: 199.90,
      precoAvista: 179.90,
      parcela: 19.90,
      quantidade: 1
    },
    {
      titulo: 'Macaquinho Curto de Linho premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: ImagemProduto7,
      imagem2: ImagemProduto3,
      preco: 399.90,
      precoAvista: 359.90,
      parcela: 39.90,
      quantidade: 1
    },
    {      
      titulo: 'Top Cropped de Amarracao Linho Premium',
      descricao: 'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English.',
      imagem: ImagemProduto8,
      imagem2: ImagemProduto4,
      preco: 299.90,
      precoAvista: 269.90,
      parcela: 29.90,
      quantidade: 1
    }    
  ]

produtos.forEach(async(obj) => { 
    const docRef = await addDoc(collection(db, "produtos"), obj); 
    console.log("Document written with ID: ", docRef.id); 
});
