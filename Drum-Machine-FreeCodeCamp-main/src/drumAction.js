export const playSoundAction = (payloadvalue) => {
    return {
        type: 'PLAYSOUND',
        payload: payloadvalue
    }
}

export const updatePower = (offpowerpayload) => {
    return {
        type: "SWITCH_POWER",
        checked: offpowerpayload
    }
}
export const updateBank = (switchpowerpayload) => {
    return {
        type: "SWITCH_BANK",
        checked: switchpowerpayload
    }
}
export const updateVolume = (graduallyincreasevolume) => {
    return {
        type: "INCREASE_VOLUME",
        payload: graduallyincreasevolume
    }
}