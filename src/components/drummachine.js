import React, { useState } from 'react';
import '../style/style.scss';





const Display = props => {

    return (
        <div className='display-container'>
            <div className='power'>
                <p>Power</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>

            <div id='display'>
                <p>{props.audioName}</p>
            </div>

            <div className='volume'>
                <label for="volume">
                    <input type="range" id="volume"
                        min="0" max="100" step="1" value="30" />
                </label>
            </div>

            <div className='bank'>
                <p>Bank</p>
                <label className="switch">
                    <input type="checkbox" />
                    <span className="slider"></span>
                </label>
            </div>
        </div>
    )
}

class DrumPads extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            padAnimation: "",
        }

        /*
        this.beastRoarRef = React.createRef();
        this.fastRocketRef = React.createRef();
        this.dogBarkingRef = React.createRef();
        this.wildLionRef = React.createRef();
        this.retroGameRef = React.createRef();
        this.alarmToneRef = React.createRef();
        this.classicAlarmRef = React.createRef();
        this.arcadeRetroRef = React.createRef();
        this.fastSmallRef = React.createRef();
        */
        this.audioRefs = [];
        this.buttonRefs = [];
        this.handleClick = this.handleClick.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
        this.changeButtonColor = this.changeButtonColor.bind(this);
    }

    getAudioRefs = (el) => {
        //push element to refs array
        this.audioRefs.push(el)
    }

    changeButtonColor(x){
        
    }

    handleClick(event) {

        this.props.displayName(event.target.id);

        console.log(this.state.padAnimation);
        switch (event.target.id) {
            case "beast-roar":
                //this.beastRoarRef.current.play();
                //this.audioRefs[0].play();
                event.target.firstElementChild.play();
                //this.changeButtonColor("beast-roar", event.target.id);
                event.target.className +=   ` pad-animation`;
                setTimeout(() => {
                    event.target.className =  `drum-pad`;
                }, 1000);               
                break;
            case "fast-rocket":
                event.target.firstElementChild.play();
                event.target.className +=   ` pad-animation`;
                setTimeout(() => {
                    event.target.className =  `drum-pad`;
                }, 1000); 
                break;
            case "dog-barking":
                event.target.firstElementChild.play();
                event.target.className +=   ` pad-animation`;
                setTimeout(() => {
                    event.target.className =  `drum-pad`;
                }, 1000); 
                //this.audioRefs[2].play();
                break;
            case "wild-lion":
                event.target.firstElementChild.play();
                event.target.className +=   ` pad-animation`;
                setTimeout(() => {
                    event.target.className =  `drum-pad`;
                }, 1000); 
                //this.audioRefs[3].play();
                break;
            case "retro-game":
                event.target.firstElementChild.play();
                event.target.className +=   ` pad-animation`;
                setTimeout(() => {
                    event.target.className =  `drum-pad`;
                }, 1000); 
                //this.audioRefs[4].play();
                break;
            case "alarm-tone":
                event.target.firstElementChild.play();
                event.target.className +=   ` pad-animation`;
                setTimeout(() => {
                    event.target.className =  `drum-pad`;
                }, 1000); 
                //this.audioRefs[5].play();
                break;
            case "classic-alarm":
                event.target.firstElementChild.play();
                event.target.className +=   ` pad-animation`;
                setTimeout(() => {
                    event.target.className =  `drum-pad`;
                }, 1000); 
                //this.audioRefs[6].play();
                break;
            case "arcade-retro":
                event.target.firstElementChild.play();
                event.target.className +=   ` pad-animation`;
                setTimeout(() => {
                    event.target.className =  `drum-pad`;
                }, 1000); 
                //this.audioRefs[7].play();
                break;
            case "fast-small":
                event.target.firstElementChild.play();
                event.target.className +=   ` pad-animation`;
                setTimeout(() => {
                    event.target.className =  `drum-pad`;
                }, 1000); 
                //this.audioRefs[8].play();
                break;
            default:
                return null;


        }


    }

    // changeButtonColor(){
        
    //         this.setState(prevState => ({
    //             padAnimation: prevState = "pad-animation"
    //         }));

    //         setTimeout(() => {
    //             this.setState(prevState => ({
    //                 padAnimation: prevState = "yum!",
    //             }))
    //         }, 1000);
    //     }

    // }

    getButtonRef = (el) => {
        this.buttonRefs.push(el);
    }

    handleKeyPress(event) {
        console.log("key pressed");
        switch (event.key) {
            case "Q":
                //this.beastRoarRef.current.play();
                this.audioRefs[0].play();
                this.props.displayName(this.buttonRefs[0].id)
                //event.target.firstElementChild.play();
                break;
            case "W":
                this.audioRefs[1].play();
                //event.target.firstElementChild.play();
                this.props.displayName(this.buttonRefs[1].id)
                break;
            case "E":
                //event.target.firstElementChild.play();
                this.audioRefs[2].play();
                this.props.displayName(this.buttonRefs[2].id)
                break;
            case "A":
                //event.target.firstElementChild.play();
                this.audioRefs[3].play();
                this.props.displayName(this.buttonRefs[3].id)
                break;
            case "S":
                //event.target.firstElementChild.play();
                this.audioRefs[4].play();
                this.props.displayName(this.buttonRefs[4].id)
                break;
            case "D":
                //event.target.firstElementChild.play();
                this.audioRefs[5].play();
                this.props.displayName(this.buttonRefs[5].id)
                break;
            case "Z":
                //event.target.firstElementChild.play();
                this.audioRefs[6].play();
                this.props.displayName(this.buttonRefs[6].id)
                break;
            case "X":
                //event.target.firstElementChild.play();
                this.audioRefs[7].play();
                this.props.displayName(this.buttonRefs[7].id)
                break;
            case "C":
                //event.target.firstElementChild.play();
                this.audioRefs[8].play();
                this.props.displayName(this.buttonRefs[8].id)
                break;
            default:
                return null;

        }

    }

    render() {

        return (
            <div className='drum-pads-container'>
                <button id="beast-roar" className="drum-pad"  ref={this.getButtonRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress} >
                    <audio ref={this.getAudioRefs} src="https://assets.mixkit.co/sfx/download/mixkit-aggressive-beast-roar-13.wav" className='clip' id='Q'>
                    </audio>
                    Q
                </button>
                <button id="fast-rocket" className="drum-pad" ref={this.getButtonRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                    <audio ref={this.getAudioRefs} src='https://assets.mixkit.co/sfx/download/mixkit-fast-rocket-whoosh-1714.wav' className='clip' id='W'></audio>
                    W</button>
                <button id="dog-barking" className="drum-pad" ref={this.getButtonRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                    <audio ref={this.getAudioRefs} src='https://assets.mixkit.co/sfx/download/mixkit-dog-barking-twice-1.wav' className='clip' id='E'></audio>
                    E</button>
                <button id="wild-lion" className="drum-pad" ref={this.getButtonRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                    <audio ref={this.getAudioRefs} src='https://assets.mixkit.co/sfx/download/mixkit-wild-lion-animal-roar-6.wav' className='clip' id='A'></audio>
                    A</button>
                <button id="retro-game" className="drum-pad" ref={this.getButtonRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                    <audio ref={this.getAudioRefs} src='https://assets.mixkit.co/sfx/download/mixkit-retro-game-notification-212.wav' className='clip' id='S'></audio>
                    S</button>
                <button id="alarm-tone" className="drum-pad" ref={this.getButtonRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                    <audio ref={this.getAudioRefs} src='https://assets.mixkit.co/sfx/download/mixkit-alarm-tone-996.wav' className='clip' id='D'></audio>
                    D</button>
                <button id="classic-alarm" className="drum-pad" ref={this.getButtonRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                    <audio ref={this.getAudioRefs} src='https://assets.mixkit.co/sfx/download/mixkit-classic-alarm-995.wav' className='clip' id='Z'></audio>
                    Z</button>
                <button id="arcade-retro" className="drum-pad" ref={this.getButtonRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                    <audio ref={this.getAudioRefs} src='https://assets.mixkit.co/sfx/download/mixkit-arcade-retro-game-over-213.wav' className='clip' id='X'></audio>
                    X</button>
                <button id="fast-small" className="drum-pad" ref={this.getButtonRef} onClick={this.handleClick} onKeyPress={this.handleKeyPress}>
                    <audio ref={this.getAudioRefs} src='https://assets.mixkit.co/sfx/download/mixkit-fast-small-sweep-transition-166.wav' className='clip' id='C'></audio>
                    C</button>
            </div>
        )
    }
}


class DrumMachine extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            audioName: ""
        }
        this.displayName = this.displayName.bind(this);
    }

    displayName(name) {
        this.setState({
            audioName: name.split("-").join(" ").toUpperCase()
        })
    }


    render() {
        return (
            <div className='container' id='drum-machine'>
                <DrumPads displayName={this.displayName} />
                <Display audioName={this.state.audioName} />
            </div>
        )
    }

}

export default DrumMachine