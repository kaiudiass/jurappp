import React, { useContext } from 'react';
import style from './ContainerClientList.module.css';
import MenuContext from '../../../Context/MenuContext';
import { FaWhatsapp } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
const ContainerLoansList = () => {

  const { menuAtivo, larguraTela} = useContext(MenuContext);

  const clients = [
    {
      "nome": "Carlos Silva",
      "valor_inicial_do_emprestimo": 1000.00,
      "data_do_emprestimo": "2025-02-25",
      "data_do_vencimento": "2025-03-25",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 800.00,
      "parcela": 100.00,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    },
    {
      "nome": "Maria Oliveira",
      "valor_inicial_do_emprestimo": 500.00,
      "data_do_emprestimo": "2025-02-20",
      "data_do_vencimento": "2025-03-20",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 350.00,
      "parcela": 50.00,
      "situacao_do_emprestimo": "pago",
      "finalizado": true
    },
    {
      "nome": "João Santos",
      "valor_inicial_do_emprestimo": 2000.00,
      "data_do_emprestimo": "2025-01-15",
      "data_do_vencimento": "2025-02-15",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 1500.00,
      "parcela": 200.00,
      "situacao_do_emprestimo": "atrasado",
      "finalizado": false
    },
    {
      "nome": "Ana Costa",
      "valor_inicial_do_emprestimo": 750.00,
      "data_do_emprestimo": "2025-02-10",
      "data_do_vencimento": "2025-03-10",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 600.00,
      "parcela": 75.00,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    },
    {
      "nome": "Pedro Almeida",
      "valor_inicial_do_emprestimo": 3000.00,
      "data_do_emprestimo": "2024-12-01",
      "data_do_vencimento": "2025-01-01",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 2000.00,
      "parcela": 300.00,
      "situacao_do_emprestimo": "pago",
      "finalizado": true
    },
    {
      "nome": "Beatriz Lima",
      "valor_inicial_do_emprestimo": 1200.00,
      "data_do_emprestimo": "2025-02-05",
      "data_do_vencimento": "2025-03-05",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 1000.00,
      "parcela": 120.00,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    },
    {
      "nome": "Ricardo Mendes",
      "valor_inicial_do_emprestimo": 4000.00,
      "data_do_emprestimo": "2025-01-25",
      "data_do_vencimento": "2025-02-25",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 3500.00,
      "parcela": 400.00,
      "situacao_do_emprestimo": "atrasado",
      "finalizado": false
    },
    {
      "nome": "Fernanda Rocha",
      "valor_inicial_do_emprestimo": 650.00,
      "data_do_emprestimo": "2025-02-12",
      "data_do_vencimento": "2025-03-12",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 500.00,
      "parcela": 65.00,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    },
    {
      "nome": "Gustavo Pereira",
      "valor_inicial_do_emprestimo": 5000.00,
      "data_do_emprestimo": "2024-11-15",
      "data_do_vencimento": "2024-12-15",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 4500.00,
      "parcela": 500.00,
      "situacao_do_emprestimo": "pago",
      "finalizado": true
    },
    {
      "nome": "Tatiane Nunes",
      "valor_inicial_do_emprestimo": 850.00,
      "data_do_emprestimo": "2025-02-08",
      "data_do_vencimento": "2025-03-08",
      "porcentagem_cobrada": 10,
      "lucro_sobre_emprestimo": 700.00,
      "parcela": 85.00,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    }
  ];

  
//se a situacao do emprestimo for igual
// pendente background color yelow
// atrasado background color red
//  pago  background color yelow

const Background = (emprestimo) =>{
  if(emprestimo == "pendente"){
    
    return "#ffee5930" 
  }
  else if(emprestimo == "atrasado"){
    return "#ff000030" 
  }else{
    return "#fff" 
  }

} 

  return (
    <div className={style.ContainerClientList}>
      <div className={style.ContainerTable}>

      
      <table className={style.ClientTable}>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Valor do emprestimo</th>
            <th style={{ display: larguraTela <= 835 ? 'none' : ' ' }} >Parcela</th>
            <th style={{ display: larguraTela <= 685 ? 'none' : ' ' }} >% Cobrada</th>
            
            <th>Vencimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>

        {clients.map((client, index) => (
            <tr key={index} style={{backgroundColor: Background(client.situacao_do_emprestimo)} }>
              <td>{client.nome}</td>
              <td>R$ {client.valor_inicial_do_emprestimo}</td>
              <td style={{ display: larguraTela <= 835 ? 'none' : '' }}>R$ {client.parcela} </td>
              <td style={{ display: larguraTela <= 685 ? 'none' : ' ' }} >{client.porcentagem_cobrada} %</td>
             
              <td>{client.data_do_vencimento}</td>
              <td className={style.Acoes}>
                <span><FaWhatsapp /></span>
                <span><HiOutlinePencil /></span>
                <span><RiDeleteBin6Line /></span>
              </td>
            </tr>
          ))}


        </tbody>
      </table>
      </div>
    </div>
  );
};

export default ContainerLoansList;
