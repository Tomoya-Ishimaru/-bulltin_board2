import { FC, memo } from "react";
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from "@chakra-ui/react";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  onClickHome: () => void;
  onClickUserManagement: () => void;
  onClickSetting: () => void;
  onClickProfile: () => void;
};

// eslint-disable-next-line react/display-name
 const MenuDrawer: FC<Props> =memo(
   function MenuDrawer(props: { isOpen: any; onClose: any; onClickHome: any; onClickUserManagement: any; onClickSetting: any; onClickProfile: any; }){
    const {
      isOpen,
      onClose,
      onClickHome,
      onClickUserManagement,
      onClickSetting,
      onClickProfile
    } = props;
  
    return (
      <Drawer placement="left" size="xs" onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerBody as="nav" p={0} bg="gray.100">
              <Button w="100%" onClick={onClickHome}>
                TOP
              </Button>
              <Button w="100%" onClick={onClickUserManagement}>
                投稿する
              </Button>
              <Button w="100%" onClick={onClickSetting}>
                プロフィール設定
              </Button>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    );
   }
 )

 export {MenuDrawer};
 
  

