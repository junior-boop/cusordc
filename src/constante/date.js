class DateName {
    
    #dateInit = new Date()
    #day = ['Dimanche','Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi', 'Samedi'] 
    #mois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mais', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']
    #date = this.#dateInit.getDate() < 10 ? `0${this.#dateInit.getDate()}` : this.#dateInit.getDate(); 

    Date(){
        return this.#date
    }
    
    Day(){
        return this.#day[this.#dateInit.getDay()]
    }

    Month(){
        return this.#mois[this.#dateInit.getMonth()]
    }
}

export const moment = new DateName()