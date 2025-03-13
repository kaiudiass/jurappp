import React, { useContext } from 'react';
import style from './ContainerClientList.module.css';
import MenuContext from '../../../Context/MenuContext';
import { FaWhatsapp } from "react-icons/fa";
import { RiDeleteBin6Line } from "react-icons/ri";
import { HiOutlinePencil } from "react-icons/hi2";
const ClientList = () => {

  const { menuAtivo, larguraTela} = useContext(MenuContext);

  const clients = [
    { nome: 'Kaio Dias', endereco: 'Eudes Mendes', telefone: '33998774422', ultimaAtualizacao: '13/10/2003', situacao: 'Ativo' },
    { nome: 'Maria Silva', endereco: 'Rua A', telefone: '33987654321', ultimaAtualizacao: '10/02/2025', situacao: 'Inativo' },
    { nome: 'José Oliveira', endereco: 'Rua B', telefone: '33876543210', ultimaAtualizacao: '15/01/2024', situacao: 'Ativo' },
    { nome: 'Ana Souza', endereco: 'Rua C', telefone: '33765432109', ultimaAtualizacao: '05/05/2023', situacao: 'Ativo' },
    { nome: 'Carlos Almeida', endereco: 'Rua D', telefone: '33654321098', ultimaAtualizacao: '08/08/2024', situacao: 'Ativo' },
    { nome: 'Pedro Gomes', endereco: 'Rua E', telefone: '33543210987', ultimaAtualizacao: '20/09/2022', situacao: 'Inativo' },
    { nome: 'Julia Santos', endereco: 'Rua F', telefone: '33432109876', ultimaAtualizacao: '12/12/2023', situacao: 'Ativo' },
    { nome: 'Lucas Rocha', endereco: 'Rua G', telefone: '33321098765', ultimaAtualizacao: '17/11/2021', situacao: 'Ativo' },
    { nome: 'Fernanda Costa', endereco: 'Rua H', telefone: '33210987654', ultimaAtualizacao: '25/10/2020', situacao: 'Inativo' },
    { nome: 'Rafael Pereira', endereco: 'Rua I', telefone: '33109876543', ultimaAtualizacao: '30/09/2021', situacao: 'Ativo' },
    { nome: 'Mariana Martins', endereco: 'Rua J', telefone: '33098765432', ultimaAtualizacao: '22/08/2022', situacao: 'Inativo' },
    { nome: 'Tiago Costa', endereco: 'Rua K', telefone: '32987654321', ultimaAtualizacao: '14/07/2023', situacao: 'Ativo' },
    { nome: 'Carla Lima', endereco: 'Rua L', telefone: '32876543210', ultimaAtualizacao: '03/06/2024', situacao: 'Ativo' },
    { nome: 'Paulo Rocha', endereco: 'Rua M', telefone: '32765432109', ultimaAtualizacao: '21/05/2022', situacao: 'Inativo' },
    { nome: 'Isabela Ferreira', endereco: 'Rua N', telefone: '32654321098', ultimaAtualizacao: '19/04/2021', situacao: 'Ativo' },
    { nome: 'Gabriel Sousa', endereco: 'Rua O', telefone: '32543210987', ultimaAtualizacao: '07/03/2020', situacao: 'Ativo' },
    { nome: 'Daniela Almeida', endereco: 'Rua P', telefone: '32432109876', ultimaAtualizacao: '10/02/2024', situacao: 'Ativo' },
    { nome: 'Vitor Oliveira', endereco: 'Rua Q', telefone: '32321098765', ultimaAtualizacao: '06/01/2023', situacao: 'Inativo' },
    { nome: 'Letícia Ribeiro', endereco: 'Rua R', telefone: '32210987654', ultimaAtualizacao: '28/12/2022', situacao: 'Ativo' },
    { nome: 'Renato Santos', endereco: 'Rua S', telefone: '32109876543', ultimaAtualizacao: '16/11/2024', situacao: 'Ativo' },
    { nome: 'Camila Martins', endereco: 'Rua T', telefone: '32098765432', ultimaAtualizacao: '09/10/2021', situacao: 'Inativo' }
  ];



  return (
    <div className={style.ContainerClientList}>
      <div className={style.ContainerTable}>

      
      <table className={style.ClientTable}>
        <thead>
          <tr>
            <th>Nome</th>
            <th style={{ display: larguraTela <= 835 ? 'none' : ' ' }} >Endereço</th>
            <th style={{ display: larguraTela <= 685 ? 'none' : ' ' }} >Telefone</th>
            <th>Última Atualização</th>
            <th>Situação</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>

        {clients.map((client, index) => (
            <tr key={index}>
              <td>{client.nome}</td>
              <td style={{ display: larguraTela <= 835 ? 'none' : '' }}>{client.endereco}</td>
              <td style={{ display: larguraTela <= 685 ? 'none' : ' ' }} >{client.telefone}</td>
              <td>{client.ultimaAtualizacao}</td>
              <td>{client.situacao}</td>
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

export default ClientList;
