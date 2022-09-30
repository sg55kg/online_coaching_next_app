import {FC, useState} from "react";
import {useCoachContext} from "../../contexts/CoachContext";
import Link from "next/link";
import { IconButton } from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
  } from '@chakra-ui/react'


const CoachNav: FC = () => {

    const { coach, teams } = useCoachContext()

    const [ showModal, setShowModal] = useState(false)

    return (
        <>
            <IconButton aria-label={'Where are you going?'} icon={<HamburgerIcon />}>
            </IconButton>   
            <Drawer 
                isOpen={showModal}
                placement="top"
                onClose={() => setShowModal(false)}
            >
                    
            </Drawer>   
        </>
    )
}

export default CoachNav