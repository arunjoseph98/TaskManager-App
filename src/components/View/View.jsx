import React from 'react'
import Grid from '@mui/material/Grid2';
import CommonBtn from '../common/CommonBtn/CommonBtn';
import BasicMenu from '../common/BasicMenu/BasicMenu';
import ViewHead from './ViewHead';
import BoardCard from '../Card/BoardCard';
import AddCard from '../Card/AddCard';
import TaskCard from '../Card/TaskCard';


const View = () => {
  return (
    <Grid
      container
      spacing={2} // Adjust spacing between items
      justifyContent="flex-start" // Align items horizontally
      alignItems="flex-start"     // Align items vertically
    >
      <Grid  xs={12} sm={6} md={4}> {/* Item 1 */}
        <BoardCard />
      </Grid>
      <Grid  xs={12} sm={6} md={4}> {/* Item 2 */}
        <TaskCard />
      </Grid>
      <Grid  xs={12} sm={6} md={4}> {/* New Item in next row */}
        <TaskCard />
      </Grid>
      <Grid  xs={12} sm={6} md={4}> {/* Item 3 */}
        <AddCard />
      </Grid>
    </Grid>
  )
}

export default View