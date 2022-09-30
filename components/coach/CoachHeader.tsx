import { Flex } from "@chakra-ui/react";
import {FC} from "react";
import CoachNav from "./CoachNav";



const CoachHeader: FC = () => {

    return (
        <Flex justify='space-between'>
            Coach Header
            <CoachNav />
        </Flex>
    )
}

export default CoachHeader