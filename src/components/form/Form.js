import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../../store/defaultSlice';
import Button from '../button/Button';
import ButtonBack from '../buttonBack/ButtonBack';
import InputCard from '../inputCard/InputCard';

const Form = ({title, titlesInputs, typesInputs, data, transferData,path }) => {

    let fields = [];
    for(var property in data) {
        fields.push(property);
    }

    let values = [];
    for(var property in data) {
        values.push(data[property]);
    }

    const [form, setForm] = React.useState(data);

    const handleChange = (event) => {
        setForm({
          ...form,
          [event.target.id]: event.target.value
        });
    };

    const handleSubmit = async (event) => {
        console.log('handleSubmit');
        event.preventDefault();
        transferData(form);
    };

    return (
        <div>
            <div>
                {title}
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    {fields.map((field, index) => (
                        <InputCard 
                            id={field} 
                            title={titlesInputs[index]} 
                            type={typesInputs[index]}
                            value={values[index]} 
                            handleChange={handleChange}
                        />
                    ))}
                </form>
            </div>
            <div>
                <Button title={'Сохранить'} activate={handleSubmit} />
                <ButtonBack path={path} title={'Назад'} />
            </div>
        </div>
    );
};

export default Form;