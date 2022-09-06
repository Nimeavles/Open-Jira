import { Divider, Drawer, List, ListItem, ListItemIcon, ListItemText, Typography } from "@mui/material";
import { Box } from "@mui/system";
import InboxOutlinedIcon from '@mui/icons-material/InboxOutlined';
import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';

const menuItems = ['Inbox', 'Starred', 'Send Email', 'Drafts']

export const SideBar = () => {
  return (
    <Drawer anchor="left" open={true} onClose={() => console.log("cerrando")}>
      
      <Box sx={{ width: 250 }}>
      <Box sx={{ padding: '5px 10px '}}>
        <Typography variant="h4">
            Menú
        </Typography>
      </Box>

      <List>
        {
            menuItems.map( ( text, index) => (
                <ListItem button key={ text }>
                    <ListItemIcon>
                        { index % 2 ? <InboxOutlinedIcon /> : <MailOutlineOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary={ text } />
                </ListItem>
            ))
        }
      </List>
      <Divider />
      </Box>

    </Drawer>
  );
};
