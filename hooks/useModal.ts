import {useState} from "react";


export const useModal = () => {
    const [viewModal, setViewModal] = useState<boolean>(false)

    const toggleModal = () => setViewModal(prev => !prev)

    return {
        viewModal,
        toggleModal
    }
}