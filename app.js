const app = Vue.createApp({

    data(){
        return{
            errors:[],
            navn: null,
            email: null,
            password: null,
            gentagPassword: null,
            telefon: null,
            adresse: null,
            postnummer: null,
        }
    },
    methods:{
        valideringForm:function(e) {
            if(this.navn && this.email && this.password && 
                this.gentagPassword && this.telefon && this.adresse 
                && this.postnummer) return true
            this.errors = []
            if(!this.navn) this.errors.push("Navn mangler.")
            if(!this.email) this.errors.push("Email mangler.")
            if(!this.password) this.errors.push("Password mangler.")
            if(!this.gentagPassword) this.errors.push("Password mangler at blive gentaget.")
            if(!this.telefon) this.errors.push("Telefonnummer mangler.")
            if(!this.adresse) this.errors.push("Adresse mangler.")
            if(!this.postnummer) this.errors.push("Postnummer mangler.")
            e.preventDefault()
        }
    }
    

})

app.mount('#minForm')
