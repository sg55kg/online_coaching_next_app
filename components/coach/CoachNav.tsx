import {FC, useRef, useState} from "react";
import {useCoachContext} from "../../contexts/CoachContext";
import Link from "next/link";
import {IconButton, VStack} from "@chakra-ui/react";
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

    const buttonRef = useRef()

    return (
        <>
            <IconButton 
                aria-label={'Where are you going?'} 
                icon={<HamburgerIcon />}
                onClick={() => setShowModal(true)}
                ref={buttonRef}
            >
            </IconButton>   
            <Drawer 
                isOpen={showModal}
                placement="top"
                onClose={() => setShowModal(false)}
            >
                <DrawerOverlay />
                <DrawerContent>
                    <DrawerCloseButton 
                    />
                    <DrawerBody>
                        <VStack>
                            <Link href="/coach/dashboard">Activity</Link>
                            <Link href="/coach/teams">My Teams</Link>
                            <Link href="/coach/chat">Messages</Link>
                        </VStack>
                    </DrawerBody>
                </DrawerContent>        
            </Drawer>   
        </>
    )
}

export default CoachNav