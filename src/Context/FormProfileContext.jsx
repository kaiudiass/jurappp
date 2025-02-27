import React, { createContext, useState } from "react";

// Cria o contexto
const FormProfileContext = createContext();

// Cria o provider
export const FormProfileProvider = ({ children }) => {
    const userInfo = {
        Name: 'kaiu',
        Cidade: 'Divisópolis',
        Email: 'kaio@gmail.com',
        Sobrenome: 'Dias',
        Endereço: 'Eudes Mendes 112',
        Senha: ''
    };

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState(userInfo);
    const [stateSave, setStateSave] = useState(false);

    const handleSave = (updatedInfo) => {
        console.log('Dados atualizados:', updatedInfo);
        // Aqui você pode fazer a chamada ao backend para salvar as informações
    };

    const handleEditClick = () => {
    
        setIsEditing(!isEditing);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSaveClick = () => {
        
        setStateSave(true)
       
        setIsEditing(false);
        handleSave(formData); 

        //quando terminar de salvar, deve mudar o estado de salvando
        setInterval(() => {
            setStateSave(false) 
        }, 3000);
        
        
    };

    return (
        <FormProfileContext.Provider 
            value={{ 
                isEditing, 
                setIsEditing, 
                formData, 
                setFormData, 
                userInfo, 
                handleSave, 
                handleEditClick, 
                handleChange, 
                handleSaveClick,
                stateSave
            }}
        >
            {children}
        </FormProfileContext.Provider>
    );
};

// Exporta o contexto e o provider
export default FormProfileContext;