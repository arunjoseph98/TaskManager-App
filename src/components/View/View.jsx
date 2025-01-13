import React, { useEffect, useState } from 'react'
import Grid from '@mui/material/Grid2';
import BoardCard from '../Card/BoardCard';
import AddCard from '../Card/AddCard';
import AddNewBoard from '../modal/AddNewBoard';
import { getTaskBoardAPI } from "../../services/allAPI"
import { Box, CircularProgress } from '@mui/material';

const View = ({resBoard,setResBoard}) => {

  const [allBoards, setAllBoards] = useState([])
  const [loading, setLoading] = useState(false);
  

  useEffect(() => {
    getTaskBoard()
  }, [resBoard])

  // console.log(allBoards);
  //getTaskBoardAPI
  const getTaskBoard = async () => {
    setLoading(true); // Start loading
    try {
      const result = await getTaskBoardAPI();
      // console.log(result);
      if (result.status >= 200 && result.status < 300) {
        setAllBoards(result.data);
      }
      else {
        console.log("API call failed");
      }
    } catch (error) {
      console.error('Error creating board:', error);
    } finally {
      setLoading(false); // Stop loading
    }
    
  };



  //AddNewBoard Modal
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  return (
    <>
      {loading ? ( // Show loader while loading is true
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh', // Full screen height
          }}
        >
          <CircularProgress size={80} style={{marginTop:-400}}/>
        </Box>
      ) : (
        <Grid
          container
          spacing={2} // Adjust spacing between items
          justifyContent="flex-start" // Align items horizontally
          alignItems="flex-start" // Align items vertically
        >
          {allBoards?.length > 0 &&
            allBoards.map((board) => (
              <Grid key={board.id} xs={12} sm={6} md={4}>
                <BoardCard setResBoard={setResBoard} boardData={board} />
              </Grid>
            ))}

          <Grid xs={12} sm={6} md={4}>
            <AddCard onClick={handleOpenModal} />
          </Grid>
        </Grid>
      )}

      <AddNewBoard open={isModalOpen}
        handleClose={handleCloseModal}
        setResBoard={setResBoard} 
        isEdit={false}/>
    </>
  )
}

export default View