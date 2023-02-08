import { useEffect, useState } from "react"

export class Base64Image {
    constructor(element){
        this.element = element
        this.image_base64
    }

    

    set #images (value){
        this.image_base64 = value
    } 

    get #images () {
        let tab = []
        if(!this.element.files || !this.element.files[0]) return ;

        const FilesReader = new FileReader();
        FilesReader.readAsDataURL(this.element.files[0])

        FilesReader.addEventListener('load', (e) => {
            // this.#images = e.target.result

            tab.push(e.target.result)
        })

        console.log(tab[0])
    }
    

    #convertor(){
        if(!this.element.files || !this.element.files[0]) return ;

        const FilesReader = new FileReader();
        FilesReader.readAsDataURL(this.element.files[0])

        FilesReader.addEventListener('load', (e) => {
            this.#images = e.target.result
        })

        console.log(this.#images)

    }

    base64(){
        this.#images
    }
}

export function useBase64Hook(element){
    const [base64, setBase64] = useState('')

    useEffect(() => {
        if(!element.files || !element.files[0]) return;


        const FilesReader = new FileReader();
        FilesReader.readAsDataURL(element.files[0])

        FilesReader.addEventListener('load', (e) => {
           setBase64(e.target.result)
        })

    }, [base64])


    return [base64, element.files[0].name]
    
}