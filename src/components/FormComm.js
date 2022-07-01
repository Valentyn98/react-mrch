import React from 'react';
import {useForm} from "react-hook-form";

const Form = () => {
    let usersId = [
        {id:1,name:'asd'},
        {id:2,name:'ccc'},
        {id:3,name:'www'},
        {id:4,name:'qwe'}
    ]
    let {register,handleSubmit,formState:{errors}} = useForm({defaultValues:{title:"title",body:"body",email:'email'}})

    return (
        <div>
            <form onSubmit={handleSubmit((obj) =>{
                console.log(obj)
                fetch("https://jsonplaceholder.typicode.com/comments",
                    {
                        method: "POST",
                        body: JSON.stringify(obj),
                        headers: {'Content-type':'application/json; charset=UTF-8'}
                    })
                    .then(response => response.text())
                    .then(result => console.log(result))
            })}>
                <input type="text" {...register("title",{required:true})}/>
                {
                    errors.title && <span>Заполните поле</span>
                }
                <input type="text" {...register("body", {required:true})}/>
                {
                    errors.body && <span>Заполните поле</span>
                }
                <input type="email" {...register("email", {required:true})}/>
                {
                    errors.body && <span>Заполните поле</span>
                }
                <select name="" id="" {...register("usersId")}>
                    {usersId.map(value => <option value={value.id} key={value.id}>{value.name}</option>)}
                </select>
                <button>Save</button>
            </form>
        </div>
    );
};

export default Form;