import { useRef } from 'react';
import { FiCheckSquare } from 'react-icons/fi';

import { Form } from './styles';
import Modal from '../Modal';
import Input from '../Input';
import { FormHandles } from '@unform/core';

type TypeFood = {
  id:number;
  available:boolean;
  image:string;
  description:string;
  name:string;
  price:number;

}

type TypeModalEditFood = {
  editingFood: TypeFood;
  handleUpdateFood: (data: TypeData) => void;
  setIsOpen: () => void;
  isOpen: boolean;

}

type TypeData = {
  image: string;
  name: string;
  price: string;
  description: string;
}

export default function ModalEditFood({ handleUpdateFood, setIsOpen, isOpen, editingFood }: TypeModalEditFood) {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = async (data: TypeData) => {
    handleUpdateFood(data);
    setIsOpen();
  };

  return (
    <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
      <Form ref={formRef} onSubmit={handleSubmit} initialData={editingFood}>
        <h1>Editar Prato</h1>
        <Input name="image" placeholder="Cole o link aqui" />

        <Input name="name" placeholder="Ex: Moda Italiana" />
        <Input name="price" placeholder="Ex: 19.90" />

        <Input name="description" placeholder="Descrição" />

        <button type="submit" data-testid="edit-food-button">
          <div className="text">Editar Prato</div>
          <div className="icon">
            <FiCheckSquare size={24} />
          </div>
        </button>
      </Form>
    </Modal>
  );
}