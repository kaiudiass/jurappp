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
      "juros_arrecadado": 100.00,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    },
    {
      "nome": "Maria Oliveira",
      "valor_inicial_do_emprestimo": 500.00,
      "data_do_emprestimo": "2025-02-20",
      "data_do_vencimento": "2025-03-20",
      "porcentagem_cobrada": 12,
      "juros_arrecadado": 60.00,
      "situacao_do_emprestimo": "pago",
      "finalizado": true
    },
    {
      "nome": "João Santos",
      "valor_inicial_do_emprestimo": 2000.00,
      "data_do_emprestimo": "2025-01-15",
      "data_do_vencimento": "2025-02-15",
      "porcentagem_cobrada": 15,
      "juros_arrecadado": 300.00,
      "situacao_do_emprestimo": "atrasado",
      "finalizado": false
    },
    {
      "nome": "Ana Costa",
      "valor_inicial_do_emprestimo": 750.00,
      "data_do_emprestimo": "2025-02-10",
      "data_do_vencimento": "2025-03-10",
      "porcentagem_cobrada": 8,
      "juros_arrecadado": 60.00,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    },
    {
      "nome": "Pedro Almeida",
      "valor_inicial_do_emprestimo": 3000.00,
      "data_do_emprestimo": "2024-12-01",
      "data_do_vencimento": "2025-01-01",
      "porcentagem_cobrada": 20,
      "juros_arrecadado": 600.00,
      "situacao_do_emprestimo": "pago",
      "finalizado": true
    },
    {
      "nome": "Beatriz Lima",
      "valor_inicial_do_emprestimo": 1200.00,
      "data_do_emprestimo": "2025-02-05",
      "data_do_vencimento": "2025-03-05",
      "porcentagem_cobrada": 9,
      "juros_arrecadado": 108.00,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    },
    {
      "nome": "Ricardo Mendes",
      "valor_inicial_do_emprestimo": 4000.00,
      "data_do_emprestimo": "2025-01-25",
      "data_do_vencimento": "2025-02-25",
      "porcentagem_cobrada": 18,
      "juros_arrecadado": 720.00,
      "situacao_do_emprestimo": "atrasado",
      "finalizado": false
    },
    {
      "nome": "Fernanda Rocha",
      "valor_inicial_do_emprestimo": 650.00,
      "data_do_emprestimo": "2025-02-12",
      "data_do_vencimento": "2025-03-12",
      "porcentagem_cobrada": 7,
      "juros_arrecadado": 45.50,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    },
    {
      "nome": "Gustavo Pereira",
      "valor_inicial_do_emprestimo": 5000.00,
      "data_do_emprestimo": "2024-11-15",
      "data_do_vencimento": "2024-12-15",
      "porcentagem_cobrada": 25,
      "juros_arrecadado": 1250.00,
      "situacao_do_emprestimo": "pago",
      "finalizado": true
    },
    {
      "nome": "Tatiane Nunes",
      "valor_inicial_do_emprestimo": 850.00,
      "data_do_emprestimo": "2025-02-08",
      "data_do_vencimento": "2025-03-08",
      "porcentagem_cobrada": 10,
      "juros_arrecadado": 85.00,
      "situacao_do_emprestimo": "pendente",
      "finalizado": false
    }
  ]
  ;



  return (
    <div className={style.ContainerClientList}>
      <div className={style.ContainerTable}>

      
      <table className={style.ClientTable}>
        <thead>
          <tr>
            <th>Nome</th>
            <th style={{ display: larguraTela <= 835 ? 'none' : ' ' }} >Lucro total</th>
            <th style={{ display: larguraTela <= 685 ? 'none' : ' ' }} >% Cobrada</th>
            <th>Valor do emprestimo</th>
            <th>Vencimento</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>

        {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.nome}</td>
              <td style={{ display: larguraTela <= 835 ? 'none' : '' }}>R$ {client.juros_arrecadado} </td>
              <td style={{ display: larguraTela <= 685 ? 'none' : ' ' }} >{client.porcentagem_cobrada} %</td>
              <td>R$ {client.valor_inicial_do_emprestimo}</td>
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
