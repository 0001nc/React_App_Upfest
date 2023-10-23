import axios from "axios";


const axiosFest = axios.create({
    baseURL: "https://upfest.site",
    headers: {
        'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6Ijc1MS5zcHJ0QGdtYWlsLmNvbSIsImlhdCI6MTY5NjAyODIzNiwiZXhwIjoxNzI3NTY0MjM2fQ.hsdSnv8QriHaubWOyKqTTcAbPE-Ng9VmZU1J-fe9xeQ',
    },
})
export default axiosFest;
