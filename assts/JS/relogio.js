class DataEndHours {
    constructor() {
        this.hours = document.querySelector('.hours')
        this.initialize()
    }

    formatted() {
        let date = new Date();
        this.hours.innerHTML = date.toLocaleTimeString('pt-br');
        this.hours.innerHTML += ' - '
        this.hours.innerHTML += date.toLocaleDateString('pt-BR', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
        
    }

    initialize() {
        setInterval(() => {
            console.log(this.formatted())
            this.formatted();
        },1000)
    }
}

const hours = new DataEndHours();