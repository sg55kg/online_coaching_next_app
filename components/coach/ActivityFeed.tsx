import {FC} from "react";
import {TabList, Tabs, Tab, TabPanels, TabPanel} from "@chakra-ui/tabs";


const ActivityFeed: FC = () => {

    return (
        <div>
            <Tabs>
                <TabList>
                    <Tab>
                        Programs
                    </Tab>
                    <Tab>
                        Activity
                    </Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                        3 athletes need a new program for next week
                    </TabPanel>
                    <TabPanel>
                        Someone did something
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </div>
    )
}

export default ActivityFeed