import {AthleteData} from "../../../types";

export enum EndDateOptions {
    WEEKS = 'WEEKS',
    MONTHS = 'MONTHS'
}

export interface NewProgramModalProps {
    isOpen: boolean,
    onClose: () => void,
    athlete?: AthleteData,
}