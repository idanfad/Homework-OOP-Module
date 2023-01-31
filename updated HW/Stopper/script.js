//////////////////////////////////////////Task 1 OOP /////////////////////////////////////////

// let time = 1;

// class Timer {
//     startButton;
//     stopButton;
//     resetButton;
//     displayBlock;

//     trigger;
//     constructor() {


//         this.trigger = true;
//         this.startButton = document.getElementById('startBtn');
//         this.startButton.addEventListener('click', () => {
//             this.something();
//         });


//         this.stopButton = document.getElementById('stopBtn');
//         this.stopButton.addEventListener('click', () => {
//             this.stop();
//         });

//         this.resetButton = document.getElementById('resetBtn');
//         this.resetButton.addEventListener('click',()=>{
//             this.displayBlock.innerHTML = "00:00";
//             time = 0;
//             console.log('Timer reseted.');
//         });
//         this.displayBlock = document.getElementById('displayBlock');

//     }

//     something(){
//         this.trigger = true;
//         time++;
//         setTimeout(()=>{this.start()}, 1000);
//         // setTimeout(this.start,1000);

//     }

//     test(){
//         console.log('hi');
//     }
//     start(){
//         console.log('Timer in progress...');
//         this.displayBlock.innerHTML = time;

//         if (this.trigger == true) {
//             this.something();
//         }
//     }

//     stop(){
//         this.trigger = false;
//         console.log('Timer stopped');
//     }

// }

//////////////////////////////////////////Task 1 OOP Advanced app /////////////////////////////////////////

class TimerNew {
    time;
    startButton;
    stopButton;
    resetButton;
    displayBlock;
    interval;
    constructor() {
        this.time = 0;
        this.startButton = document.getElementById('startBtn');
        this.startButton.addEventListener('click', () => {
            this.start();
        });


        this.stopButton = document.getElementById('stopBtn');
        this.stopButton.addEventListener('click', () => {
            this.stop();
        });

        this.resetButton = document.getElementById('resetBtn');
        this.resetButton.addEventListener('click', () => {
            this.reset();
        });
        this.displayBlock = document.getElementById('displayBlock');
    }

    start() {
        if (!this.interval) { // to check if interval is already running for not send multiple events.
            console.log('STARTED');
            this.interval = setInterval(this.tick.bind(this), 1000); // binding function tick with the Class("TimerNew") properties.
        } else {
            console.log('INTERVAL_ALREADY_RUNNING');
        }  
    }

    tick() {
        this.time++;
        this.print();
    }

    print(){
        this.displayBlock.innerText = this.time;

    }

    stop() {    
        console.log('STOPPED');
        clearInterval(this.interval); 
        this.interval = null; // clear the interval storage. for procced with the count after stopped else the interval is already running and it wont go through the if in line 92.
    }

    reset(){
        this.time = 0;
        this.print();
        console.log('RESETED');

    }
}

let b = new TimerNew();