import React from "react";
import Header from "./components/Header";
import Users from "./components/Users";

import axios from "axios";


// const baseUrl = "https://reqres.in/api/users?page=1"

const baseUrl = [
                    {"id":1,"job_title":"IT", "city":"Москва","department":"Отдел IT","vacancy_description":"работа с кодом", "responsibilities":"выполнять обязанности", "requirements":"требования", "registration_date":"21.04.2023", "state":"state"},
                    {"id":2,"job_title":"QA", "city":"Москва","department":"Отдел IT","vacancy_description":"работа с кодом", "responsibilities":"выполнять обязанности", "requirements":"требования", "registration_date":"22.04.2023", "state":"state"},
                    {"id":3,"job_title":"SQL","city":"Москва","department":"Отдел IT","vacancy_description":"работа с кодом", "responsibilities":"выполнять обязанности", "requirements":"требования", "registration_date":"24.04.2023", "state":"state"},
                    {"id":4,"job_title":"SQL","city":"Москва","department":"Отдел IT","vacancy_description":"работа с кодом", "responsibilities":"выполнять обязанности", "requirements":"требования", "registration_date":"24.04.2023", "state":"state"}
                ]

class App extends React.Component {
    constructor(props){
        super(props)

        // axios.get(baseUrl).then((res) => {
        //     this.setState({users: res.data.data})
        // })

        this.state = {
            users: baseUrl
        }

        this.addUser = this.addUser.bind(this)

        // this.deleteUser = this.deleteUser.bind(this)
        // this.editUser = this.editUser.bind(this)
    }

    render() {
        return(
            <div className="name">
                
                <Header title = "Список"/>
                
                

                <main>
                <button className="button_create_vacancy">Создать вакансию</button>
                
                    <Users users = {this.state.users}/>
                </main>

                <aside>
                    {/* <AddUser onAdd = {this.addUser}/> */}
                </aside>
            </div>
            )
    }

    // editUser(user) {
    //     let allUsers = this.state.users
    //     allUsers[user.id - 1] = user

    //     this.setState({users: []},() => {
    //         this.setState({users: [...allUsers] })
    //     })
    // }

    // deleteUser(id) {
    //     this.setState({
    //         users: this.state.users.filter((el) => el.id !== id)
    //     })
    // }

    addUser(user) {
        const id = this.state.users.length + 1
        this.setState({ users: [...this.state.users, {id, ...user}]})
    }
    
}

export default App

// npm run start