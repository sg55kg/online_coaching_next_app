import {EndDateOptions} from "../constants";

export const calculateEndDate = (startDate: Date, programLength: number, measurement: EndDateOptions) => {
    let endDate: Date
    if(measurement === EndDateOptions.WEEKS) {
        endDate = new Date(startDate.getTime() + programLength * 7 * 24 * 60 * 60 * 1000)
    } else {
        endDate = new Date()
        endDate.setMonth(startDate.getMonth() + programLength)
    }
    return endDate
}

export const handleSaveProgram = async (newProgramObj) => {
    try {
        await fetch('api/programs', {
            method: 'POST'
        })
    } catch (err) {
        console.log(err)
    }
}