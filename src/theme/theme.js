import { createMuiTheme } from '@material-ui/core/styles';


const theme = createMuiTheme(
    {
        typography : {
            useNextVariants : true
        },
        palette : {
            primary : {
                main : '#1176b6'//009be5,006db3
            },
            common : {
                white : 'white'
            },
            secondary : {
                main : '#e53935'
            }
        },
        spacing : 10
    }
);


export default  theme;
