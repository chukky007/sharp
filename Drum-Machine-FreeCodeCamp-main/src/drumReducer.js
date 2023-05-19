import { bankOne, bankTwo, httpFirstPart, httpMpPart } from './constants'
let audio = new Audio("")
const initialState = {
    power: "OFF",
    bank: "BANK1",
    soundName: "",
    volume: 1,
};

const togglesReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SWITCH_POWER':
            return {
                ...state,
                power: action.checked ? "ON" : "OFF"
            }

        case 'SWITCH_BANK':
            return {
                ...state,
                bank: action.checked ? "BANK2" : "BANK1"
            }
        case 'PLAYSOUND':
            // taking the bank state as 'string' (input) and returning the output as an 'object'
            let outputBank = null;
            if (state.bank == "BANK1") {
                outputBank = bankOne
            } else {
                outputBank = bankTwo
            }
            //assigning the outputbank[action.payload] to a variable that can be used for the audio
            let soundNameState = outputBank[action.payload]
            audio = new Audio(httpFirstPart + soundNameState + httpMpPart)
            if (state.power == "ON") {
                audio.volume = state.volume
                audio.play()
                return {
                    ...state,
                    soundName: soundNameState,
                };
            }
        case 'INCREASE_VOLUME':
            return {
                ...state,
                volume: action.payload / 100
            }
        default:
            return state;
    }
};
export default togglesReducer;
