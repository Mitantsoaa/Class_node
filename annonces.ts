import { Annonce } from './annonce';
import { writeFile, readFile } from 'fs/promises';

export class Annonces{
    annonces: Annonce[]

    constructor(){
        this.load()
    }

    load(): void{
        readFile("./data/file.json", 'utf-8')
            .then((data) => {
                this.annonces = JSON.parse(data)
            })
    }

    add(annonce: Annonce): void{
        this.annonces.push(annonce)
        this.save()
    }

    list (): void{
        for (let x of this.annonces) {
            x.displayData()
        }
    }

    save(): void{
        writeFile("../data/file.json", JSON.stringify(this.annonces), 'utf8')
            .then(() => console.log(`Successfully wrote `))
            .catch(console.error);
    }

    deleteByIndex(){

    }
}
// if not exist file.json | not have permission / existe => fichier vide
// sady anaty fichier no anaty base de données

