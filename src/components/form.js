import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    let usersId = [
        {id:1,name:'asd'},
        {id:2,name:'tkjkjkj'},
        {id:3,name:'www'},
        {id:4,name:'qwe'}
    ]
 let {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{username:"username",email:"email"}})

    return (
        <div>
            <form onSubmit={handleSubmit((obj) =>{
                console.log(obj)
                fetch("https://jsonplaceholder.typicode.com/users",
                    {
                        method: "POST",
                        body: JSON.stringify(obj),
                        headers: {'Content-type':'application/json; charset=UTF-8'}
                    })
                    .then(response => response.text())
                    .then(result => console.log(result))
            })}>
                <input type="text" {...register("username",{required:true})}/>
                {
                    errors.username && <div>Заполните поле</div>
                }
                <input type="text" {...register("email", {required:true})}/>
                {
                    errors.email && <div>Заполните поле</div>
                }
                <select name= "" id= "3" {...register("usersId")}>
                    {usersId.map(value => <option value={value.id} key={value.id}>{value.name}</option>)}
                </select>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;