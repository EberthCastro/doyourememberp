import React, { useState, useEffect } from "react";
import axios from "axios";
import CardR from "../CardUnit/CardR";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: '#f9b5ac',
  '&:hover': {
    backgroundColor: '#f9b5ac',
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));

const endpoint = 'http://localhost:8000/api'

function Dashboard() {
  const [dreams, setDreams] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getAllDreams();
  }, []);

  const getAllDreams = async () => {
    const response = await axios.get(`${endpoint}/remembers`);
    console.log(response.data);
    setDreams(response.data);
  };

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredDreams = dreams.filter(
    (remember) =>
      remember.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      remember.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Box sx={{  margin: '10px', width:'20%' }}>   
          
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              type="text"
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearch}
            />
          </Search>
        
      
    </Box>

      

      <Box sx={{
        display:'flex',
        flexWrap:'wrap',
        justifyContent:'center',
        width:'100%',
        
        }}>
        {filteredDreams.map((remember) => {
          return <CardR key={remember.id} remember={remember} />;
        })}
      </Box>
    </>
  );
}

export default Dashboard;
