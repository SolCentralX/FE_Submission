import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import UserPosition from './UserPosition';
import UserOrder from './UserOrder';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          {children}
          {/* <Typography>{children}</Typography> */}
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const UserStats = () => {

  const [value, setValue] = React.useState(0);
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
   
    <Box sx={{ width: '100%'}} >
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Positions" className='text-white'{...a11yProps(0)} />
          <Tab label="Orders" className='text-white'{...a11yProps(1)} />
          <Tab label="Trades" className='text-white'{...a11yProps(2)} />
        </Tabs>
      </Box>
      <div className='bg-[#17182c]'>
      <TabPanel value={value} index={0}>
        <UserPosition/>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <UserOrder/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className='text-white'>No trades yet</div>
      </TabPanel>
      </div>
    </Box>
 
  )
}

export default UserStats