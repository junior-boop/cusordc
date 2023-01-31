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

export class ReformatingDate{
    constructor(){
        this.value = ''
    }

    #mois = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mais', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

    #convertToNumbMonth(value){
        let position = this.#mois.map((el, key) => {
            if(value === el){
                return key + 1
            }
        })
        return position.join('').length < 2 ? `0${position.join('')}` : position.join('')
    }

    #convertToNormalDateDay(value){
        const newNumber = parseInt(value)
        return newNumber < 10 ? `0${newNumber}` : newNumber
    }

    set newDate (value){
        this.value = value
    }

    get newDate() {
        let date = this.value.split(' ')
        let format = [date[2], this.#convertToNumbMonth(date[1]), this.#convertToNormalDateDay(date[0])]

        // console.log(this.#convertToNormalDateDay(date[0]))
        return (format.join('-'))
    }
}
