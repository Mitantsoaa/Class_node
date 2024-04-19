export class Annonce
{
    titre: string
    description: string
    prix: number | undefined
    date: string

    displayData(): void {
        console.log('Titre: ' + this.titre)
        console.log('Description: ' + this.description)
        console.log('Prix: ' + this.prix)
        console.log('Date: ' + this.date)
        console.log('----------------------------')
    }

    isContain(pattern: string): boolean {
        return Object.values(this).find(tab => tab.includes(pattern))
    }
}