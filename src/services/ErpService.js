import {AUTH_CONFIG} from "./erpConfig";
import  axios  from 'axios';

class ErpService{
    tokenERP = () => {
        const data = {
            x : '../../sis_seguridad/control/Auten/getPublicKey',
            p : '{"_tipo":"inter"}'
        };

        const options = {
            headers : {
              'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            responseType: 'text'
        };
        return new Promise( (resolve, reject) => {
            axios.post(AUTH_CONFIG.url, data.toString(), options)
                .then(response => {
                    if(response.success){
                        console.log('EXITO', response);
                    }else{
                        console.log('Favor comunicarse con el Administrador');
                    }
                });
        });
    };
    loginERP = (user, contrasena) => {
        const data = {
            x : '../../sis_seguridad/control/Auten/verificarCredenciales',
            p : '{"_tipo":"auten", "contrasena":"'+contrasena+'", "usuario": "'+user+'"}'
        };

        const options = {
            headers : {
                'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            },
            responseType: 'text'
        };
        return new Promise( (resolve, reject) => {
            axios.post(AUTH_CONFIG.url, data.toString(), options)
                .then(response => {
                    let data = JSON.parse(JSON.stringify(eval("(" + response + ")")));
                    if(data.success){
                        console.log('EXITO', response);
                    }else{
                        console.log('Favor comunicarse con el Administrador');
                    }
                });
        });
    }
}
export default ErpService;
