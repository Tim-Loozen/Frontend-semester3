import axios from "axios";

class api {
    request;

    constructor() {
        this.request = axios.create({
            baseURL: 'http://fontys_semester3_api.test/',
            headers: {
                'Content-type': 'application/json',
            },
        });
    }

    getConfig() {
        return {
            headers: {
                "X-API-TOKEN": localStorage.getItem('token')
            }
        }
    }
    login(data)
    {
        const payload = {
            email: data.email,
            password: data.password
        }
        return this.request.post("/login", payload, this.getConfig())
    }

    createRoute(data) {
        const payload = {
            distance: data.distance,
            earnings: data.earnings,
            startpoint: data.startpoint,
            endpoint: data.endpoint,
            time: data.time,
        }

        return this.request.post("/create-route", payload, this.getConfig())
    }

    createUser(data) {
        const payload = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            password: data.password,
            address: data.address,
            city: data.city,
            state: data.state,
            zipcode: data.zipcode,
            company: data.company,
            kvk: data.kvk,
        }

        return this.request.post("/register", payload)
    }

    createPostCompany(data) {
        const payload = {
            postOfficeEmail: data.postOfficeEmail,
            postOfficeKVK: data.postOfficeKVK,
            postOfficeName: data.postOfficeName,
        }

        return this.request.post("/create_post_office", payload)
    }

    createPostCompanyAccount(data) {
        const payload = {
            firstname: data.firstname,
            lastname: data.lastname,
            email: data.email,
            position: data.position,
            cellphone: data.cellphone,
            password: data.password,
            postCompany: data.postCompany
        }
        return this.request.post(`/create_post_office_account`, payload)
    }



    getPostCompanies() {
        return this.request.get(`/post_office`)
    }

    getPostCompanyAccounts() {
        return this.request.get(`/post_office_account`)
    }

    getPostRoutes() {

        return this.request.get(`/routes`, this.getConfig())
    }

    getPostRoute(id) {
        return this.request.get(`/route/` + id, this.getConfig())
    }

    verifyToken() {
      return  this.request.get("/verifyToken", this.getConfig());
    }



}

export default api
